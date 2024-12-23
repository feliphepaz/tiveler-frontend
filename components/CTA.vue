<template>
  <button :class="`cta-component ${type} ${variation} ${theme} ${highlight}`">
    <svg
      v-if="type === 'big' && theme === 'dark' && variation === 'nav-back'"
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 18L3 10L11 2" stroke="white" stroke-width="4" />
    </svg>

    <Text
      as="span"
      :type="type === 'big' ? 'subtitle' : 'text'"
      :variation="
        type === 'medium' || type === 'large' ? 'highlight-cta' : 'highlight'
      "
      :color="theme === 'dark' ? 'white' : 'blue'"
    >
      <slot />
    </Text>

    <svg
      v-if="type === 'big' && theme === 'dark' && variation === 'nav-next'"
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 18L10 10L2 2" stroke="white" stroke-width="4" />
    </svg>
  </button>
</template>

<script setup lang="ts">
  interface Props {
    type: 'small' | 'medium' | 'large' | 'big'
    variation?: 'none' | 'nav-next' | 'nav-back'
    theme?: 'dark' | 'light'
    highlight?: 'none' | 'default' | 'simple' | 'high'
  }

  withDefaults(defineProps<Props>(), {
    variation: 'none',
    theme: 'dark',
    highlight: 'default',
  })
</script>

<style lang="scss" scoped>
  .cta-component {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-blue;
    border: none;
    border-radius: $radius-10;
    transition: $transition-default;
    cursor: pointer;

    &.default {
      &:hover {
        transform: scale(1.08);
      }
    }

    &.simple {
      transition: $transition-simple;

      &:hover {
        background: $color-black;

        &.light {
          background: $color-black-20;
        }

        :deep(.text-component) {
          color: $color-white;
        }
      }
    }

    &.high {
      &:hover {
        transform: scale(1.08);
        background: $color-yellow;

        :deep(.text-component) {
          color: $color-blue;
        }
      }
    }

    &.small {
      padding: 10px 20px;
    }

    &.medium,
    &.large {
      padding: 14px 20px;
    }

    &.large,
    &.big {
      padding: 14px 20px;
      width: 100%;
    }

    &.big {
      padding: 14px 40px;
    }

    &.big.dark.nav-next,
    &.big.dark.nav-back {
      > span {
        width: 100%;
      }
    }

    &.big.dark.nav-back {
      background: $color-black-20;
    }

    &.light {
      background: $color-white;
    }
  }
</style>
