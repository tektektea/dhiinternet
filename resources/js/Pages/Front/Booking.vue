<template>
    <q-page>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <div class="left bg-accent">
                    <q-img />
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-form @submit="submit" class="column q-gutter-sm right">
                    <div class="text-xl text-secondary text-weight-bolder q-mb-lg"><span class="text-primary">Lets</span> Start Booking</div>
                    <q-input v-model="form.name"
                             outlined
                             bg-color="grey-4"
                             label="Your Name"
                             no-error-icon
                             :rules="[
                                 val=>!!val || 'Name is required'
                             ]"/>
                    <q-select v-model="form.plan"
                              :options="plans"
                             outlined
                             bg-color="grey-4"
                             label="Select Your Plan"
                             no-error-icon
                             :rules="[
                                 val=>!!val || 'Plan is required'
                             ]"/>
                    <q-input v-model="form.mobile"
                             outlined
                             bg-color="grey-4"
                             label="Mobile"
                             no-error-icon
                             :rules="[
                                 val=>!!val || 'Mobile is required'
                             ]"/>
                    <q-input v-model="form.email"
                             outlined
                             bg-color="grey-4"
                             label="Email"
                             no-error-icon
                             :rules="[
                                 val=>!!val || 'Email is required'
                             ]"/>
                    <q-input v-model="form.note"
                             type="textarea"
                             outlined
                             bg-color="grey-4"
                             label="Anything you like to tell us"
                             no-error-icon
                             />
                    <div class="flex q-gutter-sm q-mt-md">
                        <q-btn type="submit" class="sized-btn" color="primary" label="Submit" no-caps/>
                    </div>
                </q-form>
            </div>
        </div>
    </q-page>
</template>
<script setup>
import BackendLayout from '@/Layouts/BackendLayout.vue';
import {useForm} from "@inertiajs/vue3";
defineOptions({
    layout:BackendLayout
})
const props=defineProps(['plans'])

const form = useForm({
    name:'',
    address:'',
    plan:null,
    mobile:'',
    email:'',
    note:''
});

const submit=e=>{

}
</script>
<style scoped>
.left{
    height: 100vh;
}
.right{
   padding: 32px;
    max-width: 450px;
}
</style>
