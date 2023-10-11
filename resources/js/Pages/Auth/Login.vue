<template>
    <q-layout class="">
        <q-page-container>
            <q-page class="login-page">
                <div class="row items-stretch">
                    <div class="col-xs-12 col-sm-6">
                        <div style="height: 100vh" class="flex items-center justify-center">
                            <InternetSvg width="70%"/>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="login-card flex items-center justify-center">
                            <q-form @submit="onSubmit" class="card-content column">
                                <div class="head-content text-center">
                                    <div class="login-title text-primary">LOGIN</div>
                                    <div class="text-sm text-bold text-grey-7">DHIINTERNET Portal</div>
                                </div>
                                <q-separator class="q-my-md"/>
                                <q-item v-if="!!form?.errors?.email" class="q-my-sm rounded-borders ">
                                    <q-item-section avatar>
                                        <q-icon color="red" name="error"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label class="text-negative text-italic">{{form.errors?.email}}</q-item-label>
                                    </q-item-section>
                                    <q-item-section side>
                                        <q-btn @click="form.errors={}" color="negative" flat icon="o_close" size="sm"/>
                                    </q-item-section>
                                </q-item>
                                <q-input v-model="form.email"
                                         label="Email/Mobile"
                                         outlined
                                         :rules="[
                                             val=>!!val ||'Email/Mobile is required'
                                         ]"
                                         class="text-grey-7 "
                                         no-error-icon
                                />
                                <q-input v-model="form.password"
                                         :type="state.type"
                                         label="Password"
                                         outlined
                                         class="text-grey-7"
                                         no-error-icon
                                         :rules="[
                                             val=>!!val || 'Password is required',

                                         ]"
                                >
                                    <template #append>
                                        <q-icon v-if="state.type==='password'" @click="state.type='text'" class="cursor-pointer" name="visibility_off"/>
                                        <q-icon v-else @click="state.type='password'" class="cursor-pointer" name="visibility"/>
                                    </template>
                                </q-input>
                                <div class="flex justify-end ">
                                    <q-btn class="q-pa-none text-grey-7" flat label="Forgot Password?" no-caps/>
                                </div>
                                <div class="flex justify-between items-stretch q-gutter-md">
                                    <q-btn type="submit" class="fit text-secondary"  label="Login" color="primary" no-caps/>
                                    <q-btn @click="$inertia.get(route('page.home'))" class="fit" label="Back to Home" outline color="negative"  no-caps/>
                                </div>

                            </q-form>
                        </div>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>
<script setup>

import {useForm} from "@inertiajs/vue3";
import {reactive} from 'vue';
import InternetSvg from "@/Components/InternetSvg.vue";
import {useQuasar} from "quasar";

const q = useQuasar();
const state=reactive({
    type:'password',
})
const form=useForm({
    email:'',
    password:''
})

const onSubmit=e=>{
    form.post(route('login.store'),{
        onStart:params => q.loading.show(),
        onFinish:params => q.loading.hide()
    })
}

</script>
<style scoped>
.login-page{
    /*background: rgb(84,15,118);*/
    /*background: linear-gradient(157deg, rgba(84,15,118,1) 0%, rgba(205,56,190,1) 15%, rgba(15,14,14,1) 49%, rgba(22,12,54,1) 100%);*/
}
.login-title{
    font-size: 32px;
    line-height: 1;
    font-weight: 600;
    font-family: 'Poppins',serif;
}
.left-side{
}
.login-card{
    width: 100%;
    height: 100vh;
}
.card-content{
    width: 50%;
}
</style>
