<template>
    <div class="relative min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <HomeButton/>
        
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
        <!-- Judul -->
        <h1 class="text-2xl font-bold text-center mb-6">
            Perjanjian Tordesillas (7 Juni 1494)
        </h1>

        <!-- Grid -->
        <div class="grid grid-cols-2 gap-6">
            <!-- Kolom kiri (scrollable) -->
            <div class="h-96 overflow-y-auto space-y-4 pr-4">
            <!-- Latar Belakang -->
            <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-blue-400">
                <h2 class="font-semibold mb-2 text-gray-800">Latar Belakang:</h2>
                <ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
                <li>Spanyol & Portugis bersaing dalam pelayaran samudra.</li>
                <li>Penemuan benua Amerika (1492) oleh Columbus menimbulkan sengketa wilayah.</li>
                <li>Paus Alexander VI memediasi untuk mencegah konflik.</li>
                </ul>
            </div>

            <!-- Isi Perjanjian -->
            <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-green-400">
                <h2 class="font-semibold mb-2 text-gray-800">Isi Perjanjian:</h2>
                <ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
                <li>Dunia dibagi dengan garis demarkasi vertikal di Samudra Atlantik (370 legua barat Kepulauan Tanjung Verde).</li>
                <li>Timur garis → Portugis.</li>
                <li>Barat garis → Spanyol.</li>
                </ul>
            </div>

            <!-- Pembagian Wilayah -->
            <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-yellow-400">
                <h2 class="font-semibold mb-2 text-gray-800">Pembagian Wilayah:</h2>
                <ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
                <li>Portugis: Afrika, India, Asia (termasuk Malaka & Maluku), Brasil (karena berada di timur garis).</li>
                <li>Spanyol: Hampir seluruh Amerika (kecuali Brasil).</li>
                </ul>
            </div>

            <!-- Dampak -->
            <div class="bg-gray-50 p-4 rounded shadow-sm border-l-4 border-red-400">
                <h2 class="font-semibold mb-2 text-gray-800">Dampak:</h2>
                <ul class="list-disc list-inside text-sm space-y-1 text-gray-700">
                <li>Portugis berkembang di Asia sebagai kekuatan maritim.</li>
                <li>Spanyol menguasai Amerika & kemudian Filipina.</li>
                <li>Menjadi awal kolonialisme global bangsa Eropa.</li>
                </ul>
            </div>
            </div>

            <!-- Kolom kanan (ilustrasi) -->
            <div class="flex items-center justify-center">
            <div class="w-64 h-80 bg-gray-300 rounded flex items-center justify-center shadow-inner">
                <span class="text-gray-700 font-semibold">Ilustrasi</span>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<style>
</style>
