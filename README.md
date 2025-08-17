# p12-site

## Purpose
This project hosts a static site for distributing iOS UDID profiles and certificate information.

## Setup
Clone the repository and serve the files with any static web server or via GitHub Pages.

## Environment Notes
Development requires only basic HTML/CSS; no build tools or backend services are needed.

## Verification
To confirm the UDID API and profile template:

1. `curl -i https://YOURAPP.vercel.app/api/udid`  
   Expect a **200** response containing an `alive` message.

2. `curl -i -X POST https://YOURAPP.vercel.app/api/udid --data-binary '<plist…>'`  
   Expect a **200** response with `Content-Type: application/x-apple-aspen-config`.

3. Open `assets/collector.mobileconfig` in a browser to confirm the configuration profile template.
