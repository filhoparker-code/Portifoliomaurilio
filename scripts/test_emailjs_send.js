// Small test script to send a test email via EmailJS REST API
// Usage: node scripts/test_emailjs_send.js

(async () => {
  try {
    const service_id = 'service_dgpdj19';
    const template_id = 'template_s54i1ct';
    const user_id = 'DwGEdjk-5ezcBqv4J';

    const template_params = {
      name: 'Teste Automático',
      email: 'filhocesarp@gmail.com',
      message: 'Esta é uma mensagem de teste enviada pelo script de verificação.'
    };

    const payload = {
      service_id,
      template_id,
      user_id,
      template_params
    };

    console.log('Sending test request to EmailJS...', { service_id, template_id, user_id });

    const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const text = await resp.text();
    console.log('Status:', resp.status);
    console.log('Response:', text);
    if (resp.ok) {
      console.log('EmailJS test send succeeded. Check the destination inbox.');
    } else {
      console.error('EmailJS test send failed.');
      process.exitCode = 2;
    }
  } catch (err) {
    console.error('Exception during send:', err);
    process.exitCode = 3;
  }
})();
