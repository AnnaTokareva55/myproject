<template>
  <div class="popup" ref="popup">
    <form novalidate class="popup-form" @submit.prevent="signup">
      <md-card>
        <md-card-header class="d-flex justify-content-between align-items-center">
          <div class="md-title popup-title">Регистрация</div>
          <close-icon @click="closePopup" />
        </md-card-header>
        <md-card-content class="errorsignup" v-if="error">
          {{
          error
          }}
        </md-card-content>
        <md-card-content>
          <md-field :class="getValidationClass('name')">
            <label for="name">Имя</label>
            <md-input name="name" id="name" v-model="form.name"></md-input>
            <span class="md-error" v-if="!$v.form.name.required">Введите имя.</span>
          </md-field>
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input name="email" id="email" v-model="form.email"></md-input>
            <span class="md-error" v-if="!$v.form.email.required">Введите email.</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Email введен некорректно.</span>
          </md-field>
          <md-field :class="getValidationClass('password')">
            <label for="password">Пароль</label>
            <md-input name="password" id="password" v-model="form.password"></md-input>
            <span class="md-error" v-if="!$v.form.password.required">Введите пароль.</span>
            <span
              class="md-error"
              v-else-if="!$v.form.password.minLength"
            >Пароль должен содержать не менее 5 символов.</span>
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary">Зарегистрироваться</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "PopupSignup",
  mixins: [validationMixin],
  data: () => ({
    form: { name: null, email: null, password: null },
    error: null
  }),
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(5)
      }
    }
  },
  mounted() {
    const popup = this;
    document.addEventListener("click", event => {
      if (event.target === popup.$refs["popup"]) popup.closePopup();
    });
  },
  methods: {
    ...mapActions("user", ["addUser"]),
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$dirty && field.$invalid
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.name = null;
      this.form.email = null;
      this.form.password = null;
    },
    closePopup() {
      this.$emit("closePopupSignup");
    },
    async signup() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const newUser = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password
      };
      try {
        await this.addUser(newUser);
      } catch (err) {
        this.error = err.message;
        return;
      }
      this.clearForm();
      this.closePopup();
    }
  }
};
</script>

<style scoped>
.popup {
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 49, 49, 0.5);
}

.popup-form {
  position: fixed;
  top: 150px;
  left: calc(50% - 200px);
  width: 400px;
  -webkit-box-shadow: 7px 7px 10px 0px rgba(50, 50, 50, 1);
  -moz-box-shadow: 7px 7px 10px 0px rgba(50, 50, 50, 1);
  box-shadow: 7px 7px 10px 0px rgba(50, 50, 50, 1);
  background-color: grey;
}

.md-card-header:first-child > .md-title:first-child {
  margin-top: 0;
  font-size: 22px;
}

.material-design-icon {
  width: 1.7em;
  height: 1.7em;
}

.material-design-icon > .material-design-icon__svg {
  width: 1.7em;
  height: 1.7em;
  bottom: 0;
}

.errorsignup {
  color: red;
}

@media screen and (max-width: 650px) {
  .popup-form {
    position: fixed;
    top: 150px;
    left: calc(50% - 150px);
    width: 300px;
  }
}
</style>
