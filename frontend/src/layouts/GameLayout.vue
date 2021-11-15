<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Munchkin Tracker </q-toolbar-title>
        <div>
          <span>Sala: </span>
          123121
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list>
          <q-item-label header> Ações </q-item-label>

          <Link v-for="link in linksList" :key="link.title" v-bind="link" />
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Link from "components/Link.vue";

const linksList = [
  {
    title: "Visão geral",
    caption: "acompanhe o jogo",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Inventário",
    caption: "altere seus itens",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Combate",
    caption: "inicie um combate",
    icon: "mdi-sword-cross",
    link: "https://quasar.dev",
  },
  {
    title: "Ajuda",
    caption: "tire suas dúvidas",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Saiba mais",
    caption: "Aprenda sobre munchkin tracker",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "GameLayout",

  components: {
    Link,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      linksList: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
