<template lang="html">
  <div class="main">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <form @submit.prevent="registerUser" novalidate>
          <transition name="slide-fade">
            <div v-show="step === 1" class="step">

              <div class="form-group">
                <label for="name">Ваше имя</label>
                <input @blur="$v.formReg.name.$touch()"
                :class="{'is-invalid requiredField': $v.formReg.name.$error}" v-model="formReg.name" type="text" class="form-control" id="name" placeholder="Имя">
                <div class="error" v-if="!$v.formReg.name.required">Введите Ваше имя</div>
                <div class="error" v-if="!$v.formReg.name.minLength">Длина Вашего имени должна быть не менее {{ $v.formReg.name.$params.minLength.min }}</div>
                <div class="error" v-if="!$v.formReg.name.alpha">В имени должны содержаться только буквы</div>
              </div>

              <div class="form-group">
                <label for="surname">Ваша фамилия</label>
                <input @blur="$v.formReg.surname.$touch()"
                :class="{'is-invalid requiredField': $v.formReg.surname.$error}" v-model="formReg.surname" type="text" class="form-control" id="surname" placeholder="Фамилия">
                <div class="error" v-if="!$v.formReg.surname.minLength">Длина Вашей фамилии должна быть не менее {{ $v.formReg.surname.$params.minLength.min }}</div>
                <div class="error" v-if="!$v.formReg.name.alpha">В фамилии должны содержаться только буквы</div>
              </div>

              <div class="form-group">
                <label for="email">Ваш e-mail</label>
                <input  @blur="$v.formReg.email.$touch()"
                :class="{'is-invalid requiredField': $v.formReg.email.$error}" v-model="formReg.email" type="email" class="form-control" id="email" placeholder="E-mail">
                <div class="error" v-if="!$v.formReg.email.required">Введите ваш e-mail</div>
                <div class="error" v-if="!$v.formReg.email.email">Поле e-mail заполнено неправильно</div>
                  </div>

              <button @click="nextStep"
                      :disabled="checkStep1()"
                      type="button" class="btn btn-success">
                Следующий шаг
              </button>
            </div>
          </transition>
          <transition name="slide-fade">


            <div v-show="step === 2" class="step">

              <div class="form-group">
                <label for="password">Пароль</label>
                <input  @blur="$v.formReg.password.$touch()"
                :class="{'is-invalid requiredField': $v.formReg.password.$error}" v-model="formReg.password" type="password" class="form-control" id="password" placeholder="Пароль">
                <div class="error" v-if="!$v.formReg.password.required">Необхоимо ввести пароль</div>
                <div class="error" v-if="!$v.formReg.password.minLength">Длина пароля должна быть не менее {{ $v.formReg.password.$params.minLength.min }}</div>
              </div>

              <div class="form-group">
                <label for="passwordConf">Подтверждение пароля</label>
                <input @blur="$v.formReg.passwordConf.$touch()"
                :class="{'is-invalid requiredField': $v.formReg.passwordConf.$error}" v-model="formReg.passwordConf" type="password" class="form-control" id="passwordConf" placeholder="Пароль">
                <div class="error" v-if="!$v.formReg.passwordConf.sameAsPassword">Пароли не идентичны</div>
              </div>
              <div class="buttons">

                <button @click="backStep" type="button" class="btn btn-light">Назад</button>
                <button @click="nextStep"
                         :disabled="checkStep2()"
                        type="button" class="btn btn-success">Следующий шаг</button>
              </div>
            </div>
          </transition>

          <transition name="slide-fade">
            <div v-show="step === 3" class="step">

              <div class="form-group">
                <label for="region">Страна</label>
                <input v-model="formReg.region" type="text" class="form-control" id="region" placeholder="Страна">
              </div>

              <div class="form-group">
                <label for="city">Город</label>
                <input v-model="formReg.city" type="text" class="form-control" id="city" placeholder="Город">
              </div>
              <div class="buttons">

                <button @click="backStep" type="button" class="btn btn-light">Назад</button>
                <button type="submit"
                        class="btn btn-success"
                         :disabled="checkStep3()">Завершить регистрацию</button>


              </div>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  sameAs,
  email,
  helpers
} from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
export default {
  name: 'Login',
  data() {
    return {
      step: 1,
      formReg: {
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConf: '',
        region: '',
        city: ''
      },
      submitStatus: null
    }
  },
  methods: {

    checkStep1() {
      return this.$v.formReg.name.$invalid ||
        this.$v.formReg.surname.$invalid ||
        this.$v.formReg.email.$invalid
    },
    checkStep2() {
      return this.$v.formReg.password.$invalid ||
        this.$v.formReg.passwordConf.$invalid
    },
    checkStep3() {
      return this.$v.formReg.name.$invalid ||
        this.$v.formReg.surname.$invalid ||
        this.$v.formReg.email.$invalid ||
        this.$v.formReg.password.$invalid ||
        this.$v.formReg.passwordConf.$invalid
},
    nextStep() {
      let step = this.step;
      if (step < 3) this.step++
    },
    backStep() {
      let step = this.step;
      if (step > 1) this.step--
    },
    registerUser() {

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'

      } else {

        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          this.formReg.name = ''


            for (let input in this.formReg) {
                this.formReg[input] = ''
            }
            this.$v.$reset()
            this.step = 1
        }, 2000)
      }
    },
  },

  validations: {
    formReg: {
      name: {
        required,
        alpha,
        minLength: minLength(2)
      },
      surname: {
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(4)
      },
      passwordConf: {
        sameAsPassword: sameAs('password')
      }
    }
  }
}
</script>

<style lang="css">
    .main {
      width: 100%;
      padding: 15% 5%;
      font-size: 1.2em;
    }

    .buttons {
      display: block;
    }

    .slide-fade-enter-active {
      transition: all 0.43s ease;
    }

    .slide-fade-enter {
      transform: translateX(103px);
      opacity: 0;
    }
    .requiredField
    {
        background-color: #ffdde3;
    }
    .error
    {
        padding:2%;
        font-size: 0.7em !important;
    }
</style>
