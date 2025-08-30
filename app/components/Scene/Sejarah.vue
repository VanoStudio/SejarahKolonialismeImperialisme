<template>
    <TresPerspectiveCamera
        :position="[0, 0, 10]"
        :look-at="[0, 0, 0]"
    />

    <OrbitControls />

    <TresGroup ref="torusGroupRef">
        <TresMesh v-for="i in 5" :key="i">
            <TresTorusGeometry :args="[i * 0.5, 0.1, 16, 32]" />
            <TresMeshStandardMaterial :color="`hsl(${i * 60}, 100%, 50%)`" />
        </TresMesh>
    </TresGroup>
    <TresAmbientLight :intensity="2" />
    <TresDirectionalLight :color="0xffffff" :intensity="1" />
</template>

<script setup>
import { useTresContext, useRenderLoop } from '@tresjs/core'

const {onLoop} = useRenderLoop()

const torusGroupRef = shallowRef()

// Add stagger delay configuration
const staggerConfig = {
    baseSpeed: 1,
    staggerDelay: 0.5,
    timeOffset: ref(0)
}

onMounted(() => {
    torusGroupRef.value.children.forEach((element, i) => {
        element.scale.set(1 + i * 0.1, 1 + i * 0.1, 1 + i * 0.1)
    });
})

onLoop(({delta, elapsed, clock}) => {
    // Update your scene or perform animations here

    staggerConfig.timeOffset.value += delta

    torusGroupRef.value.children.forEach((element, i) => {
        // Calculate staggered timing for each ring
        const staggeredTime = staggerConfig.timeOffset.value - (i * staggerConfig.staggerDelay)
        
        // Apply staggered rotation
        element.rotation.y += staggerConfig.baseSpeed * delta * Math.sin(staggeredTime)
        element.rotation.x += staggerConfig.baseSpeed * delta * Math.cos(staggeredTime)
        element.rotation.z += staggerConfig.baseSpeed * delta * Math.sin(staggeredTime * 0.5)
    });
})

</script>