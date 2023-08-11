<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "radiobutton",
  props: {
    name: {
      type: String,
      default: "",
    },
    value: {
      type: String || Array,
      default: "",
    },
    label: {
      type: String || Array,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:checkedValue"],
  setup({ name }, { emit }) {
    const { dispatch } = useStore();

    const handleClick = (event) => {
      emit("update:checkedValue", event.target.value);
      dispatch("orderData", { [name]: event.target.value });

      localStorage.setItem(name, event.target.value);
    };
    return { handleClick };
  },
});
</script>

<template>
  <label class="form-radio" :for="id">
    <input
      class="form-radio__input"
      type="radio"
      :name="name"
      :checked="checked"
      :value="value"
      :id="id"
      @change="handleClick"
    />
    <span class="form-radio__item" />
    <span v-if="Array.isArray(label)" class="form-radio__label"
      >{{ label[0] }}
      <span class="form-radio__desc">{{ label[1] }}</span>
    </span>
    <span v-else class="form-radio__label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
.form-radio {
  font-family: var(--special-font);
  display: flex;
  cursor: pointer;
  gap: 8px;

  &__input {
    display: none;
  }
  &__item {
    margin: 4px 0 0;
    position: relative;
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    border: 1px solid var(--grey-dark);
    &::after {
      content: "";
      position: absolute;
      display: none;
      top: 0px;
      left: 0px;
      transform: translate(1.5px, 1.5px);
      width: 10px;
      height: 10px;
      background: var(--red);
      border-radius: 50%;
    }
  }

  &__label {
    display: block;
    max-width: calc(100% - 15px - 8px);
    font-size: 0.875rem;
    line-height: 1.3125rem;
    user-select: none;
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.4375rem;
    }
  }
  &__desc {
    color: var(--grey-dark);
  }
  & .form-radio__input:checked + .form-radio__item {
    border-color: var(--red);
    &::after {
      display: block;
    }
  }
}
</style>
