<template>
  <TresGroup>
    <primitive :object="modelKapal" />
  </TresGroup>
</template>

<script setup>
import { useRenderLoop } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
const modelKapal = await useGLTF('/models/ship.glb')

const {onLoop} = useRenderLoop()
</script>