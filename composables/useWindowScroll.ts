export function useWindowScroll() {
  const scrollX = ref<number>(0);
  const scrollY = ref<number>(0);

  function handleScroll() {
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;
  }

  onMounted(() => {
    if (!window) return;
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  })

  onBeforeUnmount(() => {
    if (!window) return;
    window.removeEventListener('scroll', handleScroll);
  })

  return {
    scrollX,
    scrollY
  }
}
