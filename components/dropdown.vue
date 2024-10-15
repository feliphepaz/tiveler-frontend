<template>
  <div class="dropdown-component">
    <button
      :class="`dropdown-${activeDropdown ? 'disabled' : 'activated'}`"
      @click="() => activeDropdown = !activeDropdown"
    >
      <Text type="subtitle" color="black">
        <slot />
      </Text>

      <svg
        class="more"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 15H30" stroke="black" strokeWidth="2" />
        <path d="M15 30L15 -1.07288e-06" stroke="black" strokeWidth="2" />
      </svg>

      <svg
        class="less"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 15H30" stroke="white" strokeWidth="2" />
      </svg>
    </button>
    <div
      :class="`response dropdown-${activeDropdown ? 'activated' : 'disabled'}`"
    >
      <Text type="current-text" color="white">
        {{ response }}
      </Text>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    response: string
  }

  const activeDropdown = ref<boolean>(false)

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  @keyframes showDropdown {
    0% {
      opacity: 0;
      transform: translate3d(0px, -10px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
  }

  .dropdown-component {
    width: 100%;

    > button {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      border: none;
      padding: 20px;
      background: var(--color-gray);
      cursor: pointer;
      transition: var(--transition-simple);

      &:hover {
        background: var(--color-black);

        :deep(.text-component) {
          color: var(--color-white);
        }

        svg path {
          stroke: var(--color-white);
        }
      }

      svg {
        position: absolute;
        right: 20px;
        opacity: 0;
        transition: var(--transition-simple);
      }

      &.dropdown-disabled {
        background: var(--color-black);

        :deep(.text-component) {
          color: var(--color-white);
        }

        .less {
          opacity: 1;
        }
      }

      &.dropdown-activated .more {
        opacity: 1;
      }
    }

    .response {
      display: none;
      background: var(--color-black);
      padding: 20px;

      &.dropdown-activated {
        display: block;
        animation: showDropdown var(--transition-simple) forwards;
      }
    }
  }
</style>
