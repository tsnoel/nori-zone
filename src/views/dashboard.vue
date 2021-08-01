<template>
    <div class="dashboard">
        DASHBOARD STUFF GOES HERE IF LOGGED IN
        <div v-if="userModel.current.id">
            <span>{{userModel.current.name}}</span>
            <img v-if="userModel.current.avatar"
                :src="`https://cdn.discordapp.com/avatars/${userModel.current.id}/${userModel.current.avatar}.png`"/>
            <span v-else>{{userModel.current.name[0]}}</span>
        </div>
        <!--component :is="MochibuxRanking"/-->
    </div>
</template>

<script>
//import MochibuxRanking from '../components/MochibuxRanking';
//import { shallowRef } from 'vue';
import userModel from '../models/user';

export default {
    name: 'dashboard',
    data() {
        return {
            userModel
            //MochibuxRanking: shallowRef(MochibuxRanking)
        };
    }
}
</script>

<style scoped lang="scss">
</style>
