export function useWindowScroll() {
  const scrollX = ref<number>(window.scrollX || 0);
  const scrollY = ref<number>(window.scrollY || 0);

  function handleScroll() {
    scrollX.value = window.scrollX,
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  })

  return {
    scrollX,
    scrollY
  };
}
