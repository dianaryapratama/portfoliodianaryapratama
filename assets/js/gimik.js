// Tampilkan animasi loading selama 5 detik
setTimeout(() => {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.welcome-wrapper').style.display = 'flex';
}, 5000); // Ubah ke 50000 jika tetap ingin 50 detik

// Fungsi ketika tombol diklik
function masukPortfolio() {
    window.location.href = "main/index.html";
}
