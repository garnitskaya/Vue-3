<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "u-input",
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["update:value"],
  setup(_, { emit }) {
    const updateValue = (event) => {
      emit("update:value", event.target.value);
    };
    return { updateValue };
  },
});
</script>

<template>
  <div class="form-input">
    <label :for="name" class="input-label">{{ label }}</label>
    <input
      class="input-text"
      :type="type"
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :id="name"
      @input="updateValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.form {
  &-input {
    flex: 0 1 calc(50% - 24px / 2);
    display: flex;
    flex-direction: column;
    font-family: var(--special-font);

    @media (max-width: 576px) {
      flex: 0 1 100%;
    }
  }
}

.input {
  &-text {
    padding: 8px;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    border-radius: 5px;
    border: 1px solid var(--grey-dark);

    &::placeholder {
      color: var(--grey-dark);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.4375rem;
    }
  }

  &-label {
    font-size: 0.75rem;
    line-height: 1rem;
    margin: 0 0 4px 0;
  }
}
</style>
