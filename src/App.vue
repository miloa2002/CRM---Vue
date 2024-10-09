<script setup>
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <div class="md:flex h-screen">
    <div class="bg-teal-600 w-full md:w-1/6 p-4 space-y-9">
      <h1 class="text-white font-bold text-2xl">CRM - JSONSERVER</h1>
      <p class="text-white">Administra tus Clientes con el CRM</p>

      <nav class="flex flex-col gap-4 text-white">
        <RouterLink
          :to="{name: 'home'}"
          class="font-semibold hover:bg-teal-700 transition-colors p-2 rounded-md"
          active-class="bg-teal-700"
        >
          Clientes
        </RouterLink>
        <RouterLink
          :to="{name: 'nuevo-cliente'}"
          class="font-semibold hover:bg-teal-700 transition-colors p-2 rounded-md"
          active-class="bg-teal-700"
        >
          Nuevo cliente
        </RouterLink>
      </nav>
    </div>
    <main class="w-full md:w-5/6 bg-gray-100 p-6">
      <RouterView />
    </main>
  </div>
</template>