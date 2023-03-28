import { ref } from "vue";

export default function useOpenMenu() {
  const isMenuOpen = ref(false);

  const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return { isMenuOpen, openMenu }
}