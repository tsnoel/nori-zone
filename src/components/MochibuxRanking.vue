<template>
    <div class="entry-container">
        <div class="entry" :class="{you: userModel.current.id === u.id}"
            v-for="(u, i) in allData" :key="u.id">
            <div>
                <span class="rank">#{{i + 1}}</span>
                <div>
                    <span class="points">{{u.points}}</span>
                    <span class="points-label">MochiBux</span>
                </div>
            </div>
            <div>
                <img v-if="u.avatar" class="avatar"
                    :src="`https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png`"/>
                <span v-else class="no-avatar">{{u.name[0]}}</span>
            </div>
            <div>
                <span class="name"
                    :class="{'small-name': u.name.length > 18}">
                    {{u.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import userModel from '../models/user';
import mochibuxModel from '../models/mochibux';

export default {
    name: 'mochibux-ranking',
    data() {
        return {
            userModel,
            allData: []
        };
    },
    async beforeMount() {
        await Promise.all([userModel.loadData(), mochibuxModel.loadData()]);
        this.allData = userModel.all.map((u) => {
            const mob = mochibuxModel.data.find((m) => m.id === u.id);
            if (mob) {
                u.points = mob.points;
            }
            return u;
        }).sort((a, b) => (a.points < b.points) ? 1 : -1);
    }
}
</script>

<style scoped lang="scss">

.entry-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    color: color(purple, text);

    .entry {
        margin: 1rem;
        width: 8rem;
        background-color: rgba(color(purple, lightdash), 0.25);
        border-radius: 1rem;
        box-shadow: 0 0 0.25rem rgba(color(purple, dashboard), 0.4);

        &.you {
            border: 0.2rem solid color(green, lightdash);
        }

        &:nth-child(1) {
            background-color: rgba(color(yellow, darker), 0.4);
        }
        &:nth-child(2) {
            background-color: rgba(color(charcoal, 300), 0.4);
        }
        &:nth-child(3) {
            background-color: rgba(color(brown, 200), 0.4);
        }
        &:nth-child(2n) {
            .no-avatar {
                color: color(green, text);
                background-color: color(green, dashboard);
            }
        }

        >div {
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            >div {
            display: flex;
            flex-direction: column;
            }

            .avatar {
                width: 50%;
                border-radius: 1rem;
            }
            .no-avatar {
                height: 3.75rem;
                font-size: 2.5rem;
                text-align: center;
                color: color(purple, text);
                background-color: color(purple, dashboard);
                width: 50%;
                border-radius: 1rem;
            }
        }

        .rank {
            font-size: 1.5rem;
        }
        .name {
            font-size: 1rem;
            &.small-name {
                margin-top: 0.5rem;
                font-size: 0.6rem;
            }
        }
        .points {
            margin-left: 0.75rem;
            font-size: 1rem;
        }
        .points-label {
            margin-top: -0.25rem;
            font-size: 0.5rem;
        }
    }
}
</style>
