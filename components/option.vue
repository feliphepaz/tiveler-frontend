<template>
  <button
    class="option-component"
    @click="type === 'remove' ? emit('remove') : emit('edit')"
  >
    <svg
      class="icon"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-if="type === 'edit'"
        d="M2.91667 11.0833H3.74792L9.45 5.38125L8.61875 4.55L2.91667 10.2521V11.0833ZM1.75 12.25V9.77083L9.45 2.08542C9.56667 1.97847 9.69549 1.89583 9.83646 1.8375C9.97743 1.77917 10.1257 1.75 10.2812 1.75C10.4368 1.75 10.5875 1.77917 10.7333 1.8375C10.8792 1.89583 11.0056 1.98333 11.1125 2.1L11.9146 2.91667C12.0312 3.02361 12.1163 3.15 12.1698 3.29583C12.2233 3.44167 12.25 3.5875 12.25 3.73333C12.25 3.88889 12.2233 4.03715 12.1698 4.17812C12.1163 4.3191 12.0312 4.44792 11.9146 4.56458L4.22917 12.25H1.75ZM9.02708 4.97292L8.61875 4.55L9.45 5.38125L9.02708 4.97292Z"
        fill="black"
      />

      <path
        v-if="type === 'remove'"
        d="M4.08331 12.25C3.76248 12.25 3.48783 12.1358 3.25935 11.9073C3.03088 11.6788 2.91665 11.4042 2.91665 11.0833V3.5H2.33331V2.33333H5.24998V1.75H8.74998V2.33333H11.6666V3.5H11.0833V11.0833C11.0833 11.4042 10.9691 11.6788 10.7406 11.9073C10.5121 12.1358 10.2375 12.25 9.91665 12.25H4.08331ZM9.91665 3.5H4.08331V11.0833H9.91665V3.5ZM5.24998 9.91667H6.41665V4.66667H5.24998V9.91667ZM7.58331 9.91667H8.74998V4.66667H7.58331V9.91667Z"
        fill="black"
      />
    </svg>

    <Text as="span" type="caption" color="black">
      {{ type === 'edit' ? 'Editar' : 'Remover' }}
    </Text>
  </button>
</template>

<script setup lang="ts">
  interface Props {
    type: 'edit' | 'remove'
  }

  const { type } = defineProps<Props>()

  const emit = defineEmits(['edit', 'remove'])
</script>

<style lang="scss" scoped>
  .option-component {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px;
    border: none;
    background: transparent;
    cursor: pointer;

    .icon {
      transition: $transition-default;
      opacity: 0.2;
    }

    .text-component {
      opacity: 0.2;
    }

    &:hover {
      .icon,
      .text-component {
        opacity: 1;
      }
    }
  }
</style>
