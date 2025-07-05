document.getElementById('orderForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    pickleType: form.pickleType.value,
    spiceLevel: form.spiceLevel.value,
    timestamp: new Date().toISOString()
  };

  try {
    const res = await fetch('https://sheetdb.io/api/v1/YOUR_API_ID', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ data })
    });

    if (res.ok) {
      document.getElementById('orderStatus').innerText = '✅ Order submitted!';
      form.reset();
    } else {
      document.getElementById('orderStatus').innerText = '❌ Submission failed.';
    }
  } catch (err) {
    document.getElementById('orderStatus').innerText = '⚠️ Network error.';
  }
});
