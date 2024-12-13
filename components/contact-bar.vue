<template>
  <div class="contact-bar-layout">
    <div class="container">
      <div class="content">
        <Text as="h2" type="subtitle" variation="highlight" color="white">
          Gostaria de tirar alguma dúvida ou precisa de ajuda?
        </Text>
        <Text type="subtitle" color="white">
          Acesse a nossa página de contato!
        </Text>
        <CustomLink
          to="/contato"
          type="redirect"
          icon="show"
          weight="bold"
          theme="light"
        >
          Contato
        </CustomLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .contact-bar-layout {
    background: $color-blue;
    padding: 90px 0;

    @include mobile {
      padding: 60px 0;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      max-width: 393px;
    }
  }
</style>
