<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap class="ma-4">
          <v-flex xs6>
            <v-card class="mx-1 elevation-5">
              <v-toolbar dark color="primary">
                <v-icon>account_box</v-icon>
                <v-toolbar-title>
                  User
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pa-4">
                <v-form>
                  <v-text-field name="name" type="text" label="Name" v-validate="'required|max:255'" :error-messages="errors.collect('name')"
                    data-vv-name="name" v-model="formUser.name" required></v-text-field>

                  <v-text-field name="email" type="email" label="Email" v-validate="'required|email|max:255'" :error-messages="errors.collect('email')"
                    data-vv-name="email" v-model="formUser.email" required></v-text-field>

                  <v-text-field name="password" type="password" label="Password" v-validate="'required|min:6|max:255'" :error-messages="errors.collect('password')"
                    data-vv-name="password" v-model="formUser.password" required></v-text-field>

                  <v-text-field name="password_confirmation" type="password" label="Confirm Password" v-validate="'required|confirmed:password|min:6|max:255'"
                    :error-messages="errors.collect('password_confirmation')" data-vv-name="password_confirmation" v-model="formUser.password_confirmation"
                    required></v-text-field>


                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6>
            <v-card class="mx-1 elevation-5">
              <v-toolbar dark color="indigo">
                <v-icon>book</v-icon>
                <v-toolbar-title>
                  Teacher
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pa-4">
                <v-form>
                  <v-avatar :tile="false" :size="120" color="grey lighten-4">
                    <img :src="imgUrl" alt="avatar">
                  </v-avatar>
                  <v-btn color="secondary" @click="onPickFile" dark>
                    <v-icon left>cloud_upload</v-icon>Upload Photo
                  </v-btn>
                  <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">

                  <v-text-field name="skypeip" type="text" label="Skype ID" v-validate="'required|max:255'" :error-messages="errors.collect('skypeip')"
                    data-vv-name="skypeip" v-model="formTeacher.skypeid" required></v-text-field>

                  <v-text-field name="address" type="text" label="Address" v-validate="'required|max:255'" :error-messages="errors.collect('address')"
                    data-vv-name="address" v-model="formTeacher.address" required></v-text-field>

                  <v-text-field name="city" type="text" label="City" v-validate="'required|max:255'" :error-messages="errors.collect('city')"
                    data-vv-name="city" v-model="formTeacher.city" required></v-text-field>

                  <v-text-field name="state" type="text" label="State" v-validate="'required|max:255'" :error-messages="errors.collect('state')"
                    data-vv-name="state" v-model="formTeacher.state" required></v-text-field>

                  <v-text-field name="zipcode" type="text" label="ZipCode" v-validate="'required|max:255'" :error-messages="errors.collect('zipcode')"
                    data-vv-name="zipcode" v-model="formTeacher.zipcode" required></v-text-field>

                  <v-select name="country" :items="countries" v-model="formTeacher.country" v-validate="'required'" :error-messages="errors.collect('country')"
                    data-vv-name="country" autocomplete placeholder="Country..."></v-select>

                  <v-select name="timezone" :items="timeZone" v-model="formTeacher.timezone" v-validate="'required'" :error-messages="errors.collect('timezone')"
                    data-vv-name="timezone" autocomplete placeholder="TimeZone..."></v-select>

                  <v-text-field name="details" type="text" label="Details" v-validate="'required|max:500'" :error-messages="errors.collect('details')"
                    data-vv-name="details" v-model="formTeacher.details" required multi-line></v-text-field>


                  <v-btn :loading="loading" :disabled="loading" color="success" block large @click.prevent="storeTeacher">
                      <v-icon>save</v-icon>
                  </v-btn>

                </v-form>

              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar" :timeout="6000" :color="snackbarColor" :multi-line="snackbarMode === 'multi-line'" :vertical="snackbarMode === 'vertical'">
      {{ snackbarText }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import moment from 'moment-timezone';
import axios from 'axios';
export default {
  data() {
    return {
      loading: false,
      snackbar: false,
      snackbarColor: '',
      snackbarText: '',
      snackbarMode: '',
      imgUrl: '/img/admin/user-admin.png',
      formUser: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      formTeacher: {
        photo: '',
        skypeid: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        timezone: '',
        details: ''
      },
      countries: [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Anguilla',
        'Antigua &amp; Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bermuda',
        'Bhutan',
        'Bolivia',
        'Bosnia &amp; Herzegovina',
        'Botswana',
        'Brazil',
        'British Virgin Islands',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burundi',
        'Cambodia',
        'Cameroon',
        'Cape Verde',
        'Cayman Islands',
        'Chad',
        'Chile',
        'China',
        'Colombia',
        'Congo',
        'Cook Islands',
        'Costa Rica',
        'Cote D Ivoire',
        'Croatia',
        'Cruise Ship',
        'Cuba',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Djibouti',
        'Dominica',
        'Dominican Republic',
        'Ecuador',
        'Egypt',
        'El Salvador',
        'Equatorial Guinea',
        'Estonia',
        'Ethiopia',
        'Falkland Islands',
        'Faroe Islands',
        'Fiji',
        'Finland',
        'France',
        'French Polynesia',
        'French West Indies',
        'Gabon',
        'Gambia',
        'Georgia',
        'Germany',
        'Ghana',
        'Gibraltar',
        'Greece',
        'Greenland',
        'Grenada',
        'Guam',
        'Guatemala',
        'Guernsey',
        'Guinea',
        'Guinea Bissau',
        'Guyana',
        'Haiti',
        'Honduras',
        'Hong Kong',
        'Hungary',
        'Iceland',
        'India',
        'Indonesia',
        'Iran',
        'Iraq',
        'Ireland',
        'Isle of Man',
        'Israel',
        'Italy',
        'Jamaica',
        'Japan',
        'Jersey',
        'Jordan',
        'Kazakhstan',
        'Kenya',
        'Kuwait',
        'Kyrgyz Republic',
        'Laos',
        'Latvia',
        'Lebanon',
        'Lesotho',
        'Liberia',
        'Libya',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Macau',
        'Macedonia',
        'Madagascar',
        'Malawi',
        'Malaysia',
        'Maldives',
        'Mali',
        'Malta',
        'Mauritania',
        'Mauritius',
        'Mexico',
        'Moldova',
        'Monaco',
        'Mongolia',
        'Montenegro',
        'Montserrat',
        'Morocco',
        'Mozambique',
        'Namibia',
        'Nepal',
        'Netherlands',
        'Netherlands Antilles',
        'New Caledonia',
        'New Zealand',
        'Nicaragua',
        'Niger',
        'Nigeria',
        'Norway',
        'Oman',
        'Pakistan',
        'Palestine',
        'Panama',
        'Papua New Guinea',
        'Paraguay',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Puerto Rico',
        'Qatar',
        'Reunion',
        'Romania',
        'Russia',
        'Rwanda',
        'Saint Pierre &amp; Miquelon',
        'Samoa',
        'San Marino',
        'Satellite',
        'Saudi Arabia',
        'Senegal',
        'Serbia',
        'Seychelles',
        'Sierra Leone',
        'Singapore',
        'Slovakia',
        'Slovenia',
        'South Africa',
        'South Korea',
        'Spain',
        'Sri Lanka',
        'St Kitts &amp; Nevis',
        'St Lucia',
        'St Vincent',
        'St. Lucia',
        'Sudan',
        'Suriname',
        'Swaziland',
        'Sweden',
        'Switzerland',
        'Syria',
        'Taiwan',
        'Tajikistan',
        'Tanzania',
        'Thailand',
        "Timor L'Este",
        'Togo',
        'Tonga',
        'Trinidad &amp; Tobago',
        'Tunisia',
        'Turkey',
        'Turkmenistan',
        'Turks &amp; Caicos',
        'Uganda',
        'Ukraine',
        'United Arab Emirates',
        'United Kingdom',
        'United States',
        'Uruguay',
        'Uzbekistan',
        'Venezuela',
        'Vietnam',
        'Virgin Islands (US)',
        'Yemen',
        'Zambia',
        'Zimbabwe'
      ],
      timeZone: ''
    };
  },

  created() {
    this.timeZone = moment.tz.names();
  },

  methods: {
    cleanForm() {
      this.formUser.name = '';
      this.formUser.email = '';
      this.formUser.password = '';
      this.formUser.password_confirmation = '';

      this.formTeacher.photo = '';
      this.formTeacher.skypeid = '';
      this.formTeacher.address = '';
      this.formTeacher.city = '';
      this.formTeacher.state = '';
      this.formTeacher.zipcode = '';
      this.formTeacher.country = '';
      this.formTeacher.timezone = '';
      this.formTeacher.details = '';
    },

    storeTeacher() {
      this.loading = true;

      this.$validator.validateAll().then(res => {
        if (res) {
          //Success Form
          const token = localStorage.getItem('token');
          let formData = {
            name: this.formUser.name,
            email: this.formUser.email,
            password: this.formUser.password,
            photo: this.formTeacher.photo,
            skypeid: this.formTeacher.skypeid,
            address: this.formTeacher.address,
            city: this.formTeacher.city,
            state: this.formTeacher.state,
            zipcode: this.formTeacher.zipcode,
            country: this.formTeacher.country,
            timezone: this.formTeacher.timezone,
            details: this.formTeacher.details
          };
          axios
            .post('/api/auth/user/teacher?token='.concat(token), formData)
            .then(response => {
              this.cleanForm();
              this.snackbarText = 'Teacher Saved';
              this.snackbarColor = 'success';
              this.snackbar = true;
              this.loading = false;
            })
            .catch(error => {
              this.loading = false;
              this.snackbarText = 'Error In The Form';
              this.snackbarColor = 'error';
              this.snackbar = true;
            });
        } else {
          //Error Form
          this.loading = false;
          this.snackbarText = 'Error In The Form';
          this.snackbarColor = 'error';
          this.snackbar = true;
        }
      });
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!');
      }
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imgUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.formTeacher.photo = filename;
    }
  }
};
</script>

<style>
</style>