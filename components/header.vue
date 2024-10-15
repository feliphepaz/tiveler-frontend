<template>
  <header
    :class="`header-layout menu-${getMenuType()} ${`menu-${scrollY > 80 ? 'scrolled' : 'not-scrolled'}`}`"
  >
    <div class="container">
      <div class="header-left">
        <NuxtLink to="/" class="logo">
          <img
            :src="logo"
            alt="Tiveler"
          />
        </NuxtLink>

        <nav class="menu">
          <ul>
            <li>
              <CustomLink to="/" type="redirect">
                Início
              </CustomLink>
            </li>

            <li>
              <CustomLink to="#produto" type="scroll" icon="show">
                Produto
              </CustomLink>
            </li>

            <li>
              <CustomLink to="#sobre" type="scroll" icon="show">
                Sobre
              </CustomLink>
            </li>

            <li>
              <CustomLink to="/contato" type="redirect">
                Contato
              </CustomLink>
            </li>
          </ul>

          <div class="header-ctas-mobile">
            <NuxtLink to="/login">
              <CTA type="small" theme="light" highlight="simple">
                Entrar
              </CTA>
            </NuxtLink>

            <NuxtLink to="/cadastro">
              <CTA type="small" highlight="simple">
                Experimente agora mesmo
              </CTA>
            </NuxtLink>
          </div>
        </nav>
      </div>

      <div class="header-right">
        <button
          :class="`menu-icon menu-${getMenuStatus()}`"
          @click="setMenuType"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 1.77778C32 0.928 31.3262 0 30.2222 0H1.77778C0.675556 0 0 0.922667 0 1.77778V30.2222C0 31.3262 0.924444 32 1.77778 32H30.2222C31.072 32 32 31.3262 32 30.2222V1.77778ZM2.66667 2.66667H29.3333V29.3333H2.66667V2.66667ZM24.8889 21.7778C24.8889 21.0418 24.2916 20.4444 23.5556 20.4444H8.44444C7.70844 20.4444 7.11111 21.0418 7.11111 21.7778C7.11111 22.5138 7.70844 23.1111 8.44444 23.1111H23.5556C24.2916 23.1111 24.8889 22.5138 24.8889 21.7778ZM24.8889 16.0036C24.8889 15.2676 24.2916 14.6702 23.5556 14.6702H8.44444C7.70844 14.6702 7.11111 15.2676 7.11111 16.0036C7.11111 16.7396 7.70844 17.3369 8.44444 17.3369H23.5556C24.2916 17.3369 24.8889 16.7396 24.8889 16.0036ZM24.8889 10.2222C24.8889 9.48622 24.2916 8.88889 23.5556 8.88889H8.44444C7.70844 8.88889 7.11111 9.48622 7.11111 10.2222C7.11111 10.9582 7.70844 11.5556 8.44444 11.5556H23.5556C24.2916 11.5556 24.8889 10.9582 24.8889 10.2222Z"
              fill="#0460D9"
            />
          </svg>
        </button>

        <div class="header-ctas-desktop">
          <NuxtLink to="/login">
            <CTA type="small" theme="light" highlight="simple">
              Entrar
            </CTA>
          </NuxtLink>
          <NuxtLink to="/cadastro">
            <CTA type="small" highlight="simple">
              Experimente agora mesmo
            </CTA>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useWindowSize } from '~/composables/useWindowSize.'
  import { useWindowScroll } from '~/composables/useWindowScroll'
  import logo from '@/assets/logos/logo.svg'

  const { width } = useWindowSize()
  const { scrollY } = useWindowScroll()

  const menuType = ref('no-effect')

  interface Props {
    type: 'institutional' | 'product'
  }

  function setMenuType() {
    if (menuType.value === 'no-effect' || menuType.value === 'desktop') {
      menuType.value = 'mobile'
    } else {
      menuType.value = 'desktop'
    }
  }

  function getMenuType() {
    if (menuType.value === 'mobile' && width.value <= 1024) {
      return 'mobile'
    } else if (menuType.value === 'desktop') {
      return 'desktop'
    } else {
      return 'no-effect'
    }
  }

  function getMenuStatus() {
    if (menuType.value === 'mobile' && width.value <= 1024) {
      return 'activated'
    } else {
      return 'disabled'
    }
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  @keyframes showMenuMobile {
    0% {
      opacity: 0;
      transform: translate3d(0px, -10px, 0px);
    }
    100% {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
  }

  @keyframes hiddenMenuMobile {
    0% {
      display: flex;
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
    100% {
      opacity: 0;
      transform: translate3d(0px, -10px, 0px);
    }
  }

  @keyframes showArrow {
    0% {
      margin-top: -20px;
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hiddenArrow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      margin-top: -20px;
    }
  }

  .header-layout {
    position: fixed;
    z-index: 999;
    width: 100%;
    padding: 20px 0px;
    background: var(--color-white);
    box-shadow: var(--shadow-default);
    transition: var(--transition-simple);

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-left {
        display: flex;
        align-items: center;
        gap: 60px;

        .menu {
          .header-ctas-mobile {
            display: none;
          }

          ul {
            display: flex;
            align-items: center;
            gap: 60px;
          }
        }
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 10px;

        .header-ctas-desktop {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .menu-icon {
          display: none;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--color-white);
          cursor: pointer;

          svg {
            flex: none;

            path {
              transition: var(--transition-simple);
            }
          }

          &.menu-activated svg path {
            fill: var(--color-red);
          }
        }
      }
    }

    &.menu-mobile .container .header-left .menu {
      display: flex;
    }

    &.menu-not-scrolled
      .container
      .header-left
      .menu
      ul
      li
      :deep(.custom-link-component)
      svg {
      animation: showArrow var(--transition-simple) forwards;
    }

    &.menu-scrolled {
      .container .header-left .menu ul li :deep(.custom-link-component) svg {
        animation: hiddenArrow var(--transition-simple) forwards;
      }
    }

    @media (max-width: 1024px) {
      .container {
        .header-left {
          .menu {
            display: none;
            flex-direction: column;
            gap: 40px;
            background: var(--color-gray);
            width: calc(100% + 20px);
            padding: 20px 40px 40px 40px;
            position: absolute;
            top: 79px;
            left: -20px;

            ul {
              width: 100%;
              flex-direction: column;
              align-items: flex-start;
              gap: 20px;

              li {
                width: 100%;

                &::after {
                  content: "";
                  display: block;
                  width: calc(100% + 20px);
                  height: 1px;
                  background: var(--color-white);
                }

                :deep(.custom-link-component) {
                  width: 100%;
                  align-items: flex-start;
                  padding: 10px 0px;

                  svg {
                    display: none;
                  }
                }
              }
            }
          }

          .header-ctas-mobile {
            display: none;
            flex-direction: column;
            gap: 20px;

            :deep(.cta-component) {
              width: calc(100% + 20px);
            }
          }
        }

        .header-right .menu-icon {
          display: flex;
        }
      }

      &.menu-scrolled .container .header-left .menu {
        top: 79px;
      }

      &.menu-mobile .container .header-left .menu {
        animation: showMenuMobile var(--transition-simple) forwards;
      }

      &.menu-desktop .container .header-left .menu {
        animation: hiddenMenuMobile var(--transition-simple) forwards;
      }
    }

    @media (max-width: 768px) {
      .container {
        .header-left {
          .logo {
            width: 120px;
          }

          .menu {
            top: 72px;

            .header-ctas-mobile {
              display: flex;
            }
          }
        }

        .header-right .header-ctas-desktop {
          display: none;
        }
      }

      &.menu-scrolled .container .header-left .menu {
        top: 72px;
      }
    }
  }
</style>
