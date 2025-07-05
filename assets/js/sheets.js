document.getElementById('orderForm').addEventListener('submit', async function (e) {
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

  const response = await fetch("https://sheetdb.io/api/v1/67gh6say1340y", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data })
  });

  const statusEl = document.getElementById('orderStatus');
  if (response.ok) {
    statusEl.textContent = "✅ Order received! We’ll contact you soon.";
    form.reset();
  } else {
    statusEl.textContent = "❌ Something went wrong. Please try again.";
  }
});