<template>
    <q-list class="text-weight-medium text-grey-7">
        <div class="column q-gutter-sm justify-center items-center bg-dark text-weight-medium text-white q-pa-md">
            <q-icon size="32px" name="o_person"/>
            <p class="text-bold text-md ">{{$page.props.auth?.user?.name}}</p>
        </div>
        <q-item clickable @click="$inertia.get(route(menu.route))" v-for="menu in menus">
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
    {id:1,icon:'o_dashboard',label:'Dashboard',route:'dashboard'},
    {id:2,icon:'o_dashboard',label:'Section',route:'section.index'},
    {id:3,icon:'o_dashboard',label:'Plans',route:'plan.index'},
    {id:4,icon:'o_dashboard',label:'Pages',route:'page.index'},
    {id:5,icon:'o_dashboard',label:'FAQ',route:'question.index'},
    {id:6,icon:'o_dashboard',label:'Testimonial',route:'testimony.index'},
])
</script>
