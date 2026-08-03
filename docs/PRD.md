# Product Requirements Document

## Jalan Milik Bersama

| Informasi | Nilai |
| --- | --- |
| Produk | Landing page edukasi etika berkendara dan transportasi umum |
| Versi dokumen | 1.3 |
| Status | Draft, living document |
| Tanggal pembaruan | 3 Agustus 2026 |
| Platform | Web responsif |
| Pemilik produk | Project Jalan Milik Bersama |

PRD ini menjelaskan **apa** yang perlu dibangun dan **mengapa** produk tersebut diperlukan. Detail teknis implementasi seperti struktur komponen, library, dan cara deployment dibahas di dokumentasi teknis terpisah.

### Prioritas

- **P1:** Wajib tersedia agar v1.0 layak dirilis.
- **P2:** Penting, tetapi dapat diselesaikan setelah seluruh P1 stabil.
- **P3:** Peningkatan lanjutan dan tidak menghambat rilis v1.0.

---

## 1. Problem Statement

### Masalah utama

Keselamatan jalan sering dipahami hanya sebagai kewajiban mematuhi rambu atau menghindari tilang. Pemahaman tersebut belum cukup menjelaskan bahwa tindakan sederhana, seperti menggunakan ponsel, mengambil trotoar, tidak memberi sein, atau mengabaikan zebra cross, dapat langsung mengurangi keselamatan dan hak pengguna jalan lain.

Di sisi lain, ketergantungan terhadap kendaraan pribadi tidak hanya disebabkan pilihan individu. Keterbatasan rute, jadwal, akses halte, keamanan, kenyamanan, dan integrasi transportasi umum juga memengaruhi keputusan masyarakat. Edukasi yang hanya menyalahkan pengendara atau hanya mengajak masyarakat naik transportasi umum akan menyederhanakan masalah yang sebenarnya saling berhubungan.

Materi keselamatan yang panjang dan hanya berbentuk larangan juga berisiko tidak dibaca sampai selesai. Pengguna memerlukan media yang ringkas, visual, interaktif, dan memberikan kesempatan untuk menilai kebiasaan mereka sendiri.

### Data pendukung

- WHO memperkirakan sekitar **1,19 juta orang** meninggal akibat kecelakaan lalu lintas setiap tahun di seluruh dunia.
- Sekitar **92% kematian di jalan** terjadi di negara berpendapatan rendah dan menengah, meskipun negara-negara tersebut memiliki sekitar 60% kendaraan dunia.
- Sekitar **53% korban meninggal** merupakan pengguna jalan rentan, termasuk pejalan kaki, pesepeda, dan pengguna kendaraan roda dua.
- Modul awal project mengidentifikasi hubungan berantai antara ketergantungan kendaraan pribadi, pertumbuhan volume kendaraan, kemacetan, stres, perilaku agresif, dan peningkatan risiko kecelakaan.

