<template>
  <div class="content">
    <Text as="h1" type="title" color="black">
      Você está a alguns passos de dizer adeus às planilhas e cadernos!
    </Text>
    <Text type="subtitle" color="black">
      Complete seu cadastro e simplifique sua rotina para sempre. É rápido,
      fácil e
      <strong>gratuito.</strong>
    </Text>

    <ul class="list">
      <li v-for="(benefit, index) in benefits" :key="index">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5054 1.14773C7.70209 0.951043 8.02211 0.951045 8.2195 1.14843L8.85157 1.7805C9.04918 1.97811 9.04927 2.2976 8.85227 2.4946L7.65554 3.69132C7.45877 3.8881 7.52602 4.04762 7.80313 4.04762H9.49555C9.77371 4.04762 10 4.27391 10 4.55306V5.44694C10 5.7264 9.77415 5.95238 9.49555 5.95238H7.80313C7.52484 5.95238 7.4596 6.11273 7.65554 6.30867L8.85227 7.5054C9.04896 7.70209 9.04895 8.02211 8.85157 8.2195L8.2195 8.85157C8.02189 9.04918 7.7024 9.04927 7.5054 8.85227L6.30867 7.65554C6.1119 7.45877 5.95238 7.52602 5.95238 7.80313V9.49555C5.95238 9.77371 5.72609 10 5.44694 10H4.55306C4.2736 10 4.04762 9.77415 4.04762 9.49555V7.80313C4.04762 7.52484 3.88727 7.4596 3.69132 7.65554L2.4946 8.85227C2.29791 9.04896 1.97789 9.04895 1.7805 8.85157L1.14843 8.2195C0.950824 8.02189 0.950731 7.7024 1.14773 7.5054L2.34445 6.30867C2.54123 6.1119 2.47398 5.95238 2.19687 5.95238H0.50445C0.226291 5.95238 0 5.72609 0 5.44694V4.55306C0 4.2736 0.22585 4.04762 0.50445 4.04762H2.19687C2.47516 4.04762 2.5404 3.88727 2.34445 3.69132L1.14773 2.4946C0.951043 2.29791 0.951045 1.97789 1.14843 1.7805L1.7805 1.14843C1.97811 0.950824 2.2976 0.950731 2.4946 1.14773L3.69132 2.34445C3.8881 2.54123 4.04762 2.47398 4.04762 2.19687V0.50445C4.04762 0.226291 4.27391 0 4.55306 0H5.44694C5.7264 0 5.95238 0.22585 5.95238 0.50445V2.19687C5.95238 2.47516 6.11273 2.5404 6.30867 2.34445L7.5054 1.14773Z"
            fill="#F2E205"
          />
        </svg>
        <Text type="text" color="black">
          {{ benefit }}
        </Text>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const benefits = [
    'Acompanhe o progresso de seus alunos',
    'Obtenha o relatório de cada aula',
    'Saiba quais conteúdos já foram passados',
    'Descubra de forma fácil quanto você já lucrou!',
  ]
</script>

<style lang="scss" scoped>
  .content {
    .subtitle {
      margin: 30px 0 40px;
    }

    .list {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      gap: 15px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 15px;
        border-bottom: $border-list;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
</style>
