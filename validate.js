// js/validate.js
(function () {
    const form = document.getElementById('signupForm');
    const btn  = document.getElementById('connectBtn');
  
    if (!form || !btn) {
      console.error('validate.js: form or button not found – check IDs.');
      return;
    }
  
    form.addEventListener('submit', async (e) => {
      // Let browser show native hints first
      if (!form.checkValidity()) return;
  
      e.preventDefault();          // stop full-page POST
      btn.disabled    = true;
      btn.textContent = 'Connecting…';
  
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body:   new FormData(form),
        });
  
        if (res.ok) {
          // success – go to thank-you page
          window.location.href = 'success.html';
          return;                 // stop further code
        }
  
        // If backend sent JSON {error: "..."} show it, else generic
        let msg = 'Server error';
        try {
          const json = await res.json();
          if (json && json.error) msg = json.error;
        } catch (_) { /* reply wasn’t JSON – ignore */ }
  
        alert(msg + ` (HTTP ${res.status})`);
      } catch (err) {
        alert('Network error – are you offline?');
        console.error(err);
      } finally {
        btn.disabled    = false;
        btn.textContent = 'Connect';
      }
    });
  })();