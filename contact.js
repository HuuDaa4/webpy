document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = form.querySelector("input[name='nama']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const pesan = form.querySelector("textarea[name='pesan']").value.trim();

    if (!nama || !email || !pesan) {
      alert("Mohon isi semua kolom.");
      return;
    }

    const noWA = "6283142165862"; // GANTI dengan nomor WA kamu
    const text = `Halo Hudraè,%0ASaya ${nama} (${email}) ingin menyampaikan pesan:%0A%0A${encodeURIComponent(pesan)}`;
    const url = `https://wa.me/${6283142165862}?text=${text}`;

    window.open(url, "_blank");
  });
});
