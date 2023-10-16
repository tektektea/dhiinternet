<template>
    <q-page class="container bg-white" padding>
        <q-breadcrumbs gutter="md">
            <q-breadcrumbs-el label="Dashboard" />
            <q-breadcrumbs-el @click="$inertia.get(route('booking.index'))" label="Booking" />
            <q-breadcrumbs-el @click="$inertia.get(route('booking.create'))" label="New Booking" />
        </q-breadcrumbs>
        <div class="flex justify-between items-center">
            <div class="text-lg text-dark text-weight-medium">New Booking</div>
        </div>
        <br/>
        <q-form  @submit="submit" class="column q-gutter-sm right text-bold">
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
                      label="Select  Plan"
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
            <q-input v-model="form.address"
                     type="textarea"
                     outlined
                     bg-color="grey-4"
                     label="Address"
                     no-error-icon
            />
            <q-input v-model="form.note"
                     type="textarea"
                     outlined
                     bg-color="grey-4"
                     label="Anything you like to tell us"
                     no-error-icon
            />
            <div class="flex q-gutter-sm q-mt-md">
                <q-btn type="submit" class="sized-btn" color="primary" label="Save" no-caps/>
                <q-btn @click="$inertia.get(route('booking.index'))" class="sized-btn" color="primary" label="Cancel" no-caps/>
            </div>
        </q-form>
    </q-page>
</template>
<script setup>
import BackendLayout from "@/Layouts/BackendLayout.vue";
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import {useQuasar} from "quasar";

defineOptions({
    layout:BackendLayout
})
const props=defineProps(['plans'])
const q = useQuasar();
const form = useForm({
    name:'',
    address:'',
    plan:null,
    mobile:'',
    email:'',
    note:''
});

const submit=e=>{
    form.transform(data => ({plan_id:data.plan.value,...data}))
        .post(route('booking.create'),{
            onStart:params =>q.loading.show(),
            onFinish:params => q.loading.hide()
        })
}


</script>
