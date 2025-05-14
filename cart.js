document.addEventListener("DOMContentLoaded", function () {
  const keranjangContainer = document.querySelector(".keranjang-container");

  function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
  }

  function renderKeranjang() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    keranjangContainer.innerHTML = "";

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("keranjang-item");
      itemDiv.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}" />
        <div class="item-detail">
          <h4>${item.nama}</h4>
          <p>Harga: ${formatRupiah(item.harga)}</p>
          <label>Jumlah: <input type="number" value="${item.qty}" min="1" data-index="${index}" /></label>
        </div>
        <button class="hapus" data-index="${index}">Hapus</button>
      `;
      keranjangContainer.appendChild(itemDiv);
    });

    if (cart.length > 0) {
      const total = cart.reduce((sum, i) => sum + i.harga * i.qty, 0);
      const totalDiv = document.createElement("div");
      totalDiv.classList.add("total");
      totalDiv.innerHTML = `
        <h3>Total: ${formatRupiah(total)}</h3>
        <button class="checkout">Checkout</button>
      `;
      keranjangContainer.appendChild(totalDiv);
    } else {
      keranjangContainer.innerHTML = "<p>Keranjang kosong.</p>";
    }

    attachListeners();
  }

  function attachListeners() {
    const inputs = document.querySelectorAll(".keranjang-item input");
    const hapusBtns = document.querySelectorAll(".keranjang-item .hapus");
    const checkoutBtn = document.querySelector(".checkout");

    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        const index = e.target.getAttribute("data-index");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart[index].qty = parseInt(e.target.value);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderKeranjang();
      });
    });

    hapusBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderKeranjang();
      });
    });

    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        window.location.href = "checkout.html";
      });
    }
  }

  renderKeranjang();
});
