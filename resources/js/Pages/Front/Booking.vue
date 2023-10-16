<template>
    <q-page>
        <div class="row">
            <div class="col-xs-12 col-sm-7">
                <div class="left bg-dark">
                    <img src="assets/Icon/logo.svg">
                </div>
            </div>
            <div class="col-xs-12 col-sm-5 bg-grey-2">
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
                             mask="##########"
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
                        <q-btn size="lg" type="submit" class="sized-btn" color="primary" label="Submit" no-caps/>
                    </div>
                </q-form>
            </div>
        </div>
    </q-page>
</template>
<script setup>
import BackendLayout from '@/Layouts/BackendLayout.vue';
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
    .post(route('booking.booking'),{
        preserveState: false,
        onStart:params =>q.loading.show(),
        onFinish:params => q.loading.hide()
    })
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
@media (max-width: 599px) {

    .left{
        height: 45vh;
    }
}
</style>
