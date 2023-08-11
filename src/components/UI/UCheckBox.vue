<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "u-checkbox",
  props: {
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:checked", "setValue"],
  setup({ name }, { emit }) {
    const setValue = () => {};

    const handleClick = (event) => {
      console.log(event.target.checked);
      emit("update:checked", event.target.checked);
      emit("setValue");
      localStorage.setItem(name, event.target.checked);
      setValue();
    };
    return { handleClick };
  },
});
</script>

<template>
  <label :for="id" class="checkbox">
    <input
      required
      class="checkbox__input"
      type="checkbox"
      :name="name"
      :id="id"
      :checked="checked"
      :value="value"
      :disabled="disabled"
      @input="handleClick($event)"
    />
    <span class="checkbox__item" />
    <slot />
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  display: flex;
  gap: 8px;
  width: 100%;
  overflow: hidden;
  &__input {
    display: none;
  }
  &__item {
    position: relative;
    width: 16px;
    height: 16px;
    display: block;
    border: 1px solid var(--grey-dark);
    background: var(--white);
    border-radius: 3px;
    cursor: pointer;
    &::before {
      content: "";
      display: none;
      position: absolute;
      width: 2px;
      height: 10px;
      background: var(--white);
      transform: translate(8px, 2px) rotate(45deg);
    }
    &::after {
      content: "";
      display: none;
      position: absolute;
      width: 2px;
      height: 6px;
      background: var(--white);
      transform: translate(3px, 6px) rotate(-45deg);
    }
  }
  & .checkbox__input:checked + .checkbox__item {
    border-color: var(--red);
    background: var(--red);

    &::after,
    &::before {
      display: block;
    }
  }
}
</style>
