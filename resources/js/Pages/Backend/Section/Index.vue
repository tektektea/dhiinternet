<template>
    <q-page class="container bg-white" padding>
        <div class="flex justify-between items-center q-pa-md">
            <div class="text-lg text-bold">Section</div>
        </div>
        <br/>
        <div class="column q-gutter-sm">
            <div v-for="item in list">
                <div class="column q-gutter-sm section-card">
                    <div class="text-lg text-weight-medium text-grey-7">
                        {{item?.name}}
                    </div>
                    <section>
                        <div v-html="item.content"/>
                    </section>
                </div>
                <div class="flex q-gutter-md">
                    <q-btn flat label="Edit"/>
                    <q-btn color="negative" flat label="Delete"/>
                </div>

            </div>

        </div>

    </q-page>
</template>
<script setup>
import BackendLayout from "@/Layouts/BackendLayout.vue";

defineOptions({
    layout:BackendLayout
})

</script>
<style scoped>

.section-card{

}

</style>
