<template>
  <div class="form">
    <form>
      <Field name="name" type="input" size="big" placeholder="Seu nome aqui">
        Nome
      </Field>

      <Field
        name="email"
        type="input"
        variation="email"
        size="big"
        placeholder="Seu email aqui"
      >
        Email
      </Field>

      <Field
        name="password"
        type="new-password"
        variation="password"
        size="big"
        placeholder="Escolha uma senha"
      >
        Senha
      </Field>

      <CTA type="big">Começar!</CTA>
    </form>

    <Text type="copyright" color="black">
      Ao se inscrever, você declara que aceita os nossos
      <NuxtLink to="#">termos e condições.</NuxtLink>
    </Text>
  </div>
</template>

<style lang="scss" scoped>
  .form {
    form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-bottom: 10px;
    }
  }
</style>
