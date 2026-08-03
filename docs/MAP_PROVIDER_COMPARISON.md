# Perbandingan Penyedia Peta Lalu Lintas Bali

## Ringkasan Keputusan v1.1

| Informasi | Nilai |
| --- | --- |
| Kebutuhan | Peta visual kondisi lalu lintas Bali |
| Tanggal riset | 3 Agustus 2026 |
| Kandidat | Google Maps, TomTom, HERE |
| Rekomendasi utama | Google Maps Traffic Layer |
| Alternatif tanpa billing awal | TomTom Orbis Traffic |
| Status | Riset selesai; implementasi peta ditahan untuk fokus pada konten |

Perbandingan ini hanya menilai kebutuhan v1.1 yang telah ditentukan dalam PRD: traffic layer visual, lokasi opsional tanpa penyimpanan, tanpa CCTV, tanpa backend monitoring, dan tanpa navigasi turn-by-turn.

---

## Perbandingan Cepat

| Kriteria | Google Maps | TomTom | HERE |
| --- | --- | --- | --- |
| Coverage resmi Indonesia | Traffic Layer tersedia dengan status baik | Flow dan incidents tersedia | Flow, incidents, dan Deep Coverage tersedia |
| Bukti khusus Bali | Tidak tersedia | Tidak tersedia | Tidak tersedia |
| Implementasi traffic visual | Sangat sederhana melalui `TrafficLayer` | Raster/vector traffic tiles atau SDK | Traffic vector layer melalui Maps API JS |
| Data traffic mentah | Tidak tersedia dari `TrafficLayer` | Tersedia melalui API tambahan | Tersedia melalui Traffic API |
| Incident detail | Tidak melalui `TrafficLayer` | Tersedia | Tersedia |
| Free tier utama | 10.000 Dynamic Maps load/bulan | 200.000 traffic tile request/bulan | 30.000 traffic tile request/bulan |
| Biaya setelah free tier | USD 7/1.000 map load untuk tier awal | EUR 0,10/1.000 traffic tile request untuk tier awal | USD 0,12/1.000 traffic tile request untuk tier awal |
| Cara perhitungan | Per successful map load | Per tile request | Per tile request |
| Billing untuk produksi | Billing Google Cloud wajib aktif | Dapat mulai tanpa kartu kredit | Akun dan project HERE diperlukan |
| Kematangan integrasi web | Tinggi | API tile matang; SDK JS masih Public Preview | Tinggi, tetapi setup lebih kompleks |
| Risiko biaya | Mudah diprediksi per map load | Banyak tile dapat diminta dalam satu sesi | Banyak tile dapat diminta dalam satu sesi |
| Kesesuaian v1.1 | Sangat cocok | Cocok | Cocok, tetapi berlebihan untuk kebutuhan awal |

Angka free tier bukan per pengunjung untuk TomTom dan HERE. Satu pembukaan peta dapat meminta banyak tile saat map dimuat, diperbesar, digeser, atau diperbarui.

---

## 1. Google Maps Traffic Layer

### Kelebihan

- Implementasi paling pendek dan stabil untuk kebutuhan visual.
- Traffic layer sudah menjadi bagian Maps JavaScript API dan tidak memiliki SKU traffic terpisah.
- Penggunaan ditagih berdasarkan successful Dynamic Maps load, sehingga estimasi biaya lebih mudah dipahami.
- Coverage resmi menyatakan Traffic Layer tersedia dengan kualitas baik di Indonesia.
- Traffic layer melakukan auto-refresh secara bawaan.
- Familiar bagi banyak pengguna, sehingga kurva belajar peta rendah.

### Kekurangan

- Billing account Google Cloud harus aktif meskipun penggunaan masih dalam free tier.
- Traffic layer hanya memberikan visual. Aplikasi tidak dapat membaca nilai kecepatan, tingkat kemacetan, atau status coverage suatu ruas.
- Aplikasi tidak dapat memastikan apakah jalan tanpa warna berarti lancar atau tidak memiliki data.
- Konten Google Maps tidak boleh di-scrape, diekspor, atau disimpan sebagai histori traffic.

### Biaya relevan

- 0-10.000 Dynamic Maps load per bulan: gratis.
- 10.001-100.000: USD 7 per 1.000 load.
- Traffic layer tidak ditagih sebagai SKU tambahan.
- Batas quota harus dipasang untuk mencegah biaya tidak terkontrol.

### Cocok jika

- Target hanya menampilkan kondisi traffic secara visual.
- Project bersedia mengaktifkan billing Google Cloud.
- Kemudahan implementasi lebih penting daripada akses data traffic mentah.

Sumber resmi:

