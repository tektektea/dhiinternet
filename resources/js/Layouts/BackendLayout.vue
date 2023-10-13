<template>
    <q-layout view="hHh LpR fff">
        <q-header elevated class="bg-dark ">
            <q-toolbar  class="flex justify-center myheader">
                <div class="flex justify-between items-center container full-width">
                    <div class="flex q-gutter-sm">
                        <q-btn  v-if="!!currentUser" icon="menu" flat @click="toggleLeftDrawer"/>
                        <div @click="$inertia.visit(route('page.home'))" class="text-lg  text-weight-bolder cursor-pointer"><span class="text-primary">DHI</span>INTERNET</div>
                    </div>
<!--                    <div v-if="$q.screen.gt.sm" class="flex q-gutter-sm text-md bg-dark">-->
<!--                        <q-item clickable>-->
<!--                            <q-item-section>-->
<!--                                <q-item-label>Plans</q-item-label>-->
<!--                            </q-item-section>-->
<!--                        </q-item>-->
<!--                        <q-item clickable>-->
<!--                            <q-item-section>-->
<!--                                <q-item-label>Our Team</q-item-label>-->
<!--                            </q-item-section>-->
<!--                        </q-item>-->
<!--                        <q-item :href="route('page.contact')" clickable>-->
<!--                            <q-item-section>-->
<!--                                <q-item-label>Contact Us</q-item-label>-->
<!--                            </q-item-section>-->
<!--                        </q-item>-->
<!--                    </div>-->
                    <div class="flex q-gutter-sm">
                        <q-btn-dropdown class="text-bold" v-if="!!currentUser" :label="'Hello, '+currentUser?.name">
                            <q-list>
                                <q-item clickable><q-item-section>Profile</q-item-section></q-item>
                                <q-item clickable><q-item-section>Change password</q-item-section></q-item>
                                <q-item clickable @click="$inertia.delete(route('login.destroy'))"><q-item-section>Logout</q-item-section></q-item>
                            </q-list>
                        </q-btn-dropdown>
                        <q-btn v-else class="sized-btn"  @click="$inertia.get(route('login'))"  outline rounded color="white" label="Login" no-caps/>

                    </div>
                </div>

            </q-toolbar>
        </q-header>

        <q-drawer dark v-if="!!$page.props.auth?.user" v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
            <SideNav/>
        </q-drawer>

        <q-page-container :class="!!$page.props.auth?.user ? 'bg-grey-2':'bg-dark'">
            <slot/>
        </q-page-container>

        <q-footer class="bg-dark">
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
const leftDrawerOpen = ref(false)

const notification=computed(()=>usePage().props?.flash)

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
    height: 70px;
}
.myheader{
    height: 70px;
}
</style>
