<template>
  <main>
    <section class="register">
      <div class="container">
        <RegisterContent />
        <RegisterForm />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  .register {
    padding: 100px 0 140px 0;

    @include tablet {
      padding: 80px 0 120px 0;
    }

    .container {
      display: flex;
      gap: 140px;

      .content,
      .form {
        width: 50%;
      }

      @include tablet {
        gap: 80px;
      }

      @include mobile {
        flex-direction: column;
        gap: 40px;

        .content,
        .form {
          width: 100%;
        }
      }
    }
  }
</style>
