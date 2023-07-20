<script setup lang="ts">
  const { locale } = useI18n();
</script>

<template>
  <div>
    {{ $t('title') }}
    {{ locale }}
  </div>
</template>