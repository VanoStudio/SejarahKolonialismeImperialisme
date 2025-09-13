<template>
    <TresGroup :position="[0, 0, 0]">
        <TresGroup :position="[-0.4, 0, 0]">
            <primitive :object="modelOrang.scene"/>
        </TresGroup>
    </TresGroup>
</template>

<script setup>
import { useGLTF, useAnimations } from '@tresjs/cientos'

// load model GLTF
const modelOrang = await useGLTF('/models/inggrisvsprancis.glb')

console.log(modelOrang)

// modifikasi scene
modelOrang.scene.scale.set(0.13, 0.13, 0.13)
modelOrang.scene.position.set(0, 0, 0)
modelOrang.scene.rotation.set(0, 2, 0)

const modelAnimation = useAnimations(modelOrang.animations, modelOrang.scene)
modelAnimation.actions['Armature|mixamo.com|Layer0'].play()
modelAnimation.actions['Armature|mixamo.com|Layer0.001'].play()


</script>
