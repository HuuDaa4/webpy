function addToCart(nama, harga, gambar) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.nama === nama);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ nama, harga, gambar, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${nama} berhasil ditambahkan ke keranjang!`);
}
