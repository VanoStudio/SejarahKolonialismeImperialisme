<template>
    <TresGroup>
        <TresObject3D :object="ruangan.scene" />
        <!-- <ContactShadows :position-y="0" color="#335" :scale="1" /> -->
    </TresGroup>
</template>

<script setup>
import { useGLTF } from '@tresjs/cientos'

// load model GLTF
const ruangan = await useGLTF('/models/castle.glb')

console.log(modelOrang)

// modifikasi scene
ruangan.scene.scale.set(3, 3, 3)
ruangan.scene.position.set(0, 0, 0)
ruangan.scene.rotation.set(0, 0.2, 0)
</script>
