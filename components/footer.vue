<template>
  <footer class="footer-layout">
    <div class="container">
      <div class="contact-methods">
        <NuxtLink to="/" class="logo">
          <img :src="logo" alt="Tiveler" />
        </NuxtLink>

        <ul class="social-media">
          <li>
            <NuxtLink to="/">
              <img :src="instagram" alt="Instagram" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <img :src="x" alt="X" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">
              <img :src="linkedin" alt="LinkedIn" />
            </NuxtLink>
          </li>
        </ul>

        <div class="email">
          <NuxtLink to="mailto:contato@tiveler.com">
            <Text type="text" color="black">contato@tiveler.com</Text>
          </NuxtLink>
          <CustomLink to="/contato" type="redirect" icon="show" weight="bold">
            Contato
          </CustomLink>
        </div>
      </div>

      <div class="copyright-wrapper">
        <Text type="copyright" color="black">
          Tiveler © 2024. Alguns direitos reservados.
        </Text>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import logo from '@/assets/logos/logo.svg'
  import instagram from '@/assets/icons/instagram.svg'
  import x from '@/assets/icons/x.svg'
  import linkedin from '@/assets/icons/linkedin.svg'
</script>

<style lang="scss" scoped>
  .contact-methods {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    gap: 60px;

    @include mobile {
      flex-direction: column;
      gap: 40px;

      .logo {
        width: 120px;
      }
    }

    .social-media {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .email {
      display: flex;
      flex-direction: column;
      gap: 10px;

      @include mobile {
        align-items: center;
      }
    }
  }

  .copyright-wrapper {
    text-align: center;
    padding-bottom: 20px;
  }
</style>
