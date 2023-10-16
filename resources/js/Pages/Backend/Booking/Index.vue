<template>
    <q-page class="container" padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el @click="$inertia.get(route('dashboard'))" label="Dashboard" />
            <q-breadcrumbs-el label="Bookings" />
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center q-pa-md bg-white">
            <div>
                <div class="text-lg text-bold">Bookings</div>
            </div>
            <q-btn-dropdown outline color="secondary" dropdown-icon="sort" :label="state.filter?.selected">
                <q-list>
                    <q-item clickable @click="handleFilter('Confirmed')">
                        <q-item-section><q-item-label>Confirmed</q-item-label></q-item-section>
                    </q-item>
                    <q-item clickable @click="handleFilter('Unconfirmed')">
                        <q-item-section><q-item-label>Unconfirmed</q-item-label></q-item-section>
                    </q-item>
                    <q-item clickable @click="handleFilter('Both')">
                        <q-item-section><q-item-label>Both</q-item-label></q-item-section>
                    </q-item>
                </q-list>
            </q-btn-dropdown>

        </div>
        <br/>
        <div class="column q-pa-md  bg-white">
            <div @click="e=>openBooking(item)" v-for="(item,index) in list.data" :key="index">
                <div class="flex justify-between items-center q-mt-sm cursor-pointer">
                    <div>
                        <div class="text-bold">{{item?.name}}</div>
                        <div class="text-weight-medium text-grey-7">{{item?.mobile}} | {{item?.email}}</div>
                    </div>

                    <div class="flex  q-gutter-sm">
                        <q-btn size="sm" @click="$inertia.get(route('booking.edit',item.id))" outline color="secondary" icon="o_edit"/>
                        <q-btn size="sm" @click.stop="handleDelete(item)" color="negative" outline icon="o_delete"/>
                    </div>
                </div>

                <q-separator />
            </div>
            <q-pagination
                class="q-mt-md"
                v-model="state.pagination.current"
                @update:model-value="paginate"
                :max="state.pagination.total"
                :max-pages="6"
                boundary-numbers
            />
        </div>
        <q-dialog v-model="state.open">
            <q-card style="width: 450px">
                <div class="flex justify-between items-center q-pa-md">
                    <div class="text-lg text-bold">Booking Detail</div>
                    <q-btn size="sm" outline round icon="close" v-close-popup/>
                </div>
                <br/>
                <div class="q-pa-md">
                    <div class="flex justify-between items-center">
                        <div class="text-grey-7 text-weight-medium">Name</div>
                        <div class="text-dark text-bold">{{state.selected?.name}}</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-grey-7 text-weight-medium">Mobile</div>
                        <div class="text-dark text-bold">{{state.selected?.mobile}}</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-grey-7 text-weight-medium">Email</div>
                        <div class="text-dark text-bold">{{state.selected?.email}}</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-grey-7 text-weight-medium">Address</div>
                        <div class="text-dark text-bold">{{state.selected?.address}}</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-grey-7 text-weight-medium">Note</div>
                        <div class="text-dark text-bold">{{state.selected?.note}}</div>
                    </div>
                    <div class="flex items-center q-gutter-md q-mt-md">
                        <q-btn :href="'tel:'+state.selected.mobile" target="_blank" class="sized-btn" icon="phone" color="primary" label="Call Now" no-caps/>
                        <q-btn class="sized-btn" color="negative" v-close-popup label="Close" no-caps/>
                    </div>
                </div>
            </q-card>
        </q-dialog>

    </q-page>
</template>
<script setup>
import BackendLayout from "@/Layouts/BackendLayout.vue";
import {useQuasar} from "quasar";
import {router} from "@inertiajs/vue3";
import useUtils from "@/Compositions/useUtils";
import {reactive, watch} from "vue";

defineOptions({
    layout:BackendLayout
})
const props = defineProps(['list','filter']);
const q = useQuasar();
const {formatDate} = useUtils();
const state=reactive({
    selected:null,
    open:false,
    filter:{
        selected:props.filter||'Both',
        options:['Confirmed','Unconfirmed','Both']
    },
    pagination:{
        current:props.list?.current_page || 1,
        total: Math.ceil(props.list?.total/15) || 0
    }
})

const handleFilter=val=>{
    router.get(route('booking.index'),{
        page:state.pagination.current,
        filter:val
    })
}

const openBooking=val=>{
    state.selected = val;
    state.open=true
}
const handleDelete=val=>{
    q.dialog(({
        title:'Confirmation',
        message:'Are you sure to delete?',
        ok:'Yes',
        cancel:'No'
    }))
    .onOk(()=>{
        router.delete(route('booking.destroy',val.id),{
            onStart:params => q.loading.show(),
            onFinish:params => q.loading.hide()
        })
    })
}
const paginate=page=>{
    router.get(route('booking.index'),{
        'page':page
    })
}
</script>
<style scoped>

.section-card{

}

</style>
