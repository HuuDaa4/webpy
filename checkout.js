document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkout-form");
  const totalDisplay = document.querySelector("#checkout-total .total");

  function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
  }

  function hitungTotal() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    cart.forEach((item) => {
      total += item.harga * item.qty;
    });
    totalDisplay.textContent = formatRupiah(total);
    return total;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = form.nama.value.trim();
    const alamat = form.alamat.value.trim();
    const telepon = form.telepon.value.trim();
    const metode = form.metode.value;

    if (!nama || !alamat || !telepon || !metode) {
      alert("Mohon lengkapi semua data.");
      return;
    }

    const checkoutData = {
      nama,
      alamat,
      telepon,
      metode,
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };

    localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
    window.location.href = "invoice.html";
  });

  hitungTotal();
});
