<template>
    <q-page class="container bg-white" padding>
        <div class="flex justify-between items-center">
            <div class="text-lg text-dark text-weight-medium">New Section</div>
        </div>
        <br/>
        <q-form @submit="handleSubmit" class="column q-gutter-sm">
            <q-input v-model="form.name"
                     outlined
                     label="Name"
                     :rules="[
                         val=>!!val || 'Name is required'
                     ]"
            />
            <q-input v-model="form.order"
                     type="number"
                     outlined
                     label="Order"
                     :rules="[
                         val=>!!val || 'Order is required'
                     ]"
            />
            <q-editor v-model="editor" min-height="5rem" />

            <div class="flex q-gutter-sm">
                <q-btn type="submit" color="primary" class="sized-btn"/>
                <q-btn type="reset" color="negative" outline class="sized-btn"/>
            </div>
        </q-form>
    </q-page>
</template>
<script setup>
import BackendLayout from "@/Layouts/BackendLayout.vue";
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";

defineOptions({
    layout:BackendLayout
})

const editor = ref(null);
const form=useForm({
    name:'',
    order:1,
    content:''
})

const handleSubmit=e=>{

}
</script>
