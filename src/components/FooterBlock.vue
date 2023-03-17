<script setup>
import SocialLink from "./SocialLink.vue";

const props = defineProps({
  linksSocials: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <footer class="footer">
    <div class="footer__links">
      <social-link v-for="link in linksSocials" :key="link.name" :link="link" />
    </div>
    <p class="copyright">© 2022 Антитіла</p>
  </footer>
</template>



<style lang="scss" scoped>
.footer {
  padding: 24px 0 20px;
  background: var(--black);
  &__links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 24px;
  }

  .copyright {
    font-family: "Open Sans";
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
    color: var(--white);
  }
}
</style>