<template>
  <div class="flex flex-col w-full h-full p-10 space-y-4">
    <div class="w-full h-full flex flex-col gap-4 justify-center items-center">
      <div class="text-center text-3xl font-boldd">{{ props.title }}</div>
      <div class="text-center text-lg max-w-5xl">{{ props.desc }}</div>
    </div>
    <div class="w-full h-full flex justify-center items-center">
      <video v-if="props.video" 
        :src="props.video"
        loop
        playsInline
        muted
        autoPlay
      ></video>
      <div v-else class="">{{ props.secondaryDesc }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String, 
    required: false
  },

  desc: {
    type: String, 
    required: false
  },

  secondaryDesc: {
    type: String, 
    required: false
  },

  video: {
    type: String, 
    required: false
  },
})
</script>

<style lang="scss" scoped>

</style>