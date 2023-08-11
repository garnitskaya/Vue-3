<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";

const emits = defineEmits(["setEditMode"]);
const { dispatch } = useStore();

const props = defineProps({
  editMode: {
    type: Boolean,
    default: true,
  },
});

const formData = reactive(
  JSON.parse(localStorage.getItem("contacts")) || {
    nameField: "",
    emailField: "",
    telField: "",
  }
);

const submitForm = () => {
  if (formData.nameField === "" || formData.emailField === "" || formData.telField === "")
    return;
  dispatch("orderData", { contacts: formData });
  emits("setEditMode");

  localStorage.setItem("contacts", JSON.stringify(formData));
};
</script>

<template>
  <form v-if="editMode" @submit.prevent="submitForm" class="form">
    <u-input
      name="name"
      placeholder="Введіть прізвище та ім’я"
      label="Прізвище та ім’я"
      v-model:value="formData.nameField"
    />
    <u-input
      name="email"
      placeholder="Введіть email"
      label="Email"
      type="email"
      v-model:value="formData.emailField"
    />
    <u-input
      name="tel"
      placeholder="+38 (___) ___ __ __"
      label="Номер телефону"
      type="tel"
      v-model:value="formData.telField"
    />
    <u-button
      :disabled="
        formData.nameField === '' ||
        formData.emailField === '' ||
        formData.telField === ''
      "
      class="form__btn"
      styles="red"
      size="big"
      >Продовжити оформлення</u-button
    >
  </form>
  <div v-else class="form-data">
    <div class="form-data__field">{{ formData.nameField }}</div>
    <div class="form-data__field">{{ formData.emailField }}</div>
    <div class="form-data__field">{{ formData.telField }}</div>
  </div>
</template>
<style lang="scss" scoped>
.form {
  padding: 16px 24px 24px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;

  &-data {
    padding: 16px 24px 24px;

    &__field {
      margin: 0 0 8px;
      font-family: var(--special-font);
      font-size: 0.875rem;
      line-height: 1.3125rem;
    }
  }

  @media (max-width: 768px) {
    gap: 12px 24px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }

  &__btn {
    flex: 0 1 calc(50% - 24px / 2);

    @media (max-width: 576px) {
      flex: 0 1 100%;
      margin-top: 4px;
    }
  }
}
</style>
