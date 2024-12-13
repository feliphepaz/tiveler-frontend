<template>
  <p
    v-if="!as || as === 'p'"
    :class="`text-component ${type} ${variation} ${color}`"
  >
    <slot />
  </p>

  <span
    v-if="as === 'span'"
    :class="`text-component ${type} ${variation} ${color}`"
  >
    <slot />
  </span>

  <h1
    v-if="as === 'h1'"
    :class="`text-component ${type} ${variation} ${color}`"
  >
    <slot />
  </h1>

  <h2
    v-if="as === 'h2'"
    :class="`text-component ${type} ${variation} ${color}`"
  >
    <slot />
  </h2>

  <h3
    v-if="as === 'h3'"
    :class="`text-component ${type} ${variation} ${color}`"
  >
    <slot />
  </h3>

  <h4
    v-if="as === 'h4'"
    :class="`text-component ${type} ${variation} ${color}`"
  >
    <slot />
  </h4>
</template>

<script setup lang="ts">
  interface Props {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4'
    type:
      | 'title'
      | 'subtitle'
      | 'text'
      | 'current-text'
      | 'caption'
      | 'copyright'
    variation?: 'none' | 'highlight' | 'highlight-cta' | 'underline'
    color:
      | 'white'
      | 'gray'
      | 'black-20'
      | 'black'
      | 'linear-horizontal'
      | 'linear-vertical'
      | 'blue'
      | 'yellow'
      | 'green'
      | 'red'
  }

  withDefaults(defineProps<Props>(), {
    variation: 'none',
  })
</script>

<style lang="scss" scoped>
  .text-component {
    transition: var(--transition-default);

    &.title {
      font-family: var(--font);
      font-weight: var(--weight-extra-bold);
      font-size: 48px;
      line-height: 120%;

      @media (max-width: 1024px) {
        font-size: 32px;
      }
    }

    &.subtitle {
      font-family: var(--font);
      font-weight: var(--weight-medium);
      font-size: 24px;
      line-height: 120%;

      @media (max-width: 1024px) {
        font-size: 18px;
      }
    }

    &.text {
      font-family: var(--font);
      font-weight: var(--weight-medium);
      font-size: 16px;
      line-height: 120%;
    }

    &.current-text {
      font-family: var(--font);
      font-weight: var(--weight-medium);
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0.1px;
    }

    &.caption {
      font-family: var(--font);
      font-weight: var(--weight-bold);
      font-size: 12px;
      line-height: 120%;
    }

    &.copyright {
      font-family: var(--font);
      font-weight: var(--weight-regular);
      font-size: 12px;
      line-height: 120%;
    }

    &.text :deep(strong),
    &.text.highlight,
    &.current-text :deep(strong),
    &.current-text.highlight,
    &.subtitle :deep(strong),
    &.subtitle.highlight {
      font-weight: var(--weight-bold);
    }

    &.text.highlight-cta,
    &.current-text.highlight-cta {
      font-weight: var(--weight-extra-bold);
    }

    &.text.underline,
    &.current-text.underline,
    &.caption.underline {
      text-decoration: underline;
    }

    &.white {
      color: var(--color-white);
    }

    &.gray {
      color: var(--color-gray);
    }

    &.black-20 {
      color: var(--color-black-20);
    }

    &.black {
      color: var(--color-black);
    }

    &.linear-horizontal {
      color: var(--color-linear-horizontal);
    }

    &.linear-vertical {
      color: var(--color-linear-vertical);
    }

    &.blue {
      color: var(--color-blue);
    }

    &.yellow {
      color: var(--color-yellow);
    }

    &.green {
      color: var(--color-green);
    }

    &.red {
      color: var(--color-red);
    }
  }
</style>
