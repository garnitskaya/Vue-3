<script setup>
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: false,
  },
});
</script>

<template>
  <div
    class="status-item"
    :style="{ background: color, top: position, left: position }"
  >
    <slot />
  </div>
</template>



<style lang="scss" scoped>
.status-item {
  padding: 6.5px 10.5px;
  position: absolute;
  text-transform: uppercase;
  top: 12px;
  left: 12px;
  font-weight: 500;
  font-size: 14px;
  color: var(--white);
  border-radius: 5px;
}
</style>