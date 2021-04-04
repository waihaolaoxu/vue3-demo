<template>
    <div>
        <p>count: {{ count }}</p>
        <p>倍数： {{ multiple }}</p>
        <div>
            <button style="margin-right: 10px" @click="increase">加一</button>
            <button @click="decrease">减一</button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return { count: 0 };
    },
    computed: {
        multiple() {
            return 2 * this.count;
        },
    },
    methods: {
        increase() {
            this.count++;
        },
        decrease() {
            this.count--;
        },
    },
});
</script>