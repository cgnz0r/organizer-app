<template class="day-item">
    <div class="day-item__wrapper">

        <!-- todo weather -->
        <div class="day-item__title">{{ day }}</div>
        <div class="day-item__tasks">
            <ul class="day-item__ul-task">
                <li class="day-item__li-task" v-for="task in tasks" :key="task.id">
                    <input type="checkbox" :checked="task.isCompleted">
                    <span>{{ task.name }}</span>
                    <span>{{ task.desc }}</span>

                    <!-- todo right align -->
                    <span>{{ task.time }}</span>
                </li>
            </ul>
        </div>
    </div>
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