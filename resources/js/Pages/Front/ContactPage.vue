<template>
    <Head>
        <title>Contact Us</title>
        <meta name="description" content="Min lo be ta che">
    </Head>
    <q-page class="container">
        <div class="row full-height justify-center">
            <div class="col-xs-12 col-sm-6">
                <q-img class="full-height" src="assets/HugeGlobal.svg"/>
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-form class="column  contact-card q-pa-lg q-mt-xl">
                    <div class="text-lg text-center full-width">Contact Us</div>
                    <q-input v-model="form.name"
                             label="Your Name *"
                             :rules="[
                                 val=>!!val || 'Name is required'
                             ]"
                    />
                    <q-input v-model="form.contact"
                             label="Mobile No*"
                             mask="##########"
                             :rules="[
                                 val=>!!val || 'Mobile is required'
                             ]"
                    />
                    <q-input v-model="form.email"
                             label="Email *"
                             :rules="[
                                 val=>!!val || 'Email is required'
                             ]"
                    />
                    <q-input v-model="form.name"
                             type="textarea"
                             counter
                             label="Question *"
                             :rules="[
                                 val=>!!val || 'Question is required',
                                 val => val.length <200 || 'Too long'
                             ]"
                    />
                    <div class="flex q-gutter-sm">
                        <q-btn type="submit" style="min-width: 150px" color="primary" label="Submit"/>
                    </div>
                </q-form>
            </div>
        </div>
    </q-page>
</template>
<script setup>
import {Head, useForm} from '@inertiajs/vue3';
const form=useForm({
    name:'',
    contact:'',
    email:'',
    question:''
})
</script>
<style scoped>
.contact-card{
    background-color: white;
    color: #444444;
    border-radius: 16px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
}
</style>
