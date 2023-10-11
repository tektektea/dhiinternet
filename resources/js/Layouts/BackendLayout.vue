<template>
    <q-layout view="lhh LpR fff">
        <q-header class="text-white ">
            <q-toolbar class="brand-header text-dark flex justify-center">
                <div class="flex justify-between items-center container full-width">
                    <div class="flex q-gutter-sm">
                        <q-btn  v-if="!!currentUser" icon="menu" flat @click="toggleLeftDrawer"/>
                        <div @click="$inertia.visit(route('page.home'))" class="text-lg  text-bold">DHIINTERNET</div>
                    </div>
                    <div v-if="$q.screen.gt.sm" class="flex q-gutter-sm text-md">
                        <q-item clickable>
                            <q-item-section>
                                <q-item-label>Plans</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable>
                            <q-item-section>
                                <q-item-label>Our Team</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item :href="route('page.contact')" clickable>
                            <q-item-section>
                                <q-item-label>Contact Us</q-item-label>
                            </q-item-section>
                        </q-item>
                    </div>
                    <div class="flex q-gutter-sm">
                        <q-btn-dropdown class="text-bold" v-if="!!currentUser" :label="'Hello, '+currentUser?.name">
                            <q-list>
                                <q-item clickable><q-item-section>Profile</q-item-section></q-item>
                                <q-item clickable><q-item-section>Change password</q-item-section></q-item>
                                <q-item clickable @click="$inertia.delete(route('login.destroy'))"><q-item-section>Logout</q-item-section></q-item>
                            </q-list>
                        </q-btn-dropdown>
                        <q-btn v-else class="sized-btn"  @click="$inertia.get(route('login'))"  outline rounded color="primary" label="Login" no-caps/>

                    </div>
                </div>

            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
            <SideNav/>
        </q-drawer>

        <q-page-container>
            <slot/>
        </q-page-container>

        <q-footer class="bg-grey-2">
           <Footer/>
        </q-footer>

    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import {useQuasar} from "quasar";
import {computed,watch} from "vue";
import {usePage} from "@inertiajs/vue3";
import Footer from "@/Components/Footer.vue";
import SideNav from "@/Components/SideNav.vue";

const q = useQuasar();
const leftDrawerOpen = ref(true)

const notification=computed(()=>usePage().props.flash_notification)

function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

const currentUser=computed(()=>{
    return usePage().props.auth?.user;
})

watch(notification,(newVal,oldVal)=>{
    if (newVal) {
        const {type, message} = newVal;
        q.notify({type,message,closeBtn:true,classes:'accent'})
    }
    console.log('test')

},{immediate:true})

</script>
<style scoped>
.brand-header{
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
    height: 70px;
}
</style>
