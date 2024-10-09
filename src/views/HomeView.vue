<script setup>
import { onMounted, ref } from 'vue';
import userServices from '@/services/userServices';
import User from '@/components/User.vue';

const users = ref([]);

onMounted(async () => {
    try {
        const { data } = await userServices.getAllUsers();
        users.value = data;
    } catch (error) {
        console.log(error);
    }
})

const userDeleteDb = async(id) => {
    try {
        await userServices.deleteUser(id)
        users.value = users.value.filter(e => e.id !== id)
    } catch (error) {
        console.log(error);
    }
}

</script>

<template>
    <h2 class="text-center text-2xl mb-10">Clientes</h2>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 border-b border-gray-300">
                    Nombre Cliente	
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 border-b border-gray-300">
                    Email
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 border-b border-gray-300">
                    Teléfono	
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 border-b border-gray-300">
                    Empresa
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 border-b border-gray-300">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            <User 
                v-for="user in users" 
                :key="user.id" 
                :user="user" 
                @user-delete-db="userDeleteDb"
            />
        </tbody>
    </table>
</div>

</template>
