<template>
  <ClientOnly>
    <LCard class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
      </div>
    </LCard>
  </ClientOnly>
</template>
