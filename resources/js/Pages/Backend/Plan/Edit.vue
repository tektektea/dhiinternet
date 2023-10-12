<template>
    <q-page class="container" padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el label="Dashboard" @click="$inertia.get(route('dashboard'))"/>
            <q-breadcrumbs-el label="Plans" @click="$inertia.get(route('plan.index'))"/>
            <q-breadcrumbs-el label="Edit" @click="$inertia.get(route('plan.edit',item.id))"/>
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center bg-white q-pa-md">
            <div class="text-lg text-dark text-weight-medium">{{ item.name }}</div>
        </div>
        <br/>
        <q-form class="column q-gutter-sm bg-white q-pa-md" @submit="handleSubmit">
            <q-input v-model="form.name"
                     :error="!!form?.errors?.name"
                     :error-message="form?.errors?.name?.toString()"
                     :rules="[
                         val=>!!val || 'Name is required'
                     ]"
                     label="Name"
                     outlined
            />
            <q-input v-model="form.fee"
                     :error="!!form?.errors?.fee"
                     :error-message="form?.errors?.fee?.toString()"
                     :rules="[
                         val=>!!val || 'Fee is required'
                     ]"
                     label="Fee"
                     outlined
                     type="number"
            />
            <q-editor
                v-model="form.card"
                :toolbar="[
                    [  {
                        label: $q.lang.editor.align,
                        icon: $q.iconSet.editor.align,
                        fixedLabel: true,
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify']
                      }
                    ],

                     ['bold', 'italic', 'underline'],
                     [{
                        label: $q.lang.editor.fontSize,
                        icon: $q.iconSet.editor.fontSize,
                        fixedLabel: true,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: [
                          'size-1',
                          'size-2',
                          'size-3',
                          'size-4',
                          'size-5',
                          'size-6',
                          'size-7'
                        ]
                      }],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                    ['undo', 'redo'],
                    ['viewsource']
                ]" min-height="5rem"/>

            <div class="flex q-gutter-sm">
                <q-btn class="sized-btn" color="primary" label="Save" type="submit"/>
                <q-btn class="sized-btn" color="negative" label="Cancel" outline type="reset"/>
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
    layout: BackendLayout
})
const props = defineProps(['item'])
const q = useQuasar();
const form = useForm({
    name: props?.item?.name,
    fee: props?.item?.fee,
    card: props?.item?.card
})

const handleSubmit = e => {
    form.put(route('plan.update', props.item.id), {
        onStart: params => q.loading.show(),
        onFinish: params => q.loading.hide()
    })
}
</script>
