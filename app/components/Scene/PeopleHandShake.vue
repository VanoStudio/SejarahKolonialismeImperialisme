<template>
    <TresGroup>
        <primitive :object="modelOrang.scene" />
        <ContactShadows :position-y="0" color="#335" :scale="1" />
    </TresGroup>
</template>

<script setup>
import { useTresContext } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
import * as THREE from 'three'
const modelOrang = await useGLTF('/models/model.glb')
console.log(modelOrang)

modelOrang.scene.scale.set(3, 3, 3)
modelOrang.scene.position.set(0, 0, 0)
modelOrang.scene.rotation.set(0, 0.2, 0)
</script>