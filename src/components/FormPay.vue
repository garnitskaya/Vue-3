<script setup>
import { ref, watch } from "vue";

const radioArray = [
  //[
  //  "100% передплата на картку",
  //  "(реквізити для оплати будуть надіслані Вам на вказану пошту або номер телефону)",
  //],
  "PrivatPay",
  "Google Pay",
  "Apple Pay",
];

const emits = defineEmits(["setEditMode"]);
const props = defineProps({
  editMode: {
    type: Boolean,
    default: true,
  },
});

const checkedValue = ref(localStorage.getItem("pay") || "");

const submitForm = () => {
  if (!checkedValue.value) return;
  emits("setEditMode");
};
</script>

<template>
  <form v-if="editMode" class="form" @click="submitForm">
    <radiobutton
      v-for="radio in radioArray"
      :key="radio"
      :label="radio"
      :value="radio"
      :id="radio"
      :checked="checkedValue === radio"
      name="pay"
      v-model:checkedValue="checkedValue"
    />
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
