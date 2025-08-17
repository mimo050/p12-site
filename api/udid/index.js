/**
 * Health check:
 *   curl -i https://YOURAPP.vercel.app/api/udid
 *     -> 200 with "alive"
 * Submit profile:
 *   curl -i -X POST https://YOURAPP.vercel.app/api/udid --data-binary '<plist…>'
 *     -> 200 with Content-Type: application/x-apple-aspen-config
 * Template:
 *   Open assets/collector.mobileconfig in a browser to inspect the configuration profile.
 */
import crypto from 'node:crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    const msg = `UDID endpoint alive. Method=${req.method}. Send POST with mobileconfig payload.`;
    return res.status(200).send(msg);
  }

  const raw = await new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => resolve(data));
  });

  const match = raw.match(/<key>UDID<\/key>\s*<string>([^<]+)<\/string>/i);
  const udid = match ? match[1] : 'UNKNOWN';

  // TODO: store the UDID (DB/Webhook/Sheet)
  console.log({ udid });

  const doneProfile = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>PayloadContent</key><array/>
  <key>PayloadDescription</key><string>UDID received: ${udid}</string>
  <key>PayloadDisplayName</key><string>P12Hub Complete</string>
  <key>PayloadIdentifier</key><string>com.p12hub.complete</string>
  <key>PayloadOrganization</key><string>P12Hub</string>
  <key>PayloadRemovalDisallowed</key><false/>
  <key>PayloadType</key><string>Configuration</string>
  <key>PayloadUUID</key><string>${crypto.randomUUID()}</string>
  <key>PayloadVersion</key><integer>1</integer>
</dict></plist>`;

  res.setHeader('Content-Type', 'application/x-apple-aspen-config');
  res.setHeader('Content-Disposition', 'attachment; filename="done.mobileconfig"');
  return res.status(200).send(doneProfile);
}
