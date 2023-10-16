<template>
    <div class="my-footer">
        <div class="flex justify-between footer-card container text-lg">

            <div class="text-white text-bold text-xl">
                Follow us on
            </div>
            <div class="flex items-center q-gutter-md">
                <a :href="route('page.privacy')" class="footer-link">
                    <img src="/assets/Icon/facebook.svg"/>
                </a>
                <a :href="route('page.term')" class="footer-link">
                    <img src="/assets/Icon/instagram.svg"/>
                </a>
                <a :href="route('page.refund')" class="footer-link">
                    <img class="text-primary" src="/assets/Icon/twitter.svg"/>

                </a>
            </div>
        </div>
        <q-separator/>
        <div class="flex justify-between footer-card container text-lg text-grey-7">

            <div class=" text-weight-medium footer-link">
                © 2023 dhiinternet. All rights reserved.
            </div>
            <div class="flex q-gutter-md">
                <a :href="route('page.privacy')" class="footer-link">Privacy</a>
                <a :href="route('page.term')" class="footer-link">Terms and Condition</a>
                <a :href="route('page.refund')" class="footer-link">Refund Policy</a>
                <a :href="route('page.about')" class="footer-link">About us</a>
            </div>
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
}
.footer-link{
    text-decoration: none;
    color: #959da5;
    font-weight: 600;
}
.my-footer{
    background-color: #161b22;
}
</style>
