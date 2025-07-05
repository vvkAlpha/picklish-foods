document.getElementById('orderForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    pickle: form.pickle.value,
    spiceLevel: form.spiceLevel.value,
    saltLevel: form.saltLevel.value,
    timestamp: new Date().toISOString()
  };

  try {
    const res = await fetch('https://sheetdb.io/api/v1/67gh6say1340y', {
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
