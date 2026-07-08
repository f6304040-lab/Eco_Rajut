<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Mitra | LokalKarya</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: { colors: { eco: { 600: '#16a34a', 800: '#166534' } } }
            }
        }
    </script>
</head>
<body class="bg-gray-100 font-sans">

    <!-- Navbar Dashboard -->
    <nav class="bg-eco-800 text-white shadow-md p-4 flex justify-between items-center sticky top-0 z-20">
        <h1 class="text-xl font-bold">LokalKarya Seller Area 🛠️</h1>
        <div class="flex items-center space-x-4">
            <span class="text-sm hidden sm:inline bg-eco-900 px-3 py-1 rounded-full">Halo, Febriyanti (Rajut Asri)</span>
            <a href="index.html" class="bg-red-500 px-4 py-2 rounded text-sm hover:bg-red-600 transition font-bold shadow">Logout</a>
        </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <!-- Sidebar Menu -->
        <aside class="col-span-1 bg-white p-5 rounded-xl shadow-md h-fit">
            <ul class="space-y-3">
                <li><a href="#" class="block p-3 bg-eco-50 text-eco-800 rounded-lg font-bold border-l-4 border-eco-600">Ringkasan Analitik</a></li>
                <li><a href="#" class="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg">Katalog & Stok</a></li>
                <li><a href="#" class="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg">Pesanan Masuk <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">3</span></a></li>
            </ul>
        </aside>

        <!-- Area Konten Utama -->
        <main class="col-span-1 md:col-span-3 space-y-8">
            
            <!-- Summary Cards Performa Toko -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm font-medium mb-1">Total Pendapatan (Juli)</p>
                        <h3 class="text-2xl font-extrabold text-eco-800">Rp 5.250.000</h3>
                    </div>
                    <div class="bg-green-100 p-3 rounded-full text-green-600">📈</div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm font-medium mb-1">Total Produk Aktif</p>
                        <h3 class="text-2xl font-extrabold text-blue-600">18 Item</h3>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-full text-blue-600">🧶</div>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm font-medium mb-1">Stok Hampir Habis</p>
                        <h3 class="text-2xl font-extrabold text-red-600">2 Item</h3>
                    </div>
                    <div class="bg-red-100 p-3 rounded-full text-red-600">⚠️</div>
                </div>
            </div>

            <!-- Tabel Katalog Produk (Lengkap dengan Gambar & Kategori) -->
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div class="flex justify-between items-center mb-6">
                    <h4 class="text-xl font-bold text-gray-800">Katalog & Manajemen Stok</h4>
                    <button class="bg-eco-600 text-white px-4 py-2 rounded-lg shadow hover:bg-eco-800 text-sm font-bold">+ Tambah Produk</button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-max">
                        <thead>
                            <tr class="bg-gray-50 text-gray-600 border-b-2 border-gray-200">
                                <th class="p-4 text-sm font-bold">Gambar & Nama Produk</th>
                                <th class="p-4 text-sm font-bold">Kategori</th>
                                <th class="p-4 text-sm font-bold">Harga</th>
                                <th class="p-4 text-sm font-bold">Sisa Stok</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Item 1 -->
                            <tr class="border-b hover:bg-gray-50 transition">
                                <td class="p-4 flex items-center space-x-4">
                                    <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Cardigan" class="w-16 h-16 object-cover rounded-lg shadow-sm">
                                    <span class="font-bold text-gray-800">Cardigan Katun Organik</span>
                                </td>
                                <td class="p-4"><span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Pakaian</span></td>
                                <td class="p-4 font-medium">Rp 350.000</td>
                                <td class="p-4"><span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm font-bold">12 pcs</span></td>
                            </tr>
                            <!-- Item 2 -->
                            <tr class="border-b hover:bg-gray-50 transition">
                                <td class="p-4 flex items-center space-x-4">
                                    <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Tote Bag" class="w-16 h-16 object-cover rounded-lg shadow-sm">
                                    <span class="font-bold text-gray-800">Tote Bag Serat Bambu</span>
                                </td>
                                <td class="p-4"><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Aksesoris</span></td>
                                <td class="p-4 font-medium">Rp 185.000</td>
                                <td class="p-4"><span class="bg-red-100 text-red-800 px-3 py-1 rounded-lg text-sm font-bold">3 pcs (Kritis)</span></td>
                            </tr>
                            <!-- Item 3 -->
                            <tr class="border-b hover:bg-gray-50 transition">
                                <td class="p-4 flex items-center space-x-4">
                                    <img src="https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Vest" class="w-16 h-16 object-cover rounded-lg shadow-sm">
                                    <span class="font-bold text-gray-800">Vest Rajut Alam (Secang)</span>
                                </td>
                                <td class="p-4"><span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Pakaian</span></td>
                                <td class="p-4 font-medium">Rp 220.000</td>
                                <td class="p-4"><span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm font-bold">8 pcs</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Bagian Bawah: Grafik & Tabel Penjualan -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Tabel Penjualan (Pesanan Selesai) -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 class="text-lg font-bold text-gray-800 mb-4">Riwayat Penjualan Terakhir</h4>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr class="bg-gray-50 text-gray-600 border-b">
                                    <th class="p-3">ID Pesanan</th>
                                    <th class="p-3">Produk</th>
                                    <th class="p-3">Tanggal</th>
                                    <th class="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b">
                                    <td class="p-3 font-mono">#LK-9021</td>
                                    <td class="p-3">1x Cardigan Organik</td>
                                    <td class="p-3 text-gray-500">08 Jul 2026</td>
                                    <td class="p-3"><span class="text-green-600 font-bold">Selesai</span></td>
                                </tr>
                                <tr class="border-b">
                                    <td class="p-3 font-mono">#LK-9020</td>
                                    <td class="p-3">2x Beanie Daur Ulang</td>
                                    <td class="p-3 text-gray-500">07 Jul 2026</td>
                                    <td class="p-3"><span class="text-green-600 font-bold">Selesai</span></td>
                                </tr>
                                <tr>
                                    <td class="p-3 font-mono">#LK-9019</td>
                                    <td class="p-3">1x Vest Secang</td>
                                    <td class="p-3 text-gray-500">05 Jul 2026</td>
                                    <td class="p-3"><span class="text-green-600 font-bold">Selesai</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Grafik Analitik -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 class="text-lg font-bold text-gray-800 mb-4">Grafik Tren Omset (Bulan Ini)</h4>
                    <canvas id="salesChart" width="400" height="200"></canvas>
                </div>
            </div>
            
        </main>
    </div>

    <script>
        // Grafik Penjualan (Chart.js)
        const ctx = document.getElementById('salesChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar', // Menggunakan chart batang agar berbeda & menarik
            data: {
                labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
                datasets: [{
                    label: 'Pendapatan (Juta Rupiah)',
                    data: [1.2, 2.5, 1.8, 3.0],
                    backgroundColor: 'rgba(22, 163, 74, 0.7)', // Warna hijau eco
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });
    </script>
</body>
</html>