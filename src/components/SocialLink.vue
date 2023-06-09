<script>
  import { computed, defineComponent } from 'vue'
  import choices from '@/components/Icons/choices.js'

  export default defineComponent({
    props: {
      fill: {
        type: String,
      },
      link: {
        type: Object,
        required: true,
      },
      size: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      const selectedIcon = computed(() => {
        return chooseIcon(props.link.name)
      })

      function chooseIcon(name) {
        return choices[name] || null
      }

      return {
        selectedIcon,
      }
    },
  })
</script>

<template>
  <a
    :href="link.to"
    :class="['link', { link_big: size }]"
    target="_blank"
  >
    <component
      :is="selectedIcon"
      v-bind="{ fill, size }"
    />
  </a>
</template>

<style lang="scss" scoped>
  .link {
    display: inline-block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    &_big {
      width: 32px;
      height: 32px;
    }
  }
</style>
