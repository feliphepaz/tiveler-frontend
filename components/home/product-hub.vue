<template>
  <section class="product-hub-layout" id="produto">
    <div class="container">
      <ul class="benefits">
        <li v-for="(benefit, index) in benefits" :key="index">
          <div class="benefit-head">
            <div class="icon">
              <img :src="benefit.icon.src" :alt="benefit.icon.alt" />
            </div>
            <Text as="h3" type="subtitle" variation="highlight" color="black">
              {{ benefit.title }}
            </Text>
          </div>
          <Text type="text" color="black">
            {{ benefit.description }}
          </Text>
        </li>
      </ul>
      <div class="picture">
        <div>
          <img :src="personNotebook" alt="Pessoa utilizando o notebook" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import student from '@/assets/icons/student.svg'
  import notebook from '@/assets/icons/notebook.svg'
  import blackboard from '@/assets/icons/blackboard.svg'
  import calculator from '@/assets/icons/calculator.svg'
  import personNotebook from '@/assets/pictures/person-notebook.jpg'

  const benefits = [
    {
      title: 'Acompanhe o progresso de seus alunos',
      description:
        'Com a nossa ferramenta, você pode acompanhar todo o desenvolvimento do seu aluno.',
      icon: {
        src: student,
        alt: 'Ícone de estudante',
      },
    },
    {
      title: 'Obtenha o relatório de cada aula',
      description:
        'Te damos a facilidade de visualizar todas as informações das aulas passadas.',
      icon: {
        src: notebook,
        alt: 'Ícone de caderno',
      },
    },
    {
      title: 'Saiba quais conteúdos já foram passados',
      description:
        'Cansado de esquecer quais conteúdos já foram passados? Aqui, você não perde nada!',
      icon: {
        src: blackboard,
        alt: 'Ícone de lousa',
      },
    },
    {
      title: 'Descubra de forma fácil quanto você já lucrou!',
      description:
        'Através da nossa plataforma, você tem acesso aos dados de suas receitas e movimentações.',
      icon: {
        src: calculator,
        alt: 'Ícone de calculadora',
      },
    },
  ]
</script>

<style lang="scss" scoped>
  .product-hub-layout {
    .container {
      display: flex;
      justify-content: space-between;
      gap: 140px;

      .benefits {
        display: flex;
        flex-direction: column;
        gap: 80px;
        width: 40%;

        li {
          display: flex;
          flex-direction: column;
          gap: 10px;

          &:hover {
            .benefit-head .icon {
              background: $color-black-20;
            }
          }

          .benefit-head {
            display: flex;
            align-items: center;
            gap: 20px;

            .icon {
              display: flex;
              flex: none;
              align-items: center;
              justify-content: center;
              width: 94px;
              height: 94px;
              padding: 20px;
              background: $color-gray;
              transition: $transition-default;
            }
          }
        }
      }

      .picture {
        width: 60%;
      }
    }

    @include tablet {
      .container {
        gap: 100px;
      }
    }

    @include mobile {
      .container {
        flex-direction: column;
        gap: 80px;

        .benefits {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          width: 100%;

          li .benefit-head .icon {
            width: 84px;
            height: 84px;
          }
        }

        .picture {
          display: none;
        }
      }
    }
  }
</style>
