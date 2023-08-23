<script setup>
import { ref } from "vue";

const radioArray = ["Нова пошта", "Укрпошта", "Justin"];

const emits = defineEmits(["setEditMode"]);

const props = defineProps({
  editMode: {
    type: Boolean,
    default: true,
  },
});

const checkedValue = ref(localStorage.getItem("delivery") || "");

const submitForm = () => {
  if (!checkedValue.value) return;
  emits("setEditMode");
};
</script>

<template>
  <form v-if="editMode" class="form" @submit.prevent="submitForm">
    <radiobutton
      v-for="radio in radioArray"
      :key="radio"
      :label="radio"
      :value="radio"
      :id="radio"
      :checked="checkedValue === radio"
      name="delivery"
      v-model:checkedValue="checkedValue"
    />
    <u-button
      :disabled="!checkedValue"
      class="form__btn"
      styles="red"
      size="big"
      >Продовжити оформлення
    </u-button>
  </form>
  <div v-else class="form-data">
    <div class="form-data__field">{{ checkedValue }}</div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__btn {
    margin: 16px 0 0;
    align-self: center;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  &-data {
    padding: 16px 24px 24px;

    &__field {
      margin: 0 0 8px;
      font-family: var(--special-font);
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }
}
</style>
