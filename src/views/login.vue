<template>
    <div class="login">
        <el-select v-model="value"
            placeholder="Select Username">
            <el-option
                v-for="user in userModel.all"
                :key="user.id"
                :label="user.name"
                :value="user.id">
            </el-option>
        </el-select>

        <el-button @click="login">LOGIN</el-button>
    </div>
</template>

<script>
import userModel from '../models/user';
import {
    ElSelect,
    ElOption,
    ElButton
} from 'element-plus';

export default {
    name: 'login',
    components: {
        'el-select': ElSelect,
        'el-option': ElOption,
        'el-button': ElButton
    },
    data() {
        return {
            userModel,
            value: undefined
        };
    },
    async beforeMount() {
        await this.userModel.loadData();
    },
    methods: {
        login() {
            this.userModel.current =
                this.userModel.find((x) => x.id === this.value);
        }
    }
}
</script>

<style scoped lang="scss">
</style>
