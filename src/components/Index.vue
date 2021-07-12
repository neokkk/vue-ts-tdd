<template>
  <table>
    <thead>
      <tr>
        <td>USD</td>
        <td>KRW</td>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <input v-model="usd" type="number">
        </td>

        <td>
          <input v-model="krw" type="number">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'Index',
  setup() {
    const usd = ref(0);
    const krw = ref(0);

    return {
      usd,
      krw,
    }
  }
}
</script>
