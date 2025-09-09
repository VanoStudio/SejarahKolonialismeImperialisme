<template>
    <TresGroup :position="[0, 0, 0]">
        <TresGroup :position="[-0.4, 0, 0]">
            <primitive :object="VocSenang.scene"/>
        </TresGroup>
    </TresGroup>
</template>

<script setup>
import { useGLTF, useAnimations } from '@tresjs/cientos'

// load model GLTF
const VocSenang = await useGLTF('/models/voc.glb')

console.log(VocSenang)

// modifikasi scene
VocSenang.scene.scale.set(0.03, 0.03, 0.03)
VocSenang.scene.position.set(0, 0, 0.1)
VocSenang.scene.rotation.set(0, 2, 0)

const vocAnimation = useAnimations(VocSenang.animations, VocSenang.scene)
vocAnimation.actions['Armature|mixamo.com|Layer0'].play()


</script>

