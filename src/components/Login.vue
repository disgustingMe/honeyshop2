<template lang="html">
  <div class="main">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <form @submit.prevent="registerUser" novalidate>
          <transition name="slide-fade">
            <div v-show="step === 1" class="step">

              <div class="form-group">
                <label for="name">Ваше имя</label>
                <input v-model="formReg.name" type="text" class="form-control" id="name" placeholder="Имя">
              </div>

              <div class="form-group">
                <label for="surname">Ваша фамилия</label>
                <input v-model="formReg.surname" type="text" class="form-control" id="surname" placeholder="Фамилия">
              </div>

              <div class="form-group">
                <label for="email">Ваш e-mail</label>
                <input v-model="formReg.email" type="email" class="form-control" id="email" placeholder="E-mail">
              </div>

              <button @click="nextStep" type="button" class="btn btn-success">Следующий шаг</button>
            </div>
          </transition>
          <transition name="slide-fade">


            <div v-show="step === 2" class="step">

              <div class="form-group">
                <label for="password">Пароль</label>
                <input v-model="formReg.password" type="password" class="form-control" id="password" placeholder="Пароль">
              </div>

              <div class="form-group">
                <label for="passwordConf">Подтверждение пароля</label>
                <input v-model="formReg.passwordConf" type="password" class="form-control" id="passwordConf" placeholder="Пароль">
              </div>
              <div class="buttons">

                <button @click="backStep" type="button" class="btn btn-light">Назад</button>
                <button @click="nextStep" type="button" class="btn btn-success">Следующий шаг</button>
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
                <button type="submit" class="btn btn-success">Завершить регистрацию</button>
              </div>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data()
    {
        return {
                step: 1,
                formReg:
                {
                     name: '',
                     surame: '',
                     email: '',
                     password: '',
                     passwordConf: '',
                     region: '',
                     city: ''
                }
        }
    },
    methods:
    {
        nextStep()
        {
            let step = this.step;
            if (step < 3)
            {
                this.step++
            }

        },
        backStep()
        {
            let step = this.step;
            if (step > 1)
            {
                this.step--
            }
        },
        registerUser()
        {
            console.log('Registration successfull')
        }
    }
}
</script>

<style lang="css">
    .main
    {
        width:100%;
        padding:12% 5%;
        font-size: 1.2em;
    }
    .buttons
    {
        display: block;
    }

    .slide-fade-enter-active {
  transition: all 0.43s ease;
}

.slide-fade-enter {
    transform: translateX(103px);
    opacity: 0;
}
</style>
