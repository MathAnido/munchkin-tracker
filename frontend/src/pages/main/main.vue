<template>
  <q-card class="card">
    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
      <q-btn flat>Action 1</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "mainPage",
  components: {},
});
</script>

<style lang="sass" scoped>
.card
  width: 100%
  max-width: 250px
</style>
