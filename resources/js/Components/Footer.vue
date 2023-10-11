<template>
    <div class="flex justify-between footer-card container">

        <div class="column">
            <a :href="route('page.privacy')" class="footer-link">Privacy</a>
            <a :href="route('page.term')" class="footer-link">Terms and Condition</a>
            <a :href="route('page.refund')" class="footer-link">Refund Policy</a>
            <a :href="route('page.about')" class="footer-link">About us</a>
        </div>
        <div class="flex bg-white q-gutter-sm">
            <q-icon name="facebook"/>
        </div>
        <div class="text-dark text-weight-medium">
            <address>Venglai</address>
            <address>Champhai </address>
            <address>Mizoram </address>
            <address>796001 </address>
        </div>
    </div>
</template>

<script>
import Facebook from "@/Components/Facebook.vue";
import Instagram from "@/Components/Instagram.vue";

</script>
<style scoped>
.footer-card{
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: #f5f5f5;
}
.footer-link{
    text-decoration: none;
    color: #444444;
    font-weight: 600;
}
</style>
