<template>
  <div class="container">
    <q-card class="card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn @click="this.$router.push('game')" flat>Criar Partida</q-btn>
        <q-btn @click="toggleShowDialog" flat>Juntar-se a Partida</q-btn>
      </q-card-actions>
    </q-card>
  

  <q-dialog v-model="showDialog">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">ID da Sala</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input mask="#####" hint="Exemplo ID: 12345" dense v-model="sala" autofocus
        :rules="[ () => !Number.isNaN(this.getNumeroSala) || 'Número Inválido']"/>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancelar" @click="toggleShowDialog"/>
        <q-btn color="primary" label="Entrar" @click="verificarEntrada"/>
      </q-card-actions>
    </q-card>
  </q-dialog>

</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "mainPage",
  components: {},
  data(){
    return{
      showDialog: false,
      sala:''
    }
  },
  computed:{
    getNumeroSala(){
      return parseInt(this.sala)
    }
  },
  methods: {
    verificarEntrada(){
      if(this.sala !== ''){
        if(Number.isNaN(this.getNumeroSala))
          return
        this.$router.push({ name: 'game', params: {sala:this.getNumeroSala} })
      }
    },
    toggleShowDialog(){
      this.sala=''
      this.showDialog = !this.showDialog
    }
  },
});
</script>

<style lang="sass" scoped>
.container
  display: flex
  height: 100%
  justify-content: center
  align-items: center

.card
  width: 100%
  max-width: 20vw
</style>
