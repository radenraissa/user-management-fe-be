# Aplikasi Manajemen User

Proyek ini adalah aplikasi Fullstack berbasis web untuk manajemen pengguna dengan sistem autentikasi JSON Web Token (JWT)

## Teknologi
* Frontend: React.js, React Router DOM, Axios, Bulma CSS, jwt-decode.
* Backend: Node.js, Express.js, MySQL, Sequelize, JSON Web Token (JWT), bcrypt, CORS & Cookie-Parser.

## Requirement System
1. Node.js
2. Database MySQL (XAMPP)

## Cara Instalasi run di Lokal

### 1. Persiapan Database
1. Nyalakan MySQL.
2. Buat database baru dengan nama `auth_db`.

### 2. Konfigurasi Backend
1. Buka terminal -> `backend` (cd backend)
2. Instal dependency: `npm install`
3. Buat file `.env` dan isi nilainya:
   ACCESS_TOKEN_SECRET=rahasiaXxx
   REFRESH_TOKEN_SECRET=rahasiaYyy
4. run server: `node index.js`

### 3. Konfigurasi Frontend
1. Buka terminal baru, arahkan ke folder `frontend`
2. Instal dependency: `npm install`
3. run aplikasi: `npm start`

## Fitur Utama
* Autentikasi Access Token dan Refresh Token (HTTP-only cookie).
* Pembaruan token otomatis menggunakan Axios Interceptors.
* Registrasi dan Login dengan password hashing.
* Protected Routes pada halaman Dashboard.
* Manajemen data pengguna (GET dan DELETE) melalui REST API.

Note : Metode DELETE belum diterapkan
