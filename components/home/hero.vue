<template>
  <section class="hero-layout">
    <div class="container">
      <Text as="h1" type="title" color="black">
        É professor? A Tiveler é o que você sempre pediu
      </Text>

      <Text type="subtitle" color="black">
        Faça parte do jeito certo de gerenciar seus alunos. Faça parte do que é moderno.
      </Text>

      <ul class="ctas-list">
        <CustomLink to="#produto" type="scroll" weight="bold" icon="show">
          Saiba mais
        </CustomLink>
        <NuxtLink to="/cadastro">
          <CTA type="medium" highlight="high">
            Experimente agora mesmo
          </CTA>
        </NuxtLink>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .hero-layout {
    padding: 100px 0 160px 0;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      :deep(h1) {
        max-width: 620px;
        text-align: center;
      }

      :deep(p) {
        max-width: 610px;
        text-align: center;
      }

      .ctas-list {
        display: flex;
        align-items: center;
        gap: 30px;
      }
    }

    @media (max-width: 1024px) {
      .container {
        :deep(h1) {
          max-width: 580px;
        }

        :deep(p) {
          max-width: 590px;
        }
      }
    }
  }
</style>
