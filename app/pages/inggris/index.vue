<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full">
        <!-- Judul -->
        <h1 class="text-2xl font-bold text-center mb-6">Ekspedisi Inggris</h1>

        <!-- Konten 2 kolom -->
        <div class="grid grid-cols-2 gap-6">
            <!-- Kotak video -->
            <div class="flex items-center justify-center">
            <video
                controls
                class="w-full h-64 rounded-lg shadow-md bg-gray-300"
            >
                <source src="/videos/Inggris/inggris.mp4" type="video/mp4" />
                Browser kamu tidak mendukung video.
            </video>
            </div>

            <!-- Deskripsi -->
            <div class="text-sm space-y-4 text-gray-800">
            <p>
                <span class="font-semibold">1579 – Sir Francis Drake</span>
                (misi penjelajahan & dagang rempah)<br />
                • Rute: dari Pasifik → Filipina → Ternate (Maluku) → Jawa → Samudra
                Hindia → Tanjung Harapan → pulang ke Inggris.
            </p>

            <p>
                • Pelaut/kapal: Francis Drake, kapal <i>Golden Hind</i>.
                <span class="text-gray-500">(Library of Congress; Wikipedia)</span>
            </p>

            <p>
                • Tujuan awal: pelayaran keliling dunia sekaligus mencari keuntungan
                lewat perompakan musuh Spanyol/Portugis dan membeli cengkih di
                Ternate (perjanjian dagang dengan Sultan).
                <span class="text-gray-500">(Library of Congress)</span>
            </p>
            </div>
        </div>
        </div>
    </div>
</template>
