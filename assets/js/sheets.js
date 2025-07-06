// Function to return formatted timestamp
function getFormattedDateTime() {
  const now = new Date();

  const dayName = now.toLocaleDateString('en-GB', { weekday: 'long' });
  const day = now.getDate();
  const month = now.toLocaleDateString('en-GB', { month: 'long' });
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${dayName}, ${day} ${month} ${year} at ${hours}:${minutes}:${seconds}`;
}

// Form submission handler
document.getElementById('orderForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    pickle: form.pickle.value,
    spiceLevel: form.spiceLevel.value,
    saltLevel: form.saltLevel.value,
    timestamp: getFormattedDateTime()
  };

  const statusEl = document.getElementById('orderStatus');

  try {
    const response = await fetch("https://sheetdb.io/api/v1/67gh6say1340y", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data })
    });

    if (response.ok) {
      statusEl.textContent = "✅ Order received! We’ll contact you soon.";
      form.reset();
    } else {
      statusEl.textContent = "❌ Something went wrong. Please try again.";
    }
  } catch (error) {
    statusEl.textContent = "❌ Network error. Please check your connection.";
    console.error("Submission error:", error);
  }
});
