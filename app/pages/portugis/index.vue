
<template>
    <div class="relative min-h-screen flex items-center justify-center bg-gray-100">
        <HomeButton />

        <div ref="mainContent" class="bg-white space-y-10 p-4 xl:p-8 rounded-xl shadow-lg max-w-5xl xl:max-w-7xl w-full">
            <!-- Judul -->
            <h1 ref="title" class="text-3xl xl:text-4xl font-bold text-center">Ekspedisi Portugis</h1>

            <!-- Konten 2 kolom -->
            <div class="flex justify-center items-start gap-6">
                <!-- Kotak video -->
                <div ref="videoBox" class="flex items-center justify-center w-1/2 shadow-lg rounded-xl overflow-clip">
                    <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        class="w-full h-full rounded-lg shadow-md bg-gray-300 aspect-square"
                    >
                        <source src="/videos/Portugis/Portugal.mp4" type="video/mp4" />
                        Browser kamu tidak mendukung video.
                    </video>
                </div>

                <!-- Deskripsi -->
                <div ref="descBox" class="text-base xl:text-xl space-y-4 text-gray-800 w-1/2 border border-black/10 shadow-lg rounded-xl self-stretch p-5">
                    <p>
                        <span class="font-semibold">Bartolomeus Dias</span><br />
                        Rute: Lisbon → Tangjung Harapan.<br />
                        Tujuan: Untuk menemukan rute perdagangan Baru ke asia melalui Samudera Atlantik
                    </p>
                    <p>
                        <span class="font-semibold">1497–1499 – Vasco da Gama</span><br />
                        Rute: Lisbon → Tanjung Harapan → Mozambik → Malindi → Calicut (India).<br />
                        Tujuan: cari jalur laut ke India, potong monopoli Arab & Venesia.
                    </p>
                    <p>
                        <span class="font-semibold">1511 – Afonso de Albuquerque</span><br />
                        Rute: Goa → Malaka.<br />
                        Tujuan: kuasai Malaka sebagai pusat dagang & jalur ke Maluku.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const mainContent = ref(null)
const title = ref(null)
const videoBox = ref(null)
const descBox = ref(null)

onMounted(() => {
    gsap.from([title.value, videoBox.value, descBox.value], {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2
    })
})
</script>
