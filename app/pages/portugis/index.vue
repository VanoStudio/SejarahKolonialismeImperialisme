<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full">
        <!-- Judul -->
        <h1 class="text-2xl font-bold text-center mb-6">Ekspedisi Portugis</h1>

        <!-- Konten 2 kolom -->
        <div class="grid grid-cols-2 gap-6">
            <!-- Kotak video -->
            <div class="flex items-center justify-center">
            <video
                controls
                class="w-full h-64 rounded-lg shadow-md bg-gray-300"
            >
                <source src="/videos/Portugis/portugal.mp4" type="video/mp4" />
                Browser kamu tidak mendukung video.
            </video>
            </div>

            <!-- List materi -->
            <div>
            <ol class="list-decimal list-inside space-y-4 text-sm">
                <li>
                <span class="font-semibold">1497–1499 – Vasco da Gama</span><br />
                <span class="text-gray-700">
                    Rute: Lisbon → Tanjung Harapan → Mozambik → Malindi → Calicut
                    (India).<br />
                    Tujuan: cari jalur laut ke India, potong monopoli Arab &
                    Venesia.
                </span>
                </li>
                <li>
                <span class="font-semibold">1509 – Diogo Lopes de Sequeira</span
                ><br />
                <span class="text-gray-700">
                    Rute: Goa → Malaka.<br />
                    Tujuan: jajaki dagang & diplomasi dengan Kesultanan Malaka.
                </span>
                </li>
                <li>
                <span class="font-semibold">1511 – Afonso de Albuquerque</span
                ><br />
                <span class="text-gray-700">
                    Rute: Goa → Malaka.<br />
                    Tujuan: kuasai Malaka sebagai pusat dagang & jalur ke Maluku.
                </span>
                </li>
                <li>
                <span class="font-semibold"
                    >1512 – António de Abreu & Francisco Serrão</span
                ><br />
                <span class="text-gray-700">
                    Rute: Malaka → Laut Jawa → Banda → Ambon → Ternate.<br />
                    Tujuan: buka akses langsung ke pusat rempah (pala & cengkih).
                </span>
                </li>
            </ol>
            </div>
        </div>
        </div>
    </div>
</template>
