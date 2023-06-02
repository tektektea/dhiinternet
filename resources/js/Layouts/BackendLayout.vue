<template>
    <q-layout view="hHh LpR fff">
        <q-header class="text-dark">
            <q-toolbar class="brand-header flex justify-center">
                <div class="flex justify-between items-center container full-width">
                    <div class="flex q-gutter-sm">
                        <q-btn icon="menu" @click="toggleLeftDrawer"/>
                        <div class="text-lg">DHIINTERNET</div>
                    </div>
                    <div class="flex q-gutter-sm text-md">
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
                        <q-item clickable>
                            <q-item-section>
                                <q-item-label>Contact Us</q-item-label>
                            </q-item-section>
                        </q-item>
                    </div>
                    <div class="flex q-gutter-sm">
                        <q-btn style="min-width: 120px" outline rounded color="primary" label="Login" no-caps/>

                    </div>
                </div>

            </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <slot/>
        </q-page-container>

        <q-footer elevated class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar>
                    <div>Title</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    setup () {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer () {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
}
</script>
<style scoped>
.brand-header{
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
    height: 70px;
}
</style>
