<template>
    <div class="relative min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <HomeButton />

        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <!-- Judul -->
        <h1 class="text-2xl font-bold text-center mb-2">
            Ekspedisi Ferdinand Magellan & Juan Sebastián Elcano
        </h1>
        <h2 class="text-lg font-semibold text-center mb-8">
            Pelaut, Kapal dan Tujuan
        </h2>

        <!-- Grid 3 kolom -->
        <div class="grid grid-cols-3 gap-8 items-start">
            <!-- Kolom 1: 1 teks + 2 gambar -->
            <div class="text-left">
            <p class="mb-4">
                Ferdinand Magellan (tewas di Filipina)<br />
                Juan Sebastián Elcano (menyelesaikan ekspedisi)
            </p>

            <div class="flex gap-4 mt-2">
                <div class="w-28 h-28 bg-gray-800 rounded-lg overflow-hidden">
                <img :src="images.pelaut1" alt="Pelaut 1" class="w-full h-full object-cover" />
                </div>
                <div class="w-28 h-28 bg-gray-800 rounded-lg overflow-hidden">
                <img :src="images.pelaut2" alt="Pelaut 2" class="w-full h-full object-cover" />
                </div>
            </div>
            </div>

            <!-- Kolom 2: 1 teks + 1 gambar -->
            <div class="text-left">
            <p class="mb-4">Kapal Victoria (satu-satunya yang pulang).</p>

            <div class="w-36 h-36 bg-gray-800 rounded-lg mx-auto overflow-hidden">
                <img :src="images.kapal" alt="Kapal Victoria" class="w-full h-full object-cover" />
            </div>
            </div>

            <!-- Kolom 3: 2 teks (tanpa gambar) -->
            <div class="text-left">
            <p class="font-semibold mb-3">Tujuan awal</p>
            <p class="text-sm">
                Mencari jalur barat ke Maluku (Spice Islands) untuk perdagangan
                rempah, menghindari jalur Portugis yang lewat Afrika.
            </p>

            <p class="mt-6 text-sm text-gray-600">
                Sumber / catatan: Library of Congress, Wikipedia.
            </p>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
// Ganti path gambar ini sesuai lokasi filemu (mis. public/img/)
const images = {
    pelaut1: "/img/pelaut-1.png",
    pelaut2: "/img/pelaut-2.png",
    kapal: "/img/kapal-victoria.png",
};
</script>
