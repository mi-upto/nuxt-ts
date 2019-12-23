<template>
  <div class="Top">
    <h1>hoge</h1>
    <Logo />
  </div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.Top {
  background-color: #f7f7f7;
}
</style>
