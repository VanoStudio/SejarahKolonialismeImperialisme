<template>
  <TresGroup>
    <Levioso :speed="6">
      <primitive :object="modelKapal.scene" />
    </Levioso>
  </TresGroup>
</template>

<script setup>
import { useTresContext } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
import * as THREE from 'three'
const modelKapal = await useGLTF('/models/ship.glb')

modelKapal.scene.position.set(0, 1, 0)

const {scene, camera, renderer} = useTresContext()

scene.value.fog = new THREE.Fog(0xEAE5DB, 10, 20)

</script>