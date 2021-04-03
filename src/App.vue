<template>
    <div>
        <router-link to="/">首页</router-link>
        ｜
        <router-link to="/count_vue2">count_vue2</router-link>
        ｜
        <router-link to="/count_vue3">count_vue3</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>
