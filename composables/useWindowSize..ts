export function useWindowSize() {
  const width = ref<number>(window.innerWidth || 0);
  const height = ref<number>(window.innerHeight || 0);

  function handleResize() {
    width.value = window.innerWidth,
    height.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });

  return {
    width,
    height
  }
}