- [Traffic Layer](https://developers.google.com/maps/documentation/javascript/trafficlayer)
- [Coverage](https://developers.google.com/maps/coverage)
- [Dynamic Maps pricing](https://developers.google.com/maps/billing-and-pricing/pricing#map-loads-pricing)
- [API security](https://developers.google.com/maps/api-security-best-practices)
- [Maps JavaScript policies](https://developers.google.com/maps/documentation/javascript/policies)

---

## 2. TomTom Orbis Traffic

### Kelebihan

- Indonesia resmi tercakup untuk Traffic Flow dan Traffic Incidents.
- Free tier traffic tile lebih besar dan dapat dimulai tanpa kartu kredit.
- Raster Flow Tiles dapat dipasang sebagai overlay sederhana.
- API tambahan dapat memberikan incident dan traffic data lebih detail jika dibutuhkan nanti.
- Cocok digunakan bersama MapLibre atau renderer tile lainnya.

### Kekurangan

- Biaya dan free tier dihitung per tile request, bukan per pembukaan halaman.
- Membutuhkan renderer peta atau TomTom SDK tambahan.
- Maps SDK JavaScript TomTom saat ini masih berstatus Public Preview versi 0.x.
- TomTom menyarankan proxy untuk perlindungan key yang lebih baik, tetapi proxy akan menambah backend yang ingin kita hindari pada v1.1.
- Overlay traffic dan basemap dapat dihitung sebagai produk berbeda.

### Biaya relevan

- 200.000 traffic raster/vector tile request per bulan: gratis.
- Tier awal setelah free usage: EUR 0,10 per 1.000 request.
- Satu viewport dapat memerlukan banyak tile.

### Cocok jika

- Project tidak ingin mengaktifkan billing atau kartu kredit pada tahap awal.
- Tim menerima integrasi MapLibre dan penghitungan berbasis tile.
- Ada kemungkinan kebutuhan incident detail berkembang pada rilis berikutnya.

Sumber resmi:

- [Orbis Traffic introduction](https://developer.tomtom.com/traffic-api/documentation/tomtom-orbis-maps/v2/product-information/introduction)
- [Market coverage](https://developer.tomtom.com/traffic-api/documentation/tomtom-orbis-maps/v2/product-information/market-coverage)
- [Raster Flow Tiles](https://developer.tomtom.com/traffic-api/documentation/tomtom-orbis-maps/v2/traffic-flow/raster-flow-tiles)
- [Pricing](https://docs.tomtom.com/pricing)
- [API key management](https://docs.tomtom.com/platform/documentation/my-tomtom/api-key-management)

---

## 3. HERE Maps and Traffic

### Kelebihan

- Indonesia resmi tercakup untuk flow, incidents, dan Deep Coverage 2.0.
- Maps API for JavaScript menyediakan traffic layer dan kontrol traffic.
- Traffic API dapat menyediakan speed, free-flow speed, confidence, incident, dan penutupan jalan.
- SDK web sudah memiliki versi stabil 3.2.x.

### Kekurangan

- Setup project, package registry, SDK, dan model transaksi lebih kompleks.
- Free tier tile lebih kecil dibanding TomTom.
- Biaya dihitung per tile request, bukan per pengunjung.
- Kemampuan data mentah dan advanced traffic belum diperlukan untuk v1.1.
- Integrasi ini berisiko menjadi overengineering untuk landing page edukasi tahap awal.

### Biaya relevan

- 30.000 vector base tile request per bulan: gratis.
- 30.000 traffic tile request per bulan: gratis.
- Tier awal traffic tile: USD 0,12 per 1.000 request.
- Traffic JSON memiliki free tier dan harga terpisah.

### Cocok jika

- Product roadmap membutuhkan data traffic mentah atau analisis incident.
- Project siap menangani setup, penggunaan, dan biaya berbasis tile.
- Fitur peta berkembang menjadi bagian inti produk pada rilis besar berikutnya.

Sumber resmi:

- [Maps API JavaScript](https://docs.here.com/maps-api-for-js/docs/introduction-maps-api-for-javascript)
- [Traffic layer](https://docs.here.com/maps-api-for-js/docs/traffic)
- [Traffic coverage](https://docs.here.com/traffic-api/docs/traffic-vector-tile-traffic)
- [Pricing](https://www.here.com/get-started/pricing)
- [API keys](https://docs.here.com/identity-and-access-management/docs/plat-using-apikeys)

---

## Rekomendasi

### Pilihan utama: Google Maps Traffic Layer

Google Maps paling sesuai dengan batas v1.1 karena:

1. Requirement hanya meminta visual traffic, bukan data mentah.
2. Integrasinya paling sederhana dan tidak membutuhkan backend.
3. Traffic layer tidak menambah SKU tersendiri.
4. Biaya dihitung per map load dan lebih mudah dipantau.
5. Coverage Indonesia dinyatakan tersedia dengan baik.

### Kondisi yang mengubah pilihan

Gunakan **TomTom** jika project tidak dapat atau tidak ingin mengaktifkan billing Google Cloud. Jangan memilih HERE untuk v1.1 kecuali kebutuhan berubah menjadi pengolahan traffic atau incident data yang lebih mendalam.

---

## Gate Sebelum Coding Produksi

1. Pastikan pemilik project bersedia mengaktifkan billing Google Cloud.
2. Buat API key khusus development dengan restriction Maps JavaScript API.
3. Lakukan proof of concept coverage di Bali.
4. Uji Denpasar, Kuta/Seminyak, Canggu, Sanur, Bandara-Nusa Dua, dan Denpasar-Ubud pada jam sibuk dan jam sepi.
5. Pastikan traffic layer berubah secara masuk akal pada koridor utama.
6. Tentukan quota maksimal bulanan dan billing alert.
7. Pastikan attribution tidak tertutup UI.
8. Pastikan fallback muncul ketika key, network, quota, atau provider gagal.

Jika gate 1 tidak dapat dipenuhi, proof of concept dialihkan ke TomTom sebelum implementasi production dimulai.
