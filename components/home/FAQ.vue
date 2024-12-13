<template>
  <section class="faq-layout">
    <div class="container">
      <Text as="h2" type="title" color="black">
        Perguntas frequentes
      </Text>
      <ul class="list">
        <li>
          <Dropdown response="Lorem ipsum dolor">O que é a Tiveler?</Dropdown>
        </li>
        <li>
          <Dropdown response="Lorem ipsum dolor">Quanto custa?</Dropdown>
        </li>
        <li>
          <Dropdown response="Lorem ipsum dolor">O que eu posso fazer com a Tiveler?</Dropdown>
        </li>
        <li>
          <Dropdown response="Lorem ipsum dolor">Não sou professor. Posso usar a Tiveler?</Dropdown>
        </li>
        <li>
          <Dropdown response="Lorem ipsum dolor">Como entro em contato?</Dropdown>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .faq-layout {
    margin: 160px 0;

    .list {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      gap: 30px;
    }

    @media (max-width: 1024px) {
      margin: 140px 0;
    }
  }
</style>
