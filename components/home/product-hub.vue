<template>
  <section class="product-hub-layout" id="produto">
    <div class="container">
      <ul class="benefits">
        <li>
          <div class="benefit-head">
            <div class="icon">
              <img :src="student" alt="Ícone de estudante" />
            </div>
            <Text as="h3" type="subtitle" variation="highlight" color="black">
              Acompanhe o progresso de seus alunos
            </Text>
          </div>
          <Text type="current-text" color="black">
            Com a nossa ferramenta, você pode acompanhar todo o desenvolvimento
            do seu aluno.
          </Text>
        </li>
        <li>
          <div class="benefit-head">
            <div class="icon">
              <img :src="notebook" alt="Ícone de caderno" />
            </div>
            <Text as="h3" type="subtitle" variation="highlight" color="black">
              Obtenha o relatório de cada aula ou sessão
            </Text>
          </div>
          <Text type="current-text" color="black">
            Te damos a facilidade de visualizar todas as informações das aulas
            ou sessões passadas.
          </Text>
        </li>
        <li>
          <div class="benefit-head">
            <div class="icon">
              <img :src="blackboard" alt="Ícone de lousa" />
            </div>
            <Text as="h3" type="subtitle" variation="highlight" color="black">
              Saiba quais conteúdos já foram passados
            </Text>
          </div>
          <Text type="current-text" color="black">
            Cansado de esquecer quais conteúdos já foram passados? Aqui, você
            não perde nada!
          </Text>
        </li>
        <li>
          <div class="benefit-head">
            <div class="icon">
              <img :src="calculator" alt="Ícone de calculadora" />
            </div>
            <Text as="h3" type="subtitle" variation="highlight" color="black">
              Descubra de forma fácil quanto você já lucrou!
            </Text>
          </div>
          <Text type="current-text" color="black">
            Através da nossa plataforma, você tem acesso aos dados de suas
            receitas e movimentações.
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
  import blackboard from '@/assets/icons/blackboard.svg'
  import calculator from '@/assets/icons/calculator.svg'
  import notebook from '@/assets/icons/notebook.svg'
  import personNotebook from '@/assets/pictures/person-notebook.jpg'
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
              background: var(--color-black-20);
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
              background: var(--color-gray);
              transition: var(--transition-default);
            }
          }
        }
      }

      .picture {
        width: 60%;
      }
    }

    @media (max-width: 1024px) {
      .container {
        gap: 100px;
      }
    }

    @media (max-width: 768px) {
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
