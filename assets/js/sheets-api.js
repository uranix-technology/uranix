// URL Web App Apps Script yang baru
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyIoXapLaqzscMWOWO0gPzIEJRU8eA6GOwzNQMyDtVg30KL2kJ1XkttpPt6P6OUhL_xgA/exec";

// --- FUNGSI REGISTRASI ---
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = registerForm.querySelector('button[type="submit"]');
        submitBtn.innerText = "Memproses...";
        submitBtn.disabled = true;

        const data = {
            action: "register",
            fullname: document.getElementById('fullname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Penting untuk Apps Script
                cache: 'no-cache',
                body: JSON.stringify(data)
            });

            // Karena no-cors, kita asumsikan berhasil jika tidak ada error network
            alert("Registrasi Berhasil! Silakan masuk.");
            window.location.href = "login.html";
            
        } catch (error) {
            console.error('Error:', error);
            alert("Terjadi kesalahan koneksi.");
        } finally {
            submitBtn.innerText = "Buat Akun";
            submitBtn.disabled = false;
        }
    });
}

// --- FUNGSI LOGIN ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.innerText = "Mengecek...";
        submitBtn.disabled = true;

        const data = {
            action: "login",
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            const result = await response.json();

            if (result.status === "success") {
                // Simpan nama ke localStorage agar dashboard bisa baca
                localStorage.setItem('userName', result.nama);
                window.location.href = "dashboard.html";
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Gagal terhubung ke server.");
        } finally {
            submitBtn.innerText = "Masuk ke Sistem";
            submitBtn.disabled = false;
        }
    });
}