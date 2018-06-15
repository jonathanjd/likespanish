<template>
  <v-data-table :headers="myDayWeek" :items="myBodyWeek" :hide-actions="true">
    <template slot="items" slot-scope="props">

      <td class="text-xs-center">{{ props.item.hour }}</td>
      <td class="text-xs-center">{{ props.item.monday }}</td>
      <td class="text-xs-center">{{ props.item.tuesday }}</td>
      <td class="text-xs-center">{{ props.item.wednesday }}</td>
      <td class="text-xs-center">{{ props.item.thursday }}</td>
      <td class="text-xs-center">{{ props.item.friday }}</td>
      <td class="text-xs-center">{{ props.item.saturday }}</td>
      <td class="text-xs-center">{{ props.item.sunday }}</td>

    </template>
    <template slot="footer">
      <td colspan="100%">
      </td>
    </template>
  </v-data-table>
</template>

<script>
import moment from 'moment-timezone';

export default {
  data() {
    return {
      dayWeek: [],
      bodyWeek: []
    };
  },

  created() {
    let date = moment().tz('America/Caracas');
    let hourCurrent = date.format('HH:mm A'); //Hora Actual del Usuario
    let weekStart = date.startOf('week').format('D'); //Day Inicio de la Semana
    let weekEnd = date.endOf('week').format('D'); //Day Final de la Semana
    this.fillTable(); // Fill Table Week
  },

  computed: {
    myDayWeek() {
      return this.dayWeek;
    },
    myBodyWeek() {
      return this.bodyWeek;
    }
  },

  methods: {
    fillTable() {
      let date = moment().tz('America/Caracas');
      let myArray = [0, 1, 2, 3, 4, 5, 6];
      let arrayHeader = [
        {
          text: 'Hour',
          align: 'center',
          sortable: false,
          name: 'hour',
          class: 'title'
        }
      ];
      myArray.forEach(function(value) {
        let myDate = date
          .startOf('week')
          .add(value, 'days')
          .format('D MMM');

        let valueHeader = {
          text: myDate,
          align: 'center',
          sortable: false,
          name: myDate,
          class: 'title'
        };
        arrayHeader.push(valueHeader);
      });
      this.dayWeek = arrayHeader;

      let myArrayBig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      let initHour = moment('600', 'hmm');

      let arrayBody = [];
      let things = ['x', '-'];
      myArrayBig.forEach(function(value) {
        let valueBody = {
          hour: initHour.hour(6 + value).format('HH:mm A'),
          monday: things[Math.floor(Math.random() * things.length)],
          tuesday: things[Math.floor(Math.random() * things.length)],
          wednesday: things[Math.floor(Math.random() * things.length)],
          thursday: things[Math.floor(Math.random() * things.length)],
          friday: things[Math.floor(Math.random() * things.length)],
          saturday: things[Math.floor(Math.random() * things.length)],
          sunday: things[Math.floor(Math.random() * things.length)]
        };

        arrayBody.push(valueBody);
      });

      this.bodyWeek = arrayBody;
    }
  }
};
</script>

<style>
</style>
