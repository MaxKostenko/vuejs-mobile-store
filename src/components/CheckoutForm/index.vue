<template>
  <div>
    <h1>Personal details</h1>
    <form action="#" @submit.stop.prevent="submitForm">
      <form-field-holder-vuelidate
        :validator="$v.firstName"
        label='First name'
      >
        <input v-model="firstName" type="text">
      </form-field-holder-vuelidate>

      <form-field-holder-vuelidate
        :validator="$v.lastName"
        label="Last name"
      >
        <input v-model="lastName" type="text">
      </form-field-holder-vuelidate>

      <form-field-holder-vuelidate
        :validator="$v.dateOfBirth"
        label="Date of birth"
      >
        <flat-pickr
          v-model="dateOfBirth"
          :config="dateOfBirthConfig"
        >
        </flat-pickr>
      </form-field-holder-vuelidate>

      <form-field-holder-vuelidate
        :validator="$v.email"
        label="E-mail"
      >
        <input v-model="email" type="text">
      </form-field-holder-vuelidate>

      <form-field-holder-vuelidate
        :validator="$v.deliveryDate"
        label="Preferred delivery date"
      >
        <flat-pickr
          v-model="deliveryDate"
          :config="deliveryDateConfig"
        ></flat-pickr>
      </form-field-holder-vuelidate>

      <div class="submit-holder">
        <button type="submit" class="submit">Checkout</button>
      </div>
    </form>
  </div>
</template>

<script>
import FormFieldHolder from '@/components/base/FormFieldHolder';
import FormFieldHolderVuelidate from '@/components/base/FormFieldHolderVuelidate';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  mixins: [validationMixin],
  name: 'checkout-form',
  data() {
    return {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      deliveryDate: '',
    };
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    dateOfBirth: {
      required,
    },
    email: {
      required,
      email,
    },
    deliveryDate: {
      required,
    },
  },
  components: {
    FormFieldHolderVuelidate,
    FormFieldHolder,
    FlatPickr,
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit('saveForm', {
          ...this.$data,
        });
      }
    },
  },
  computed: {
    dateOfBirthConfig() {
      const birthDateBefore = new Date();
      birthDateBefore.setFullYear(birthDateBefore.getFullYear() - 16);
      return {
        maxDate: birthDateBefore,
      };
    },
    deliveryDateConfig() {
      const deliveryDateAfter = new Date();
      deliveryDateAfter.setDate(deliveryDateAfter.getDate() + 4);
      return {
        minDate: deliveryDateAfter,
      };
    },
  },
};
</script>

<style scoped>
  .submit {
    height: 35px;
    width: 150px;
    font-size: larger;
    background-color: cornflowerblue;
    border: 0;
    border-radius: 3px;
    color: white;
  }

  .submit-holder {
    text-align: right;
  }

  input {
    border: 1px solid #AAA;
    height: 35px;
    padding: 5px;
    width: 100%;
  }

  .hasError input {
    border-color: red;
  }
</style>
