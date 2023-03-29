<script setup>
import SocialLink from "@/components/SocialLink.vue";
import MenuLink from "@/components/MenuLink.vue";

const props = defineProps({
  linksSocials: {
    type: Array,
    required: true,
  },
  menu: {
    type: Boolean,
    required: false,
  },
});

const links = [
  { name: "Оплата і доставка", to: "" },
  { name: "Контакти", to: "#" },
  { name: "Угода користувача", to: "#" },
];
</script>

<template>
  <footer class="footer">
    <div v-show="menu" class="footer__links">
      <menu-link
        color="white"
        v-for="link in links"
        :key="link.name"
        :link="link"
      />
    </div>
    <div class="footer__socials">
      <social-link v-for="link in linksSocials" :key="link.name" :link="link" />
    </div>
    <p class="copyright">© 2022 Антитіла</p>
  </footer>
</template>



<style lang="scss" scoped>
.footer {
  padding: 24px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background: var(--black);
  &__links {
    display: flex;
    gap: 24px;
  }
  &__socials {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
  .copyright {
    font-family: var(--special-font);
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
    color: var(--white);
  }
}
</style>