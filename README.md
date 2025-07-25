# 🕒 Absenki

**Absenki** adalah aplikasi absensi berbasis web untuk karyawan atau mahasiswa, dibangun menggunakan stack **Next.js**, **NestJS**, dan **MySQL**.

## 🚀 Teknologi yang Digunakan

- ⚙️ Backend: [NestJS](https://nestjs.com/)
- 🌐 Frontend: [Next.js](https://nextjs.org/)
- 💽 Database: MySQL
- 💅 Styling: Tailwind CSS
- 📦 ORM: TypeORM

## 🗂️ Struktur Monorepo

```
Absenki/
├── client/ # Frontend Next.js
├── server/ # Backend NestJS
└── README.md
```

## 🧩 Fitur Utama
🔐 Autentikasi & Otorisasi
- Login dan Logout menggunakan JWT
- Role-based access: admin dan user
- Pendaftaran akun user dilakukan oleh admin

👤 Manajemen User (oleh Admin)
- CRUD data user (tambah, ubah, hapus)
- Pengaturan role: ubah user biasa menjadi admin atau sebaliknya

🕒 Absensi (oleh User)
- Absen masuk dan keluar (otomatis merekam tanggal dan waktu)
- Metadata saat absen:
    - Alamat IP pengguna
    - Koordinat lokasi (latitude, longitude)
    - Validasi lokasi: hanya bisa absen jika dalam radius kantor (misalnya 100 meter)
- Validasi: user hanya dapat absen masuk dan keluar satu kali per hari

📈 Laporan Absensi (oleh Admin)
- Tabel rekap absensi bulanan per user
- Filter berdasarkan tanggal atau nama user
- Export laporan ke format CSV
- Statistik kehadiran:
    - Jumlah hadir
    - Jumlah terlambat
    - Presentase kehadiran
    - Riwayat lokasi absensi