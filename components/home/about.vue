<template>
  <section class="about-layout">
    <div class="container">
      <div class="about-photo">
        <div>
          <img
            :src="office"
            alt="Pessoas trabalhando no escritório"
          />
        </div>
      </div>

      <div class="about-content">
        <Text as="h2" type="subtitle" variation="highlight" color="black">
          Quem somos?
        </Text>
        <Text as="p" type="current-text" color="black">
          Nascido em São Paulo, no berço das startups, a Tiveler vem com o
          propósito de ser o software mais utilizado no dia a dia por
          trabalhadores autônomos, facilitando a gestão, principalmente de
          pacientes e alunos.
          <br />
          <br />
          Esqueça agora mesmo planilhas e cadernos! Com a gente, você pode ter
          todo o controle de suas aulas, temas discutidos em sessões e até
          pagamentos de forma organizada e digital. Ah, e claro, tudo isso
          feito com muito ❤️
        </Text>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import office from '@/assets/pictures/office.jpg'
</script>

<style lang="scss" scoped>
  .about-layout {
    margin: 180px 0 160px 0;
    background: var(--color-gray);

    .container {
      display: flex;
      align-items: center;
      gap: 140px;

      .about-photo {
        width: 50%;
      }

      .about-content {
        width: 50%;
        padding: 90px 0 120px 0;

        :deep(h2) {
          margin-bottom: 40px;
        }
      }
    }

    @media (max-width: 1024px) {
      margin: 160px 0 140px 0;

      .container {
        gap: 100px;
      }
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
        gap: 0px;

        .about-photo,
        .about-content {
          width: 100%;
        }

        .about-content {
          padding: 60px 0;
        }
      }
    }
  }
</style>
