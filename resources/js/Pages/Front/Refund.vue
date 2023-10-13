<template>
    <Head>
        <title>Refund policy</title>
        <meta name="description" content="Please check our refund policy before you buying anything">
    </Head>
    <q-page class="container  text-accent">
        <div v-html="data.content"/>
    </q-page>
</template>
<script setup>
import {Head, useForm} from '@inertiajs/vue3';
import BackendLayout from '@/Layouts/BackendLayout.vue'

defineOptions({
    layout:BackendLayout
})
defineProps(['data']);

</script>
<style scoped>
.contact-card{
    background-color: white;
    color: #444444;
    border-radius: 16px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
}
</style>
