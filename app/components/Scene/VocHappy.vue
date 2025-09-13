<template>
    <TresGroup :position="[0, 0, 0]">
        <TresGroup :position="[-0.4, 0, 0]">
            <primitive :object="VocSenang.scene"/>
        </TresGroup>
    </TresGroup>
</template>

<script setup>
import { useGLTF, useAnimations } from '@tresjs/cientos'
import { watch } from 'vue'

const props = defineProps({
  currentId: {
    type: Number,
    default: 0
  }
})

// load model GLTF
const VocSenang = await useGLTF('/models/vocsedih.glb')

// modifikasi scene
VocSenang.scene.scale.set(0.03, 0.03, 0.03)
VocSenang.scene.position.set(0, 0, 0.1)
VocSenang.scene.rotation.set(0, 2, 0)

const vocAnimation = useAnimations(VocSenang.animations, VocSenang.scene)
const animations = Object.keys(vocAnimation.actions)

// Function to play different animations based on currentId
function playAnimation(id) {
  // Stop all animations first
  animations.forEach(name => {
    vocAnimation.actions[name].stop()
  })
  
  // Play animation based on currentId
  const currentAnimation = animations[id % animations.length]
  vocAnimation.actions[currentAnimation].play()
}

// Initial animation
playAnimation(props.currentId)

// Watch for changes in currentId
watch(() => props.currentId, (newId) => {
  playAnimation(newId)
})


</script>

