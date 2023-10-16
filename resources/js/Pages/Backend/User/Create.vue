<template>
    <q-page class="container " padding>
        <q-breadcrumbs gutter="md">
            <q-breadcrumbs-el label="Dashboard" />
            <q-breadcrumbs-el @click="$inertia.get(route('user.index'))" label="User Accounts" />
            <q-breadcrumbs-el @click="$inertia.get(route('user.create'))" label="New User" />
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center bg-white q-pa-md">
            <div class="text-lg text-dark text-weight-medium">New User</div>
        </div>
        <br/>
        <q-form  @submit="submit" class="column  q-pa-md bg-white">
            <div style="max-width: 450px">
                <q-input v-model="form.name"
                         outlined
                         bg-color="grey-4"
                         label=" Name"
                         no-error-icon
                         :rules="[
                                 val=>!!val || 'Name is required'
                             ]"/>
                <q-select v-model="form.role"
                          :options="roles"
                          outlined
                          bg-color="grey-4"
                          label="Select  Role"
                          no-error-icon
                          :rules="[
                                 val=>!!val || 'Role is required'
                             ]"/>
                <q-input v-model="form.mobile"
                         outlined
                         bg-color="grey-4"
                         mask="##########"
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

                <q-input v-model="form.password"
                         :type="type"
                         outlined
                         bg-color="grey-4"
                         label="Password"
                         no-error-icon
                         :rules="[
                         val=>!!val || 'Password is required'
                     ]"
                >
                    <template #append>
                        <q-btn @click="type='password'" v-if="type==='text'"  round icon="visibility"/>
                        <q-btn @click="type='text'" v-else  round icon="visibility_off"/>
                    </template>
                </q-input>
                <q-input v-model="form.password_confirmation"
                         :type="type"
                         outlined
                         bg-color="grey-4"
                         label="Confirm Password"
                         no-error-icon
                         :rules="[
                         val=>!!val || 'Password Confirmation is required',
                         val=>val===form.password || 'Confirm Password does not match password'
                      ]"
                />
                <div class="flex q-gutter-sm q-mt-md">
                    <q-btn type="submit" class="sized-btn" color="primary" label="Save" no-caps/>
                    <q-btn @click="$inertia.get(route('user.index'))" class="sized-btn" color="negative" outline label="Cancel" no-caps/>
                </div>
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
const props=defineProps(['roles'])
const q = useQuasar();
const type=ref('password')
const form = useForm({
    name:'',
    role:null,
    mobile:'',
    email:'',
    password:'',
    password_confirmation:''
});

const submit=e=>{
    form.post(route('user.store'),{
            onStart:params =>q.loading.show(),
            onFinish:params => q.loading.hide()
        })
}


</script>
