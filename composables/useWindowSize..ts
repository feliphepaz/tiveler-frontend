export function useWindowSize() {
  const width = ref<number>(0)
  const height = ref<number>(0)

  function handleResize() {
    ;(width.value = window.innerWidth), (height.value = window.innerHeight)
  }

  onMounted(() => {
    if (!window) return
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  onBeforeUnmount(() => {
    if (!window) return
    window.removeEventListener('resize', handleResize)
  })

  return {
    width,
    height,
  }
}
