document.addEventListener("DOMContentLoaded", () => {
  const invoiceEl = document.getElementById("invoice-detail");
  const data = JSON.parse(localStorage.getItem("checkoutData"));

  if (!data || !data.cart || data.cart.length === 0) {
    invoiceEl.innerHTML = "<p>Data tidak ditemukan atau kosong.</p>";
    return;
  }

  let html = `
    <h3>Data Pemesan</h3>
    <p><strong>Nama:</strong> ${data.nama}</p>
    <p><strong>Alamat:</strong> ${data.alamat}</p>
    <p><strong>Telepon:</strong> ${data.telepon}</p>
    <p><strong>Metode Pembayaran:</strong> ${data.metode}</p>

    <h3>Rincian Produk</h3>
    <ul class="invoice-list">
  `;

  let total = 0;
  data.cart.forEach(item => {
    const subtotal = item.harga * item.qty;
    total += subtotal;
    html += `<li>${item.nama} x${item.qty} - Rp${subtotal.toLocaleString("id-ID")}</li>`;
  });

  html += `</ul><h3>Total Bayar: Rp${total.toLocaleString("id-ID")}</h3>`;
  invoiceEl.innerHTML = html;

  // Opsional: bersihkan cart
  localStorage.removeItem("cart");
});
