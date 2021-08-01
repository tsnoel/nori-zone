<template>
    <div class="nav-header">
        <span class="logo-container">
            <!--v-icon class="logo-icon" scale=2 name="la-cat-solid" /-->
            <nori-icon class="logo-icon"/>
            <span class="logo-text">ori</span>
        </span>
        <div v-if="userModel.current.id" class="name-container">
            <span class="name">{{userModel.current.name}}</span>
            <img v-if="userModel.current.avatar" class="avatar-small"
                :src="`https://cdn.discordapp.com/avatars/${userModel.current.id}/${userModel.current.avatar}.png`"/>
            <span v-else class="no-avatar-small">{{userModel.current.name[0]}}</span>
        </div>
        <el-button v-else
            class="login-btn"
            type="primary"
            size="small"
            @click="loginVisible = true"
            round>
            Login
        </el-button>

        <el-dialog
            title="Login"
            v-model="loginVisible"
            width="50%"
            :show-close="false"
            center>
            <el-select v-model="userId"
                placeholder="Select Username">
                <el-option
                    v-for="user in userModel.all"
                    :key="user.id"
                    :label="user.name"
                    :value="user.id">
                </el-option>
            </el-select>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="loginVisible = false">
                        Cancel</el-button>
                    <el-button type="primary"
                        @click="login">
                        Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import NoriIcon from '../assets/nori';
import userModel from '../models/user';
import {
    ElButton,
    ElDialog,
    ElSelect,
    ElOption
} from 'element-plus';

export default {
    name: 'nav-header',
    components: {
        'el-select': ElSelect,
        'el-option': ElOption,
        'el-button': ElButton,
        'el-dialog': ElDialog,
        'nori-icon': NoriIcon
    },
    data() {
        return {
            userModel,
            loginVisible: false,
            userId: ''
        };
    },
    async beforeMount() {
        await this.userModel.loadData();
    },
    methods: {
        login() {
            this.userModel.current =
                this.userModel.all.find((x) => x.id === this.userId);
            this.loginVisible = false;
        }
    }
}
</script>

<style lang="scss">
.el-dialog {
    background-color: $base-color !important;
    border-radius: 1rem !important;

    .el-dialog__header {
        background-color: rgba($primary, 0.25) !important;
        border-radius: 1rem 1rem 0 0;
        padding: 0.5rem;

        .el-dialog__title {
            color: $primary-text !important;
        }
    }

    .el-dialog__body {
        text-align: center !important;
    }
}

.nav-header {
    background-color: rgba($primary, 0.25);
    // border-radius: 0 0 0.2rem 0.2rem;
    // box-shadow: 0 0 0.25rem 0 rgba($primary, 0.4);
    display: flex;
    flex-direction: row;
    height: 4rem;
    justify-content: space-between;

    .name-container {
        color: $primary-text;
        display: flex;
        flex-direction: row;

        .avatar-small {
            border-radius: 0.5rem;
            height: 2rem;
            width: 2rem;
            margin: 1rem;
        }

        .name {
            font-size: 1rem;
            margin: 1.25rem 0;
        }

        .no-avatar-small {
            color: $primary-text;
            background-color: $primary;
            margin-left: 1rem;
            border-radius: 0.5rem;
            height: 2rem;
            font-size: 1.75rem;
            text-align: center;
            width: 2rem;
            margin: 1rem 0.5rem;
            line-height: 1.75rem;
        }
    }

    .login-btn {
        color: $secondary-text;
        height: 1rem;
        margin: 1rem;
    }

    .logo-container {
        color: $primary-light;
        display: flex;
        flex-direction: row;
        transform: scale(1.25);

        .logo-icon {
            fill: $primary-light;
            height: 2.75rem;
            margin: 0.55rem -0.55rem 0 1rem;
            width: 2.75rem;
        }

        i {
            font-size: 2rem;
            color: $base-color;
            position: relative;
            top: 1.05rem;
            left: -3.25rem;
        }

        .logo-text {
            font-size: 2rem;
            // left: -2.5rem;
            margin-top: 0.5rem;
            // position: relative;
        }

        .logo-alt {
            background-color: $secondary;
            border-radius: 0.25rem;
            height: 0.4rem;
            left: -1.4rem;
            position: relative;
            top: 1.4rem;
            width: 0.75rem;
        }

        .logo {
            background-color: $primary-light;
            border-radius: 1.25rem;
            height: 2.5rem;
            margin: 0.75rem 0.2rem 0.75rem 0.75rem;
            width: 2.5rem;
        }
    }
}
</style>
