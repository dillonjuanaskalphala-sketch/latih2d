const form = document.getElementById("form-kontak");

form.addEventListener("submit", function (event) {
	// mencegah form berpindah/reload halaman
	event.preventDefault();

	// ===== NOMOR WHATSAPP TUJUAN (format internasional, tanpa + dan tanpa 0 di depan) =====
	const nomorWhatsApp = "6281246288285";

	// ===== MENGAMBIL DATA DARI FORM =====
	const nama    = document.getElementById("nama").value;
	const email   = document.getElementById("email").value;
	const telepon = document.getElementById("telepon").value;
	const minat   = document.getElementById("minat").value;
	const pesan   = document.getElementById("pesan").value;

	// ===== MEMBUAT ISI PESAN WHATSAPP =====
	const isiPesan =
`Halo Cinta Kasih, saya menghubungi melalui website CV.
Nama Lengkap : ${nama}
Email        : ${email}
No. Telepon  : ${telepon}
Bidang Minat : ${minat}
Pesan        : ${pesan}`;

	// ===== MENGUBAH PESAN AGAR AMAN DIPAKAI DI LINK =====
	const pesanEncoded = encodeURIComponent(isiPesan);

	// ===== MEMBUAT LINK WHATSAPP =====
	const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

	// ===== MEMBUKA WHATSAPP DI TAB BARU =====
	window.open(urlWhatsApp, "_blank");
});