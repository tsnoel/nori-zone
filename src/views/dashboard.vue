<template>
    <el-row :gutter="16" class="dashboard">
        <!-- Nori & MochApi -->
        <el-col :xs="24" :sm="8" :md="8" :xl="8">
            <el-card class="full-card">
                <div class="card-header nori">
                    <div class="icon-container">
                        <div class="icon-square">
                            <nori-icon class="logo-icon"/>
                        </div>
                    </div>
                    <span class="logo-text">nori</span>
                    <span class="logo-sub-text">
                        Home Server Dashboard & Greggbot Utilities
                    </span>
                </div>
                <div class="btn-group">
                    <div class="divider">
                        <div></div>
                        <span>Links</span>
                        <div></div>
                    </div>
                    <el-button @click="navigate('mochapi')" class="nori-btn">
                        MochApi Documentation
                    </el-button>
                    <el-button @click="navigate('mochibux')" class="nori-btn">
                        MochiBux Leaderboard
                    </el-button>
                </div>
            </el-card>
        </el-col>
        <!-- Grimbi's Grimiore -->
        <el-col :xs="24" :sm="8" :md="8" :xl="8">
            <el-card class="full-card">
                <div class="card-header grim">
                    <div class="icon-container">
                        <div class="icon-square">
                            <img class="grim-icon" src="../assets/frog.png">
                        </div>
                    </div>
                    <span class="logo-text">Grimbi's</span>
                    <span class="logo-text-2">Grimoire</span>
                    <span class="logo-sub-text">D&D 5e Tools</span>
                </div>
                <div class="btn-group">
                    <div class="divider">
                        <div></div>
                        <span>Links</span>
                        <div></div>
                    </div>
                    <el-button @click="navigate('grimoire/#/')" class="grim-btn">
                        Spell Cards
                    </el-button>
                    <el-button @click="navigate('grimoire/#/character-sheet')"
                        class="grim-btn">
                        Character Sheet
                    </el-button>
                </div>
            </el-card>
        </el-col>
        <!-- Fireball Chair -->
        <el-col :xs="24" :sm="8" :md="8" :xl="8">
            <el-card class="full-card">
                <div class="card-header chair">
                    <div class="icon-container">
                        <div class="icon-square">
                            <img class="chair-icon" src="../assets/chair.png">
                        </div>
                    </div>
                    <span class="logo-text">Fireball</span>
                    <span class="logo-text-2">Chair</span>
                    <span class="logo-sub-text">Pathfinder 2e Tools</span>
                </div>
                <div class="btn-group">
                    <div class="divider">
                        <div></div>
                        <span>Links</span>
                        <div></div>
                    </div>
                    <el-button @click="navigate('pf2e/#/spells')" class="chair-btn">
                        Spell Browser
                    </el-button>
                    <el-button @click="navigate('pf2e/#/items')" class="chair-btn">
                        Item Browser
                    </el-button>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import {
    ElButton,
    ElCard,
    ElCol,
    ElRow
} from 'element-plus';

import NoriIcon from '../assets/nori';

export default {
    name: 'dashboard',
    components: {
        [ElButton.name]: ElButton,
        [ElCard.name]: ElCard,
        [ElCol.name]: ElCol,
        [ElRow.name]: ElRow,
        'nori-icon': NoriIcon
    },
    data() {
        return {
        };
    },
    methods: {
        navigate(loc) {
            window.location.href = `/${loc}`;
        }
    }
}
</script>

<style scoped lang="scss">
.dashboard {
    height: calc(100% - 2.5rem);
    padding: 1rem 1rem 0 1rem;

    .full-card {
        height: calc(100% - 1rem);
    }

    .full-card ::v-deep(.el-card__body) {
        height: 100%;
    }

    .half-card {
        height: calc(50% - 1rem);
    }

    .full-card,
    .half-card {
        background-color: rgba($primary-light, 0.3);
        border-color: rgba($primary-light, 0.4);

        .card-header {
            display: flex;
            flex-direction: column;
            min-height: 20rem;
            text-align: center;

            .logo-text {
                font-size: 3.5rem;
            }

            .logo-text-2 {
                font-size: 2.5rem;
            }

            .logo-sub-text {
                color: $white;
                margin: -1.5rem 0 2rem 0;
            }

            &.nori {
                .logo-text {
                    color: $primary-light;
                    font-size: 5rem;
                }

                .icon-square {
                    background-color: $primary-dark;
                }
            }

            &.chair,
            &.grim {
                .logo-text {
                    margin: 1rem 0 -2rem 0;
                }

                .logo-text-2 {
                    color: $white;
                    margin-bottom: 1rem;
                }
            }

            &.chair {
                .logo-text {
                    color: $ternary-light;
                }

                .icon-square {
                    background-color: $ternary-dark;
                }
            }

            &.grim {
                .logo-text {
                    color: $secondary-light;
                }

                .icon-square {
                    background-color: $secondary-dark;
                }
            }
        }

        .btn-group {
            display: flex;
            flex-direction: column;

            .divider {
                display: flex;
                flex-direction: row;

                div {
                    border-top: 1px solid #FFFFFF;
                    margin-top: 0.8rem;
                    width: 35%;
                }

                span {
                    color: $white;
                    text-align: center;
                    width: 30%;
                }
            }

            .chair-btn,
            .grim-btn,
            .nori-btn {
                margin: 0.5rem 0;
                width: 100%;
            }
        }

        .icon-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 3rem 0;
            width: 100%;

            .icon-square {
                height: 1.75rem;
                transform: scale(5);
                width: 1.5rem;

                .chair-icon {
                    height: 1.9rem;
                    margin: 0.1rem 0 0 -0.1rem;
                    width: 1.75rem;
                }

                .grim-icon {
                    height: 2.5rem;
                    margin: -0.25rem 0 0 -0.45rem;
                    width: 2.4rem;
                }
            }

            .logo-icon {
                fill: $white;
                height: 2.5rem;
                margin: -0.1rem 0 0 -0.45rem;
                width: 2.5rem;
            }
        }
    }
}
</style>
