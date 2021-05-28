<template class="day-item">
    <v-card class="day-item__wrapper" elevation="3" tile>

        <!-- todo remove vuetify -->
        <!-- todo weather -->
        <div class="day-item__title">{{ day }}</div>
        <div class="day-item__tasks">
            <ul class="day-item__ul-task">
                <v-list-item two-line v-for="task in tasks" :key="task.id">
                    <v-list-item-action>
                        <v-checkbox :input-value="task.isCompleted" color="primary"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ task.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ task.desc }}</v-list-item-subtitle>

                        <!-- todo right align -->
                        <v-list-item-subtitle>{{ task.time }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </ul>
        </div>
    </v-card>
</template>

<script>
    export default {
        props: {
            day: String
        },
        data() {
            return {
                tasks: [{
                    id: 1,
                    name: 'task 1', 
                    desc: 'info',
                    time: '15:10',
                    isCompleted: false
                }, { 
                    id: 2,
                    name: 'task 2', 
                    desc: 'info',
                    time: '15:10',
                    isCompleted: true
                }, { 
                    id: 3,
                    name: 'task 3',
                    desc: 'info',
                    time: '15:10',
                    isCompleted: false
                }]
            }
        }
    }
</script>

<style lang="scss">
    .day-item {
        &__wrapper {
            display: flex;
            flex-flow: column nowrap;
            margin-top: 10px; 
            padding: 10px 5px;
        }

        &__title {
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid rgba(0,0,0, .17);
        }

        &__ul-task {
            padding: 0 !important;
            margin: 0;
        }

        &__li-task {
            list-style-type: none;
        }
    }
</style>