<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <!-- Judul -->
        <h1 class="text-2xl font-bold text-center mb-6">
            Perjanjian Saragosa (22 April 1529)
        </h1>

        <!-- Konten Grid -->
        <div class="grid grid-cols-2 gap-6">
            <!-- Kolom kiri: scrollable -->
            <div class="h-96 overflow-y-auto space-y-4 pr-4">
            <!-- Latar Belakang -->
            <div class="bg-gray-100 p-4 rounded">
                <h2 class="font-semibold mb-2">Latar Belakang:</h2>
                <ul class="list-disc list-inside text-sm space-y-1">
                <li>
                    Spanyol & Portugis bersaing memperebutkan Maluku (rempah) karena pembagian wilayah
                    Perjanjian Tordesillas (1494) tidak jelas di Asia.
                </li>
                <li>
                    Spanyol datang lewat Filipina, Portugis lewat Malaka–Maluku → terjadi konflik klaim
                    wilayah.
                </li>
                </ul>
            </div>

            <!-- Isi Perjanjian -->
            <div class="bg-gray-100 p-4 rounded">
                <h2 class="font-semibold mb-2">Isi Perjanjian:</h2>
                <ol class="list-decimal list-inside text-sm space-y-1">
                <li>Maluku → Portugis (hak monopoli rempah).</li>
                <li>Filipina → Spanyol (pusat kekuatan di Asia Tenggara).</li>
                <li>
                    Garis demarkasi baru di Samudra Pasifik, ±1.480 km timur Maluku.
                </li>
                <li>
                    Portugis membayar 350.000 dukat emas ke Spanyol agar meninggalkan Maluku.
                </li>
                </ol>
            </div>

            <!-- Dampak -->
            <div class="bg-gray-100 p-4 rounded">
                <h2 class="font-semibold mb-2">Dampak:</h2>
                <ul class="list-disc list-inside text-sm space-y-1">
                <li>Portugis berkuasa penuh di Maluku, Spanyol fokus ke Filipina.</li>
                <li>Nusantara masuk zona Portugis.</li>
                <li>
                    Asia Tenggara terbagi tanpa memperhatikan penduduk lokal.
                </li>
                </ul>
            </div>
            </div>

            <!-- Kolom kanan: bisa isi gambar / ilustrasi -->
            <div class="flex items-center justify-center">
            <div class="w-64 h-80 bg-gray-300 rounded flex items-center justify-center">
                <span class="text-gray-700 font-semibold">Ilustrasi</span>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
