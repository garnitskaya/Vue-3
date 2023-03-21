<script setup>
import SocialLink from "@/components/SocialLink.vue";

const linksSocials = [
  { name: "fb-black" },
  { name: "inst-black" },
  { name: "telegram-black" },
];
</script>

<template>
  <div class="fantytila-block grey-bg" id="fantytila">
    <container>
      <div class="fantytila-block__wrap">
        <div class="fantytila-block__img">
          <u-img src="/images/FANtytila_logo_black.png" alt="FANtytila" />
        </div>
        <div class="fantytila-block__info">
          <h3 class="fantytila-block__title">ФАНТИТІЛА КОМ’ЮНІТІ</h3>
          <p class="fantytila-block__text">
            Стань частиною Антитіл. Приєднуйся до офіційного ком'юніті.
          </p>
          <div class="fantytila-block__links">
            <social-link
              big
              v-for="link in linksSocials"
              :key="link.name"
              :link="link"
            />
          </div>
        </div>
      </div>
    </container>
  </div>
  <div class="fantytila-block__bg" />
</template>

<style lang="scss" scoped>
.fantytila-block {
  &__wrap {
    display: flex;
    gap: 88px;
    justify-content: center;
    align-items: center;
  }
  &__img {
    flex: 1 1 calc(56% - 88px / 2);
  }
  &__info {
    flex: 1 1 calc(44% - 88px / 2);
  }
  &__title {
    font-size: 1.875rem;
    line-height: 2.625rem;
    text-transform: uppercase;
  }
  &__text {
    margin-top: 5px;
    max-width: 300px;
    font-family: "Open Sans";
    font-size: 1rem;
    line-height: 1.4375rem;
  }
  &__links {
    margin-top: 21px;
    display: flex;
    gap: 16px;
  }
  &__bg {
    height: 430px;
    background: url("/images/image.jpg") center/ cover no-repeat;
  }
}
</style>