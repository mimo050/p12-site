
function fakeCheckout(e){
  e.preventDefault();
  alert('This is a static demo. Hook this to Stripe/PayPal later.');
  return false;
}
function fakeCheck(e){
  e.preventDefault();
  const out = document.getElementById('check-result');
  out.textContent = 'Mock check: files look OK (demo). Replace with real API.';
  return false;
}

async function signIn(e){
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  try {
    // Use HTTPS to protect credentials in transit.
    const res = await fetch('https://auth.example.com/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      alert('Sign in successful.');
      // location.href = '../index.html';
    } else {
      const err = await res.json().catch(() => ({ message: 'Unknown error' }));
      alert('Sign in failed: ' + err.message);
    }
  } catch (err) {
    alert('Network error. Please try again.');
  }
  return false;
}

async function signUp(e){
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  try {
    // Server must validate inputs before creating an account.
    const res = await fetch('https://auth.example.com/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      alert('Account created successfully.');
      // location.href = '../index.html';
    } else {
      const err = await res.json().catch(() => ({ message: 'Unknown error' }));
      alert('Sign up failed: ' + err.message);
    }
  } catch (err) {
    alert('Network error. Please try again.');
  }
  return false;
}

