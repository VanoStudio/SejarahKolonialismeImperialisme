<template>
    <TresGroup>
        <TresObject3D :object="modelOrang.scene" />
        <!-- <ContactShadows :position-y="0" color="#335" :scale="1" /> -->
    </TresGroup>
</template>

<script setup>
import { useGLTF } from '@tresjs/cientos'

// load model GLTF
const modelOrang = await useGLTF('/models/inggrisvsprancis.glb')

console.log(modelOrang)

// modifikasi scene
modelOrang.scene.scale.set(3, 3, 3)
modelOrang.scene.position.set(0, 0, 0)
modelOrang.scene.rotation.set(0, 0.2, 0)
</script>
