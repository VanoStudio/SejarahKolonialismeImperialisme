<template>
    <TresGroup :position="[0, 0, 0]">
        <TresGroup :position="[-0.4, 0, 0]">
            <primitive :object="ruangan.scene"/>
        </TresGroup>
    </TresGroup>
</template>

<script setup>
import { useGLTF } from '@tresjs/cientos'

// load model GLTF
const ruangan = await useGLTF('/models/castle.glb')
console.log(ruangan)

// modifikasi scene
ruangan.scene.scale.set(0.13, 0.13, 0.13)
ruangan.scene.position.set(0, -0.05, 0)
ruangan.scene.rotation.set(0, 1, 0)

const modelAnimation = useAnimations(ruangan.animations, ruangan.scene)
modelAnimation.actions['Armature|mixamo.com|Layer0.001'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.002'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.003'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.004'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.005'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.006'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.007'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.008'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.009'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.010'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.011'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.012'].play()
</script>
