<script setup>
import { RouterLink } from 'vue-router';

defineEmits(["user-delete-db"])

defineProps({
    user: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <tr class="bg-white border-b border-gray-200 hover:bg-orange-50 transition duration-300 ease-in-out">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900">
            {{ user.name }}
        </th>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900">
            {{ user.email }}
        </th>
        <td class="px-6 py-4 text-gray-700">
            {{ user.phone }}
        </td>
        <td class="px-6 py-4 text-gray-700">
            {{ user.bussines }}
        </td>
        <td class="px-6 py-4 text-gray-700">
            <RouterLink
            :to="{name: 'edita-cliente', params: {id: user.id}}"
            class="text-blue-600 hover:text-blue-900 mr-5"
        >Editar</RouterLink>

        <button
            class="text-red-600 hover:text-red-900"
            @click="$emit('user-delete-db', user.id)"
        >
            Eliminar
        </button>
        </td>
    </tr>
</template>