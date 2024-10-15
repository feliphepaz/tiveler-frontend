<template>
  <button
    :class="`cta-component ${type} ${variation} ${theme} ${highlight}`"
  >
    <svg
      v-if="type === 'big' && theme === 'dark' && variation === 'nav-back'"
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 18L3 10L11 2" stroke="white" strokeWidth="4" />
    </svg>

    <Text
      as="span"
      :type="type === 'big' ? 'subtitle' : 'text'"
      :variation="type === 'medium' || type === 'large' ? 'highlight-cta' : 'highlight'"
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
      <path d="M2 18L10 10L2 2" stroke="white" strokeWidth="4" />
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

  const props = withDefaults(defineProps<Props>(), {
    variation: 'none',
    theme: 'dark',
    highlight: 'default'
  })
</script>

<style lang="scss" scoped>
  .cta-component {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-blue);
    border: none;
    border-radius: var(--radius-10);
    transition: var(--transition-default);
    cursor: pointer;

    &.default {
      &:hover,
      &:active {
        transform: scale(1.08);
      }
    }

    &.simple {
      transition: var(--transition-simple);

      &:hover,
      &:active {
        background: var(--color-black);

        &.light {
          background: var(--color-black-20);
        }

        .text-component {
          color: var(--color-white);
        }
      }
    }

    &.high {
      &:hover,
      &:active {
        transform: scale(1.08);
        background: var(--color-yellow);

        .text-component {
          color: var(--color-blue);
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
      background: var(--color-black-20);
    }

    &.light {
      background: var(--color-white);
    }
  }
</style>
