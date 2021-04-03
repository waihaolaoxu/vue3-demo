<template>
    <div class="homePage">
        <p>第 {{ year }} 年</p>
        <p>姓名：{{ nickname }}</p>
        <p>年龄：{{ age }}</p>
        <p>vuex：{{ vuex }}</p>
    </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
    setup() {
        const store = useStore();
        const year = ref(0);
        const user = reactive({ 
            nickname: "xiaofan", 
            age: 26, 
            gender: "女" 
        });
        setInterval(() => {
            year.value++;
            user.age++;
        }, 1000);
        return {
            year,
            vuex: computed(() => store.state.count),
            // 使用reRefs
            ...toRefs(user),
        };
    },
});
</script>

