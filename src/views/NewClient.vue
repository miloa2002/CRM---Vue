<script setup>
import userServices from '@/services/userServices';
import { FormKit } from '@formkit/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleSubmit = async (data) => {
    try {
        await userServices.addUser(data);
        router.push({name: 'home'});
    } catch (error) {
        console.log(error);
    }
}

</script>

<template>
    <div>
        <h2 class="text-center text-2xl mb-10">Nuevo cliente</h2>

        <div class="mx-auto mt-10 bg-white shadow w-full md:w-1/2">
            <div class="mx-auto py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Agregar cliente"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                >

                <FormKit
                    type="text"
                    name="name" 
                    id="name"
                    label="Nombre del cliente"
                    placeholder="Nombre"
                    validation="required"
                    :validation-messages="{required: 'El nombre del cliente es obligatorio'}"
                />

                <FormKit
                    type="email"
                    name="email" 
                    id="email"
                    label="Email del cliente"
                    placeholder="Email"
                    validation="required|email"
                    :validation-messages="{ required: 'El email del cliente es obligatorio', email: 'Coloca un email válido' }"
                />

                <FormKit
                    type="text"
                    name="phone" 
                    id="phone"
                    label="Teléfono del cliente"
                    placeholder="Teléfono"
                    validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{ matches: 'El formato no es válido' }"
                />

                <FormKit
                    type="text"
                    name="bussines" 
                    id="bussines"
                    label="Empresa del cliente"
                    placeholder="Empresa"
                    validation="required"
                    :validation-messages="{required: 'La empresa del cliente es obligatorio'}"
                />

                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
.formkit-wrapper {
    max-width: 100%;
}
.formkit-input[type="submit"] {
    background-color: #0D9488;
    width: 100%;
}
</style>