Sumber utama: [WHO Global Status Report on Road Safety 2023](https://www.who.int/publications/i/item/9789240086517).

### Peluang produk

Menyediakan satu platform edukasi web yang:

1. Menjelaskan hubungan perilaku individu dan sistem transportasi secara seimbang.
2. Mengubah materi keselamatan menjadi pengalaman belajar singkat dan interaktif.
3. Menghubungkan teori dengan berita aktual dari sumber tepercaya.
4. Mendorong satu komitmen praktis yang dapat dilakukan pada perjalanan berikutnya.

---

## 2. Goals

Produk dinilai berhasil jika mencapai hasil berikut dalam pengujian v1.0.

| ID | Tujuan | Metrik keberhasilan |
| --- | --- | --- |
| G-1 | Meningkatkan pemahaman etika berkendara | Minimal 80% peserta uji dapat menyebutkan tiga perilaku berisiko dan tindakan yang benar setelah menggunakan website. |
| G-2 | Membuat materi selesai dipelajari | Minimal 60% peserta yang memulai mini-game menyelesaikan seluruh 10 situasi. |
| G-3 | Mendorong refleksi pribadi | Minimal 70% peserta menyelesaikan lima pertanyaan Cek Kebiasaan dan memahami arti skornya tanpa bantuan fasilitator. |
| G-4 | Menjaga konteks tetap aktual | Feed berita diperiksa maksimal setiap lima menit dan menampilkan fallback ketika sumber eksternal gagal. |
| G-5 | Menjaga pengalaman tetap cepat | Halaman utama mencapai LCP maksimal 2,5 detik pada koneksi 10 Mbps dan perangkat kelas menengah. |
| G-6 | Mendorong tindakan sederhana | Minimal 50% peserta uji memilih setidaknya satu item pada checklist komitmen. |

### Cara pengukuran awal

Karena v1.0 belum menyimpan data pengguna dan belum menggunakan analytics, G-1, G-2, G-3, dan G-6 diukur melalui usability testing terkontrol dengan minimal 10 peserta yang mewakili target pengguna. Integrasi analytics harus melalui peninjauan privasi sebelum dimasukkan ke rilis berikutnya.

---

## 3. Target Users / Personas

### Persona 1: Pelajar atau mahasiswa

- Usia utama: 16-24 tahun.
- Menggunakan sepeda motor, berjalan kaki, atau transportasi umum untuk sekolah dan kampus.
- Kebutuhan: materi ringkas, contoh dekat dengan keseharian, dan aktivitas belajar yang tidak terasa seperti membaca buku aturan.
- Masalah: cepat kehilangan perhatian pada materi panjang dan belum selalu memahami dampak pelanggaran kecil.

### Persona 2: Pengendara harian

- Usia utama: 18-45 tahun.
- Menggunakan motor atau mobil untuk bekerja dan aktivitas rutin.
- Kebutuhan: penjelasan praktis, situasi realistis, dan tindakan yang dapat langsung diterapkan.
- Masalah: tekanan waktu, kemacetan, kebiasaan lingkungan, dan anggapan bahwa pelanggaran kecil tidak berbahaya.

### Persona 3: Pengguna jalan rentan dan transportasi umum

- Pejalan kaki, pesepeda, penumpang, lansia, atau penyandang disabilitas.
- Kebutuhan: hak mereka di ruang jalan dijelaskan secara jelas dan tidak ditempatkan sebagai isu tambahan.
- Masalah: trotoar, zebra cross, halte, dan ruang aman sering terganggu kendaraan atau akses yang tidak memadai.

### Persona 4: Pendidik dan komunitas

- Guru, dosen, organisasi kampus, dan komunitas keselamatan.
- Kebutuhan: media kampanye yang dapat ditampilkan saat diskusi, orientasi, atau kegiatan edukasi.
- Masalah: materi yang tersedia sering terlalu formal, statis, atau tidak memiliki aktivitas evaluasi.

---

## 4. User Stories

| ID | Pri | User story |
| --- | --- | --- |
| US-1 | P1 | Sebagai pengguna jalan, saya ingin memahami hubungan perilaku berkendara dan kemacetan supaya saya tidak melihat masalah secara terpisah. |
| US-2 | P1 | Sebagai pelajar, saya ingin melihat contoh pelanggaran sehari-hari supaya materi mudah saya hubungkan dengan kondisi nyata. |
| US-3 | P1 | Sebagai pengendara, saya ingin mengetahui perilaku, dampak, dan pilihan yang benar supaya saya tahu apa yang harus dilakukan. |
| US-4 | P1 | Sebagai pengguna, saya ingin menguji keputusan melalui situasi interaktif supaya saya dapat menilai pemahaman saya. |
| US-5 | P1 | Sebagai pengguna, saya ingin mendapat pembahasan setelah menjawab supaya saya memahami alasan jawaban tersebut. |
| US-6 | P1 | Sebagai pengguna, saya ingin mengevaluasi kebiasaan pribadi tanpa membuat akun supaya saya dapat berefleksi dengan aman. |
| US-7 | P1 | Sebagai pembaca, saya ingin melihat sumber data supaya saya dapat memeriksa kebenaran informasi. |
| US-8 | P1 | Sebagai pengguna mobile, saya ingin seluruh konten dan interaksi nyaman digunakan di layar kecil supaya saya dapat belajar dari mana saja. |
| US-9 | P2 | Sebagai pembaca, saya ingin melihat berita transportasi terbaru supaya materi tetap terkait dengan kondisi saat ini. |
| US-10 | P2 | Sebagai pengguna, saya ingin memilih komitmen sederhana supaya pembelajaran berakhir dengan tindakan nyata. |
| US-11 | P2 | Sebagai pendidik, saya ingin alur materi tersusun dari masalah hingga aksi supaya website dapat digunakan sebagai media diskusi. |
| US-12 | P3 | Sebagai pendidik, saya ingin mengunduh ringkasan materi supaya dapat digunakan saat kegiatan tanpa internet. |
| US-13 | P2 | Sebagai pengguna jalan di Bali, saya ingin melihat kondisi kepadatan lalu lintas terkini supaya dapat merencanakan perjalanan dengan tenang dan mempertimbangkan moda alternatif. |
| US-14 | P1 | Sebagai pengguna, saya ingin memilih perspektif perjalanan yang paling dekat dengan saya supaya materi terasa relevan sejak awal. |
| US-15 | P1 | Sebagai pelajar, saya ingin menguji anggapan umum melalui Mitos atau Fakta supaya saya dapat memperbaiki pemahaman yang keliru dengan cepat. |
| US-16 | P1 | Sebagai pengendara, saya ingin mengikuti satu cerita perjalanan dengan beberapa keputusan supaya saya memahami bahwa pilihan kecil saling memengaruhi. |

---

## 5. Functional Requirements

Setiap requirement berikut harus dapat diperiksa sebagai kondisi lulus atau gagal.

| ID | Pri | Requirement dan kriteria penerimaan |
| --- | --- | --- |
| FR-1 | P1 | **Navigasi halaman:** navbar harus menuju section Belajar, Cek Diri, Data, Kuis, Berita, dan Aksi melalui anchor link yang benar. |
| FR-2 | P1 | **Hero:** halaman harus menjelaskan tujuan platform, menyediakan CTA belajar dan mini-game, serta menampilkan ringkasan jumlah materi interaktif. |
| FR-3 | P1 | **Dua sisi masalah:** sistem harus menjelaskan masalah etika berkendara dan keterbatasan sistem transportasi tanpa menyalahkan satu pihak secara mutlak. |
| FR-4 | P1 | **Efek berantai:** lima tahap harus ditampilkan berurutan. Setiap tahap harus memiliki judul, penyebab, dan masalah yang ditimbulkan. |
| FR-5 | P1 | **Contoh kasus:** minimal enam kasus harus menampilkan perilaku, dampak, dan tindakan yang benar. |
| FR-6 | P1 | **Cek Kebiasaan:** sistem harus menampilkan lima pertanyaan, mencatat satu jawaban per pertanyaan, menghitung skor 0-10, dan menampilkan rekomendasi sesuai rentang skor. |
| FR-7 | P1 | **Privasi Cek Kebiasaan:** jawaban tidak boleh dikirim ke server, disimpan ke database, atau tetap tersedia setelah halaman dimuat ulang. |
| FR-8 | P1 | **Dashboard data:** sistem harus menampilkan nilai, penjelasan, tahun, dan tautan sumber untuk setiap statistik keselamatan. |
| FR-9 | P1 | **Mini-game:** sistem harus menyediakan tepat 10 situasi, indikator progres, pilihan jawaban, pembahasan, skor akhir, dan fungsi bermain ulang. |
| FR-10 | P1 | **Validasi mini-game:** pengguna tidak dapat melanjutkan sebelum memilih jawaban dan tidak dapat mengubah skor dengan memilih jawaban berulang pada situasi yang sama. |
| FR-11 | P1 | **Dampak bersama:** sistem harus menjelaskan dampak terhadap keselamatan, ruang bersama, lingkungan, dan kesehatan mental. |
| FR-12 | P1 | **Solusi seimbang:** sistem harus menampilkan tindakan untuk masyarakat, komunitas, serta pemerintah atau operator. |
| FR-13 | P1 | **Checklist aksi:** pengguna harus dapat memilih atau membatalkan enam aksi dan CTA komitmen hanya aktif setelah minimal satu aksi dipilih. |
| FR-14 | P1 | **Responsive navigation:** menu desktop harus berubah menjadi menu mobile yang dapat dibuka, ditutup, dan menutup setelah link dipilih. |
| FR-15 | P2 | **Feed berita:** sistem harus mengambil artikel relevan dari RSS ANTARA, mengurutkan artikel, dan memeriksa ulang data setiap lima menit. |
| FR-16 | P2 | **Fallback berita:** jika seluruh feed gagal atau tidak menghasilkan artikel relevan, sistem harus tetap menampilkan berita cadangan yang telah diverifikasi. |
| FR-17 | P2 | **Rotasi berita:** sistem harus menyediakan maksimal sembilan artikel dalam pool, menampilkan tiga artikel per kelompok, merotasi urutan harian, dan menyediakan tombol untuk melihat kelompok berikutnya. |
| FR-18 | P2 | **Atribusi berita:** setiap kartu harus menampilkan judul, sumber, tanggal, gambar, ringkasan, dan link menuju penerbit asli. |
| FR-19 | P2 | **Kegagalan gambar eksternal:** layout kartu tidak boleh rusak ketika gambar masih dimuat; area gambar harus memiliki ukuran tetap dan warna fallback. |
| FR-20 | P2 | **Daftar sumber:** halaman harus menyediakan link ke WHO, Korlantas Polri, dan ITDP Indonesia yang terbuka aman di tab baru. |
| FR-21 | P3 | **Materi unduhan:** pengguna dapat mengunduh ringkasan aksi dan contoh kasus dalam format PDF yang aksesibel. |
| FR-22 | P1 | **Pilih perspektif:** sistem harus menyediakan perspektif pengendara motor, pengendara mobil, pejalan kaki, pesepeda, dan pengguna transportasi umum serta menampilkan fokus belajar sesuai pilihan. |
| FR-23 | P1 | **Privasi perspektif:** pilihan perspektif hanya berlaku selama halaman terbuka dan tidak disimpan atau dikirim ke server. |
| FR-24 | P1 | **Mitos atau Fakta:** sistem harus menyediakan minimal enam pernyataan, menerima satu jawaban, menampilkan status benar atau salah, memberi penjelasan, menunjukkan progres, dan menyediakan fungsi bermain ulang. |
| FR-25 | P1 | **Cerita perjalanan:** sistem harus menyediakan lima situasi berurutan dalam satu perjalanan dan dua pilihan yang memiliki konsekuensi berbeda pada setiap situasi. |
| FR-26 | P1 | **Indikator cerita:** sistem harus memperbarui indikator Keselamatan, Empati, dan Kendali Diri setelah keputusan dipilih serta menampilkan ringkasan akhir dan fungsi mengulang cerita. |
| FR-27 | P1 | **Validasi interaksi:** jawaban Mitos atau Fakta dan Cerita Perjalanan tidak boleh dipilih berulang untuk menambah skor pada langkah yang sama. |

### Functional Requirements Peta Lalu Lintas Bali v1.1

Requirement berikut telah disetujui untuk rilis v1.1 dan belum menjadi syarat kelulusan v1.0.

| ID | Pri | Requirement dan kriteria penerimaan |
| --- | --- | --- |
| FR-MAP-1 | P1 | **Cakupan peta:** peta harus dibuka dengan pusat dan tingkat zoom awal yang menampilkan wilayah Bali. |
| FR-MAP-2 | P1 | **Traffic layer:** peta harus menampilkan tingkat kepadatan jalan menggunakan data dari penyedia traffic resmi, bukan data yang dikumpulkan sendiri. |
| FR-MAP-3 | P1 | **Legenda:** pengguna harus dapat memahami arti setiap warna kondisi jalan melalui legenda yang selalu tersedia di area peta. |
| FR-MAP-4 | P1 | **Atribusi:** nama penyedia data, status ketersediaan, dan penjelasan bahwa kondisi dapat berubah harus ditampilkan dengan jelas. |
| FR-MAP-5 | P1 | **Lokasi opsional:** lokasi perangkat hanya boleh diminta setelah tindakan eksplisit pengguna dan fitur peta tetap dapat digunakan jika izin ditolak. |
| FR-MAP-6 | P1 | **Tanpa penyimpanan lokasi:** koordinat pengguna tidak boleh disimpan, dikirim ke database project, atau digunakan setelah sesi berakhir. |
| FR-MAP-7 | P1 | **Fallback:** jika API peta atau traffic layer gagal, section harus menampilkan pesan yang mudah dipahami serta tips perencanaan perjalanan; halaman lain tetap berfungsi. |
| FR-MAP-8 | P1 | **Konteks edukasi:** section harus menjelaskan bahwa kondisi padat bukan alasan melakukan pelanggaran dan menyarankan waktu, rute, atau moda alternatif secara umum. |
| FR-MAP-9 | P2 | **Pencarian area:** pengguna dapat mencari nama kabupaten, kota, atau jalan di Bali tanpa menyediakan navigasi turn-by-turn. |
| FR-MAP-10 | P2 | **Titik transportasi:** peta dapat menampilkan titik transportasi publik terpilih jika tersedia data resmi dan dapat diverifikasi. |

---

## 6. Non-Functional Requirements

| ID | Pri | Requirement dan cara verifikasi |
| --- | --- | --- |
| NFR-1 | P1 | **Performa:** LCP <=2,5 detik, CLS <=0,1, dan INP <=200 ms pada koneksi 10 Mbps serta perangkat kelas menengah. Diperiksa dengan Lighthouse atau Web Vitals. |
| NFR-2 | P1 | **Responsive:** tidak boleh ada horizontal overflow pada viewport 360 px, 768 px, 1024 px, dan 1440 px. |
| NFR-3 | P1 | **Aksesibilitas:** target WCAG 2.1 AA untuk kontras, struktur heading, keyboard navigation, focus state, label tombol, dan reduced motion. |
| NFR-4 | P1 | **Progressive resilience:** materi utama, kuis, dan checklist harus tetap berfungsi ketika RSS ANTARA tidak tersedia. |
| NFR-5 | P1 | **Privasi:** v1.0 tidak mengumpulkan nama, email, lokasi, jawaban kuis, atau skor pengguna. |
| NFR-6 | P1 | **Keamanan link:** seluruh link eksternal yang dibuka di tab baru harus menggunakan `rel="noreferrer"`. |
| NFR-7 | P1 | **Integritas konten:** statistik faktual harus mencantumkan sumber dan tahun. Data simulasi harus diberi label simulasi. |
| NFR-8 | P1 | **Kompatibilitas:** fungsi inti harus berjalan pada dua versi terbaru Chrome, Edge, Firefox, dan Safari. |
| NFR-9 | P2 | **SEO:** halaman harus memiliki title, meta description, bahasa dokumen Indonesia, dan struktur heading yang logis. |
| NFR-10 | P2 | **Maintainability:** materi kasus, aksi, sumber, dan fallback berita harus dipisahkan dari komponen presentasi agar dapat diperbarui tanpa mengubah alur UI. |
| NFR-11 | P2 | **Ketersediaan konten:** deployment harus menyajikan materi statis walaupun sumber data eksternal mengalami timeout. |
| NFR-12 | P2 | **Build quality:** perubahan hanya dapat dirilis jika lint, pemeriksaan TypeScript, dan production build berhasil. |

### Non-Functional Requirements Peta v1.1

| ID | Pri | Requirement dan cara verifikasi |
| --- | --- | --- |
| NFR-MAP-1 | P1 | **Performa:** kode dan aset peta dimuat hanya ketika section diperlukan agar tidak memperlambat initial load halaman utama. |
| NFR-MAP-2 | P1 | **Privasi:** permission lokasi harus mengikuti API browser dan tidak boleh diminta otomatis saat halaman pertama kali dibuka. |
| NFR-MAP-3 | P1 | **Resilience:** timeout, kuota habis, atau kegagalan penyedia tidak boleh menyebabkan halaman crash. |
| NFR-MAP-4 | P1 | **Aksesibilitas:** kontrol zoom, tombol lokasi, legenda, dan pesan kegagalan harus dapat digunakan dengan keyboard serta memiliki label yang jelas. |
| NFR-MAP-5 | P1 | **Responsive:** peta harus dapat digunakan tanpa horizontal overflow pada lebar viewport mulai 360 px. |
| NFR-MAP-6 | P2 | **Biaya:** implementasi harus memiliki pembatasan penggunaan atau kuota untuk mencegah tagihan API yang tidak terkendali. |

---

## 7. Scope

### In Scope v1.0

- Landing page satu halaman dengan navigasi section.
- Edukasi tentang etika berkendara dan penggunaan transportasi umum.
- Penjelasan efek berantai lengkap dengan penyebab dan masalah.
- Minimal enam kartu contoh kasus.
- Pemilih lima perspektif pengguna tanpa login atau penyimpanan.
- Mitos atau Fakta dengan minimal enam pernyataan dan pembahasan.
- Cerita Satu Perjalanan dengan lima keputusan dan tiga indikator hasil.
- Cek Kebiasaan dengan lima pertanyaan dan skor lokal.
- Dashboard statistik keselamatan dengan sumber WHO.
- Mini-game berisi 10 situasi dan pembahasan.
- Empat kategori dampak bersama.
- Solusi untuk masyarakat, komunitas, dan pemerintah atau operator.
- Feed berita ANTARA dengan cache, rotasi, dan fallback.
- Checklist komitmen dengan enam aksi.
- Daftar sumber dan atribusi konten.
- Tampilan responsif desktop, tablet, dan mobile.
- Deployment sebagai website publik.

### Out of Scope v1.0

- Login, register, dan profil pengguna.
- Database dan penyimpanan skor atau jawaban.
- Dashboard admin atau CMS.
- Komentar, forum, dan fitur komunitas multi-user.
- Peta lalu lintas Bali pada v1.0. Fitur telah disetujui untuk v1.1 dengan batasan pada bagian berikutnya.
- Pelacakan lokasi pengguna.
- Laporan pelanggaran kepada pihak berwenang.
- Pembayaran, donasi, dan transaksi.
- Rekomendasi personal berbasis AI.
- Push notification dan email newsletter.
- Aplikasi mobile native.
- Mode offline penuh atau PWA.
- Analytics pengguna sebelum ada persetujuan privasi.

### Scope v1.1 yang disetujui

- Peta kondisi lalu lintas yang berfokus pada wilayah Bali.
- Traffic layer dari satu penyedia data resmi.
- Legenda warna kepadatan jalan.
- Permintaan lokasi pengguna secara opsional tanpa penyimpanan.
- Pesan fallback dan tips perjalanan ketika layanan peta gagal.
- Konteks edukasi tentang perencanaan perjalanan dan pilihan moda.
- Pencarian area sebagai P2 jika kuota dan kemampuan penyedia mendukung.

### Tetap di luar scope peta v1.1

- Integrasi CCTV atau ATCS.
- Pengumpulan data kecepatan dan lokasi dari pengguna.
- Penyimpanan riwayat perjalanan.
- Backend monitoring lalu lintas mandiri.
- Navigasi turn-by-turn.
- Prediksi kemacetan buatan sendiri.
- Pelaporan pelanggaran atau kecelakaan.
- Pelacakan kendaraan tertentu.

### Kandidat rilis berikutnya

- **v1.1:** Peta Lalu Lintas Bali versi dasar, filter materi kasus, PDF ringkasan, dan mode presentasi untuk pendidik.
- **v1.2:** analytics anonim dengan consent untuk mengukur funnel pembelajaran.
- **v2.0:** CMS terkurasi untuk pengelolaan konten dan sumber oleh administrator.

---

## Keputusan dan Pertanyaan Terbuka

PRD adalah living document. Bagian berikut perlu diperbarui setelah pengujian pengguna:

| ID | Pertanyaan | Status |
| --- | --- | --- |
| Q-1 | Apakah 10 situasi mini-game terlalu panjang untuk pengguna mobile? | TBD melalui usability test |
| Q-2 | Apakah skor Cek Kebiasaan dipahami sebagai refleksi dan bukan sertifikasi? | TBD melalui interview |
| Q-3 | Apakah tiga artikel per kelompok cukup untuk bagian berita? | TBD melalui observasi penggunaan |
| Q-4 | Apakah pendidik membutuhkan mode presentasi atau PDF lebih dahulu? | TBD melalui interview guru/komunitas |
| Q-5 | Penyedia mana yang paling sesuai untuk traffic Bali dari sisi cakupan, biaya, dan kemudahan integrasi: Google Maps, TomTom, atau HERE? | Google Maps dipilih; menunggu API key, billing, dan uji coverage Bali |

## Keputusan Produk

| ID | Tanggal | Keputusan | Alasan |
| --- | --- | --- | --- |
| D-1 | 3 Agustus 2026 | Peta Lalu Lintas Bali disetujui untuk v1.1 dalam bentuk traffic layer dari penyedia resmi. | Memberikan konteks perjalanan aktual tanpa kompleksitas backend dan pengumpulan data mandiri. |
| D-2 | 3 Agustus 2026 | CCTV, monitoring mandiri, dan penyimpanan lokasi tidak dimasukkan ke v1.1. | Menjaga scope realistis, biaya terkendali, dan risiko privasi rendah. |
| D-3 | 3 Agustus 2026 | Google Maps Traffic Layer dipilih sebagai penyedia v1.1. | Integrasi paling sederhana, model biaya per map load lebih mudah dipantau, dan coverage traffic tersedia di Indonesia. |
| D-4 | 3 Agustus 2026 | Implementasi peta ditahan dan dikeluarkan dari halaman aktif. | Fokus tahap sekarang dialihkan ke kedalaman konten dan engagement tanpa API berbayar. |

## Riwayat Perubahan

| Versi | Tanggal | Perubahan |
| --- | --- | --- |
| 1.0 | 3 Agustus 2026 | PRD awal disusun dari modul project, kondisi produk saat ini, dan panduan tujuh section PRD. |
| 1.1 | 3 Agustus 2026 | Menetapkan Peta Lalu Lintas Bali versi dasar sebagai scope v1.1 beserta requirement, privasi, fallback, dan batasannya. |
| 1.2 | 3 Agustus 2026 | Memilih Google Maps Traffic Layer sebagai hasil technical spike; implementasi kemudian ditahan melalui keputusan D-4. |
| 1.3 | 3 Agustus 2026 | Menambahkan Pilih Perspektif, Mitos atau Fakta, dan Cerita Satu Perjalanan sebagai alur engagement tanpa backend. |
