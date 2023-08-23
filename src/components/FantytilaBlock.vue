<script setup>
import SocialLink from "@/components/SocialLink.vue";

const linksSocials = [
  { name: "facebook", to: "#" },
  { name: "instagram", to: "#" },
  { name: "telegram", to: "#" },
];
</script>

<template>
  <div class="fantytila-block wrap-content" id="fantytila">
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
              v-for="link in linksSocials"
              :key="link.name"
              :link="link"
              size="32"
              fill="#2D2D2D"
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
  background: var(--bg-grey);

  &__wrap {
    display: flex;
    gap: 88px;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__img {
    flex: 1 1 calc(56% - 88px / 2);

    @media (max-width: 768px) {
      max-width: 344px;
      height: 169px;
    }
  }

  &__info {
    flex: 1 1 calc(44% - 88px / 2);

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__title {
    font-size: 1.875rem;
    line-height: 2.625rem;
    text-transform: uppercase;

    @media (max-width: 480px) {
      font-size: 1.5rem;
      line-height: 2.0625rem;
    }
  }

  &__text {
    margin-top: 5px;
    max-width: 300px;
    font-family: var(--special-font);
    font-size: 1rem;
    line-height: 1.4375rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  &__links {
    margin-top: 21px;
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      margin-top: 16px;
    }
  }

  &__bg {
    height: 430px;
    background: url("/images/image.jpg") center/ cover no-repeat;

    @media (max-width: 768px) {
      height: 230px;
    }

    @media (max-width: 768px) {
      height: 112px;
    }
  }
}
</style>
