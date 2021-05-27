<template>
    <v-simple-table>
        <thead>
            <tr>
                <th v-for="day in weekDays" :key="day" class="text-center">{{ day }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th v-for="day in weekDays" :key="day" class="text-center">TBD</th>
            </tr>
        </tbody>
    </v-simple-table>
</template>

<script>
    import moment from "moment";
    export default {
        data() {
            return {
                formatString: 'ddd, Do',
                weekDays: [],
            };
        },
        mounted() {
            const startWeekDay = moment().startOf("week");
            this.weekDays.push(startWeekDay.format(this.formatString));
            for (let i = 0; i < 6; i++) {
                const nextDay = startWeekDay.add("1", "days").format(this.formatString);
                this.weekDays.push(nextDay);
            }
        },
    };
</script>