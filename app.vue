<template>
  <div>
    <AtomsAButton @click="store.randomizeCounter()" />
    {{ store.count }}
  </div>
</template>

<script setup>
const store = useCounterStore()
</script>
