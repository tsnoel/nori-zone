<template>
    <nav-header page="Dashboard"/>
    <el-row :gutter="16" class="dashboard">
        <!-- Nori & MochApi -->
        <el-col :xs="24" :sm="8" :md="8" :xl="8">
            <el-card class="full-card nori">
                <div class="card-header nori">
                    <div class="icon-container">
                        <div class="icon-square">
                            <nori-icon class="logo-icon"/>
                        </div>
                    </div>
                    <span class="logo-text">nori</span>
                    <span class="logo-sub-text">
                        Project Dashboard
                    </span>
                </div>
                <div class="btn-group">
                    <div class="divider">
                        <div></div>
                        <span>Links</span>
                        <div></div>
                    </div>
                    <el-button @click="navigate('#/mochapi')" class="nori-btn">
                        MochApi Documentation
                    </el-button>
                    <el-button @click="navigate('#/mochibux')" class="nori-btn">
                        MochiBux Leaderboard
                    </el-button>
                </div>
            </el-card>
        </el-col>
        <!-- Grimbi's Grimiore -->
        <el-col :xs="24" :sm="8" :md="8" :xl="8">
            <el-card class="full-card grim">
                <div class="card-header grim">
                    <div class="icon-container">
                        <div class="icon-square">
                            <grimbi-icon class="logo-icon grimbi-icon"/>
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
                    <el-button @click="navigate('grimoire/#/items')"
                        class="grim-btn">
                        Magic Item Gashapon
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
            <el-card class="full-card chair">
                <div class="card-header chair">
                    <div class="icon-container">
                        <div class="icon-square">
                            <chair-icon class="logo-icon chair-icon"/>
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

import Nav from '../components/nav';
import ChairIcon from '../assets/fbchair';
import GrimbiIcon from '../assets/grimbi';
import NoriIcon from '../assets/nori';

export default {
    name: 'dashboard',
    components: {
        'chair-icon': ChairIcon,
        'grimbi-icon': GrimbiIcon,
        [ElButton.name]: ElButton,
        [ElCard.name]: ElCard,
        [ElCol.name]: ElCol,
        [ElRow.name]: ElRow,
        [Nav.name]: Nav,
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
    margin: 0 !important;
    padding: 1rem 0.5rem 0 0.5rem;

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
        &.nori {
            background-color: rgba(color(purple, lightdash), 0.3);
            border-color: rgba(color(purple, lightdash), 0.4);
        }

        &.grim {
            background-color: rgba(color(green, lightdash), 0.3);
            border-color: rgba(color(green, lightdash), 0.4);
        }

        &.chair {
            background-color: rgba(color(redorange, lightdash), 0.3);
            border-color: rgba(color(redorange, lightdash), 0.4);
        }

        .card-header {
            display: flex;
            flex-direction: column;
            min-height: 22rem;
            text-align: center;

            .logo-text {
                font-size: 3.5rem;
            }

            .logo-text-2 {
                font-size: 2.5rem;
            }

            .logo-sub-text {
                color: color(white);
                margin: -1.5rem 0 2rem 0;
            }

            &.nori {
                .logo-text {
                    color: color(purple, lightdash);
                    font-size: 5rem;
                }

                .icon-square {
                    background-color: color(purple, darkdash);
                }
            }

            &.chair,
            &.grim {
                .logo-text {
                    margin: 1rem 0 -2rem 0;
                }

                .logo-text-2 {
                    color: color(white);
                    margin-bottom: 1rem;
                }

                .logo-sub-text {
                    margin-bottom: 0.45rem;
                }
            }

            &.chair {
                .logo-text {
                    color: color(redorange, lightdash);
                }

                .icon-square {
                    background-color: color(redorange, darkdash);
                }
            }

            &.grim {
                .logo-text {
                    color: color(green, lightdash);
                }

                .icon-square {
                    background-color: color(green, darkdash);
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
                    border-top: 1px solid color(white);
                    margin-top: 0.8rem;
                    width: 35%;
                }

                span {
                    color: color(white);
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
            margin: 1rem 0;
            width: 100%;

            .icon-square {
                height: 8.75rem;
                width: 7.5rem;
            }

            .logo-icon {
                fill: color(white);
                height: 12.5rem;
                margin: -0.5rem 0 0 -2.25rem;
                width: 12.5rem;

                &.chair-icon {
                    margin: -0.75rem 0 0 -2rem;
                }

                &.grimbi-icon {
                    margin: -1.5rem 0 0 -2.55rem;
                }
            }
        }
    }
}
</style>
