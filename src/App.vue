<template>
  <div id="app">
      <div class="header">

          <div class="hdr_menu">

              <nav class="navbar navbar-expand-lg navbar-light hdr_menu_nav">
                  <a href="#" class="navbar-brand">Home</a>

                  <!-- Кнопка, появляющаяся во время уменьшения шырины страницы -->
                  <button class="navbar-toggler"type="button"data-toggle="collapse"data-target="#navbarNav"aria-controls="navbarNav"aria-expanded="false"aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse hdr_menu_collapse" id="navbarNav">

                      <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link" href="#">About us<span class="sr-only">(current)</span></a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Catalog</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Pricelist</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Contacts</a></li>
                      </ul>

                  </div>


                  <!-- Форма для поиска на сайте (ВСЁМ САЙТЕ) -->
                  <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
              </nav>

          </div>


      </div>
      <div class="body">

      </div>
      <div class="footer">

      </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
}

div
{
    display: flex;
    flex-direction: column;
}
.header {
  width: 100vw;
  min-height: 25vh;
  background: ;

  flex: 1 0 auto;

  position: fixed;

}

.hdr_menu_nav
{
    background: ;
}
.hdr_menu_collapse
{
    background: ;
}
/******************************************************************************/

.body {
  width: 100vw;
  min-height: 33vh;
  background:;

  flex: 1 0 auto;

}

/******************************************************************************/
.footer {
  width: 100vw;
  min-height: 34vh;
  background: ;

  flex: 0 0 auto;

}
</style>
