<template>
    <q-list class="text-weight-medium text-grey-7">
        <div class="column q-gutter-sm justify-center items-center bg-warning text-weight-medium text-white ">
            <img width="120" src="/assets/Icon/logo.png"/>
            <p class="text-bold text-md  q-mt-none">Hello {{$page.props.auth?.user?.name}}</p>
        </div>
        <br/>
        <q-item class="menu-item" clickable @click="$inertia.get(route(menu.route))" v-for="menu in menus">
            <q-item-section avatar>
                <q-icon :name="menu.icon"/>
            </q-item-section>
            <q-item-section>
                <q-item-label class="text-bold ">{{menu.label}}</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>
<script setup>

import {ref} from "vue";

const menus=ref([
    {id:1,icon:'o_dashboard',label:'Dashboard',route:'dashboard.index'},
    {id:7,icon:'o_storefront',label:'Booking',route:'booking.index'},
    {id:7,icon:'o_storefront',label:'Customers',route:'booking.index'},
    {id:7,icon:'o_storefront',label:'Bill Payment',route:'booking.index'},
    {id:7,icon:'o_storefront',label:'Payment History',route:'booking.index'},
    {id:2,icon:'o_source',label:'Section',route:'section.index'},
    {id:3,icon:'o_local_offer',label:'Plans',route:'plan.index'},
    {id:4,icon:'o_description',label:'Pages',route:'page.index'},
    {id:5,icon:'o_info',label:'FAQ',route:'question.index'},
    {id:6,icon:'o_speaker_notes',label:'Testimonial',route:'testimony.index'},
    {id:7,icon:'o_storefront',label:'User Accounts',route:'user.index'},
])
</script>
<style scoped>
.menu-item{
    min-height: 10px !important;
}
</style>
