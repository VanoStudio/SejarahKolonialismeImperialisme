<template>
  <HomeButton/>

  <div class="fixed w-full h-full overflow-clip">
    <div class="relative w-full h-full p-10">
      <ClientOnly>
        <swiper-container ref="containerRef">
          <swiper-slide>
            <PenjelasanRuteSpanyol 
              title="Ekspedisi Ferdinand Magellan & Juan Sebastián Elcano"
              desc="Samudra Atlantik → pantai timur Amerika Selatan → Selat Magellan (ujung selatan Amerika Selatan) → Samudra Pasifik → Filipina → Indonesia ( Maluku )"
              secondary-desc=""
              video="/videos/spanyol.mp4"
            />
          </swiper-slide>

          <swiper-slide>
            <SpanyolDetail1/>
          </swiper-slide>

          <swiper-slide>
            <PenjelasanRuteSpanyol 
              title=" 1525–1526 – Ekspedisi García Jofré de Loaísa"
              desc="Rute: Spanyol → Selat Magellan → Pasifik → Guam → Mindanao → Tidore (Maluku). Banyak kapal hilang, hanya sedikit sampai Maluku."
              secondary-desc="Penjelasan Rute"
              video="/videos/spanyol.mp4"
            />
          </swiper-slide>

          <swiper-slide>
            <SpanyolDetail2/>
          </swiper-slide>

          <swiper-slide>
            <PenjelasanRuteSpanyol 
              title="1542–1543 – Ekspedisi Ruy López de Villalobos"
              desc="Rute: Spanyol (Navidad, Meksiko) → Pasifik → Mindanao (Filipina) → akhirnya sampai ke Gilolo dan Tidore ."
              secondary-desc="Penjelasan Rute"
              video="/videos/spanyol.mp4"
            />
          </swiper-slide>

          <swiper-slide>
            <SpanyolDetail1/>
          </swiper-slide>

          <swiper-slide>
            <PenjelasanRuteSpanyol 
              title="1564–1565 – Ekspedisi Miguel López de Legazpi"
              desc="Rute: Meksiko (New Spain) → Pasifik → Cebu → Manila → kontak dengan Maluku."
              secondary-desc="Penjelasan Rute"
              video="/videos/spanyol.mp4"
            />
          </swiper-slide>

          <swiper-slide>
            <SpanyolDetail2/>
          </swiper-slide>

          <swiper-slide>
            <div class="w-full h-full flex flex-col justify-center items-center max-w-xl space-y-4">
              <div class="text-3xl font-bold text-center">TUJUAN AWAL SPANYOL</div>
              <div class="text-justify">
                Spanyol awalnya mencoba langsung menguasai Maluku, tetapi persaingan dengan Portugis (Perjanjian Tordesillas 1494) membuat klaim mereka diperdebatkan. Konflik ini baru diakhiri dengan Perjanjian Zaragoza (1529), di mana Spanyol mengakui Maluku dalam wilayah Portugis, dan fokus mengembangkan Filipina. (Sumber: Britannica “Treaty of Zaragoza”)
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>

      <!-- Go back one slide -->
      <button @click="swiper.prev()" class="cursor-pointer size-10 absolute z-10 top-1/2 left-10 -translate-y-1/2 font-extrabold text-white rounded-full p-2 bg-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1m3.66 6.82l5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07a1 1 0 0 0 0 1.64"/></svg>
      </button>
      <!-- Go forward one slide -->
      <button @click="swiper.next()" class="cursor-pointer size-10 absolute z-10 top-1/2 right-10 -translate-y-1/2 font-extrabold text-white rounded-full p-2 bg-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82M16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
// Create 10 slides
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

onMounted(() => {
  // Access Swiper instance
  // Read more about Swiper instance: https://swiperjs.com/swiper-api#methods--properties
  console.log(swiper.instance)
})
</script>

<style>
swiper-container {
  width: 100%;
  height: 100%;
  display: block;
}
swiper-slide {
  width: 100%;
  height: 100%;
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: aliceblue;

  border-radius: 1rem;
}
</style>