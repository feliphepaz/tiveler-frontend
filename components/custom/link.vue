<template>
  <NuxtLink :to="href || ''" :class="`custom-link-component ${type}`">
    <Text
      as="span"
      type="text"
      :color="theme === 'dark' ? 'black' : 'white'"
      :variation="weight === 'bold' ? 'highlight-cta' : 'none'"
    >
      <slot />
    </Text>

    <svg
      v-if="icon === 'show' && weight === 'bold'"
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L5 5L1 1"
        :stroke="theme === 'dark' ? 'black' : 'white'"
        strokeWidth="2"
      />
    </svg>

    <svg
      v-if="icon === 'show' && weight === 'regular'"
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L5 5L1 1"
        :stroke="theme === 'dark' ? 'black' : 'white'"
      />
    </svg>
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    href: string
    type: 'redirect' | 'scroll'
    icon?: 'show' | 'hidden'
    theme?: 'dark' | 'light'
    weight?: 'regular' | 'bold'
  }

  const props = withDefaults(defineProps<Props>(), {
    icon: 'hidden',
    theme: 'dark',
    weight: 'regular'
  })
</script>

<style lang="scss" scoped>
  .custom-link-component {
    display: flex;
    align-items: center;
    gap: 8px;
    width: max-content;

    &.redirect {
      flex-direction: row;
    }

    &.scroll {
      flex-direction: column;

      svg {
        transform: rotate(90deg);
      }
    }

    &:hover {
      text-decoration: underline;
    }

    .text-component {
      text-align: center;
    }
  }
</style>
