<template>
  <component :is="as" :class="`text-component ${type} ${variation} ${color}`">
    <slot />
  </component>
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
    as: 'p',
    variation: 'none',
  })
</script>

<style lang="scss" scoped>
  .text-component {
    transition: $transition-default;

    &.title {
      font-family: $font;
      font-weight: $weight-extra-bold;
      font-size: 48px;
      line-height: 120%;

      @include tablet {
        font-size: 32px;
      }
    }

    &.subtitle {
      font-family: $font;
      font-weight: $weight-medium;
      font-size: 24px;
      line-height: 140%;

      @include tablet {
        font-size: 18px;
      }
    }

    &.text {
      font-family: $font;
      font-weight: $weight-medium;
      font-size: 16px;
      line-height: 120%;
    }

    &.current-text {
      font-family: $font;
      font-weight: $weight-medium;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0.1px;
    }

    &.caption {
      font-family: $font;
      font-weight: $weight-bold;
      font-size: 12px;
      line-height: 120%;
    }

    &.copyright {
      font-family: $font;
      font-weight: $weight-regular;
      font-size: 12px;
      line-height: 120%;
    }

    &.text :deep(strong),
    &.text.highlight,
    &.current-text :deep(strong),
    &.current-text.highlight,
    &.subtitle :deep(strong),
    &.subtitle.highlight {
      font-weight: $weight-bold;
    }

    &.text.highlight-cta,
    &.current-text.highlight-cta {
      font-size: 18px;
      font-weight: $weight-bold;
    }

    &.text.underline,
    &.current-text.underline,
    &.caption.underline {
      text-decoration: underline;
    }

    &.white {
      color: $color-white;
    }

    &.gray {
      color: $color-gray;
    }

    &.black-20 {
      color: $color-black-20;
    }

    &.black {
      color: $color-black;
    }

    &.linear-horizontal {
      color: $color-linear-horizontal;
    }

    &.linear-vertical {
      color: $color-linear-vertical;
    }

    &.blue {
      color: $color-blue;
    }

    &.yellow {
      color: $color-yellow;
    }

    &.green {
      color: $color-green;
    }

    &.red {
      color: $color-red;
    }
  }
</style>
