// auth.js versi multi-akun untuk Hudraè Skincare

// Register
const registerForm = document.querySelector('form[action="register"]');
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("reg-username").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm-password").value;

    if (!username || !email || !password || !confirmPassword) {
      alert("Semua field wajib diisi.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password tidak cocok.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
      alert("Email sudah terdaftar.");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "login.html";
  });
}

// Login
const loginForm = document.querySelector('form[action="login"]');
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      alert("Login berhasil. Selamat datang, " + user.username + "!");
      localStorage.setItem("loginUser", JSON.stringify(user));
      window.location.href = "index.html";
    } else {
      alert("Username atau password salah.");
    }
  });
}