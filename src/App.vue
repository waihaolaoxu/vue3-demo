<template>
    <div>
        <router-link to="/">首页</router-link>
        ｜
        <router-link to="/about">about</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>
