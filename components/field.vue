<template>
  <div class="field-component">
    <label :for="name">
      <Text
        as="span"
        :type="size === 'big' ? 'subtitle' : 'text'"
        :variation="size === 'big' ? 'none' : 'highlight'"
        color="black"
      >
        <slot />
      </Text>

      <div v-if="tooltip" class="tooltip">
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="8" r="6.5" stroke="black" strokeOpacity="0.2" />
          <path
            d="M5.62 9.724C5.62 9.46 5.656 9.224 5.728 9.016C5.8 8.808 5.916 8.612 6.076 8.428C6.244 8.244 6.464 8.056 6.736 7.864C6.976 7.688 7.168 7.532 7.312 7.396C7.464 7.26 7.572 7.124 7.636 6.988C7.708 6.852 7.744 6.7 7.744 6.532C7.744 6.276 7.648 6.084 7.456 5.956C7.272 5.82 7.012 5.752 6.676 5.752C6.34 5.752 6.008 5.804 5.68 5.908C5.352 6.012 5.016 6.152 4.672 6.328L4.036 5.044C4.428 4.828 4.852 4.652 5.308 4.516C5.764 4.38 6.264 4.312 6.808 4.312C7.64 4.312 8.284 4.512 8.74 4.912C9.204 5.312 9.436 5.82 9.436 6.436C9.436 6.764 9.384 7.048 9.28 7.288C9.176 7.528 9.02 7.752 8.812 7.96C8.604 8.16 8.344 8.376 8.032 8.608C7.8 8.776 7.62 8.92 7.492 9.04C7.364 9.16 7.276 9.276 7.228 9.388C7.188 9.5 7.168 9.64 7.168 9.808V10.156H5.62V9.724ZM5.428 12.16C5.428 11.792 5.528 11.536 5.728 11.392C5.928 11.24 6.172 11.164 6.46 11.164C6.74 11.164 6.98 11.24 7.18 11.392C7.38 11.536 7.48 11.792 7.48 12.16C7.48 12.512 7.38 12.768 7.18 12.928C6.98 13.08 6.74 13.156 6.46 13.156C6.172 13.156 5.928 13.08 5.728 12.928C5.528 12.768 5.428 12.512 5.428 12.16Z"
            fill="black"
            fillOpacity="0.2"
          />
        </svg>
        <Text type="copyright" color="white">
          {{ tooltip }}
        </Text>
      </div>
    </label>

    <input
      v-if="type === 'input' || type === 'new-password'"
      :name="name"
      :id="name"
      :type="variation === 'password' && showPassword ? 'text' : variation"
      @keyup="(e) => type === 'new-password' && validatePassword(e)"
    />

    <select v-if="type === 'select'" :name="name" :id="name" />

    <textarea v-if="type === 'textarea'" :name="name" :id="name" />

    <div v-if="variation === 'password'" class="show-password">
      <input
        type="checkbox"
        id="show-password"
        name="show-password"
        @change="showPassword = !showPassword"
        :checked="showPassword"
      />
      <label for="show-password">
        <Text type="caption" color="black"> Mostrar senha </Text>
      </label>
    </div>

    <Text v-if="alert" type="caption" color="red">
      {{ alert }}
    </Text>

    <ul v-if="type === 'new-password'" class="password-requirements">
      <li :class="validPassword.upperCase ? 'validated' : ''">
        <Text as="span" type="text" color="black"> Letra maiúscula </Text>
      </li>
      <li :class="validPassword.lowerCase ? 'validated' : ''">
        <Text as="span" type="text" color="black"> Letra minúscula </Text>
      </li>
      <li :class="validPassword.specialCharacter ? 'validated' : ''">
        <Text as="span" type="text" color="black"> Caractere especial </Text>
      </li>
      <li :class="validPassword.number ? 'validated' : ''">
        <Text as="span" type="text" color="black"> Número </Text>
      </li>
      <li :class="validPassword.minEightCharacters ? 'validated' : ''">
        <Text as="span" type="text" color="black"> Mínimo 8 caracteres </Text>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    name: string
    type: 'input' | 'select' | 'textarea' | 'new-password'
    variation?: 'text' | 'email' | 'password'
    tooltip?: string
    size?: 'medium' | 'big'
    alert?: string
  }

  const showPassword = ref(false)
  const validPassword = ref({
    upperCase: false,
    lowerCase: false,
    specialCharacter: false,
    number: false,
    minEightCharacters: false,
  })

  function validatePassword(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement
    const hasUpperCase = /[A-Z]/.test(target.value)
    const hasLowerCase = /[a-z]/.test(target.value)
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(target.value)
    const hasNumber = /\d/.test(target.value)
    const minEightCharacters = target.value.length >= 8

    validPassword.value = {
      upperCase: hasUpperCase,
      lowerCase: hasLowerCase,
      specialCharacter: hasSpecialCharacter,
      number: hasNumber,
      minEightCharacters: minEightCharacters,
    }
  }

  withDefaults(defineProps<Props>(), {
    variation: 'text',
    size: 'medium',
  })
</script>

<style lang="scss" scoped>
  .field-component {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      display: flex;
      align-items: center;
      gap: 8px;

      .tooltip {
        position: relative;
        top: 2px;

        &:hover {
          svg {
            border: var(--border-small);
          }

          :deep(.text-component) {
            display: block;
          }
        }

        :deep(.text-component) {
          display: none;
          width: 200px;
          background: var(--color-blue);
          padding: 10px;
          border-radius: var(--radius-10);
          position: absolute;
          top: -10px;
          left: 20px;

          &::before {
            content: '';
            position: absolute;
            left: -4px;
            top: 15px;
            width: 0;
            height: 0;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
            border-right: 4px solid var(--color-blue);
          }
        }
      }
    }

    input,
    select,
    textarea {
      font-family: var(--font);
      font-weight: var(--weight-medium);
      background: var(--color-white);
      font-size: 16px;
      line-height: 120%;
      padding: 12px 14px;
      color: var(--color-black);
      border: var(--border-default);
      transition: var(--transition-default);

      &::placeholder {
        color: var(--color-black-20);
      }

      &:active,
      &:focus {
        border: var(--border-hover);
        background: var(--color-gray);
        outline: none;
      }

      &:disabled {
        background: var(--color-gray);
      }
    }

    textarea {
      height: 100px;
      resize: vertical;
    }

    .show-password {
      display: flex;
      gap: 8px;

      input[type='checkbox'] {
        display: block;
        width: 18px;
        height: 18px;
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        padding: 0px;
        border: var(--border-default);
        background: var(--color-white);
        margin: 0px;

        &:checked {
          background: var(--color-blue);
        }
      }

      input[type='checkbox'],
      label {
        cursor: pointer;
      }
    }

    .password-requirements {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;

        &:before {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          background: var(--color-black-20);
          border-radius: var(--radius-circle);
        }

        &.validated {
          &:before {
            background: var(--color-green);
          }
        }
      }
    }
  }
</style>
