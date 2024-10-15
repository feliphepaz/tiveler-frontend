<template>
  <section class="call-to-action-layout">
    <div class="container">
      <Text as="h2" type="subtitle" variation="highlight" color="black">
        Gostou do que viu até aqui?
      </Text>
      <Text as="p" type="subtitle" color="black">
        Experimente a nossa plataforma!
        <br />
        Lembrando, que é <strong>gratuito</strong> 🤩
      </Text>
      <NuxtLink to="/cadastro">
        <CTA type="medium" highlight="high">
          Experimente agora mesmo
        </CTA>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .call-to-action-layout {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      > :deep(h2),
      > :deep(p) {
        text-align: center;
      }
    }
  }
</style>
