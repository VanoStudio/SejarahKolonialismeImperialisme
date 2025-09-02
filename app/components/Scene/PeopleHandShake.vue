<template>
    <TresGroup>
        <primitive :object="modelKapal.scene" />
    </TresGroup>
</template>

<script setup>
import { useTresContext } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
import * as THREE from 'three'
const modelOrang = await useGLTF('/models/model.glb')
modelKapal.scene.position.set(0, 1, 0)
</script>