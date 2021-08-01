<template>
  <div id="app">
      <div class="header fixed-top">

          <div class="hdr_menu container-fluid">

              <nav class="navbar navbar-expand-lg navbar-light hdr_menu_nav">

                  <!-- Кнопка, появляющаяся во время уменьшения шырины страницы -->
                  <a href="#" class="navbar-brand">Home
                  <i class="bi bi-bucket-fill"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-bucket-fill" viewBox="">
                      <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z"/>
                  </svg>
                  </a>
                  <button class="navbar-toggler"type="button"data-toggle="collapse"data-target="#navbarNav"aria-controls="navbarNav"aria-expanded="false"aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <!-- Само меню -->
                  <div class="collapse navbar-collapse hdr_menu_collapse" id="navbarNav">
                      <ul class="navbar-nav">
                          <li class="nav-item"><a class="nav-link" href="#">About us<span class="sr-only">(current)</span></a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Catalog</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Pricelist</a></li>
                          <li class="nav-item"><a class="nav-link" href="#">Contacts</a></li>
                      </ul>
                  </div>

                  <!-- Форма для поиска на сайте (ВСЁМ САЙТЕ) -->
                  <form class="hdr_menu_search form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>

                                    <!-- Логин -->
                                    <a href="#"> <i class="bi bi-box-arrow-in-right"></i></a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                      <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                    </svg>
                                    <div class="hdr_menu_Login navbar-nav">
                                        <a class="nav-item nav-link" href="#">Log in</a>
                                    </div>

                  <!-- Корзина -->
                  <div class="hdr_menu_shop">

                            <ul  class="hdr_menu_shop_ul">
                                <a class="hdr_menu_shopLink" href="#">
                                  <li class="hdr_menu_cart">
                                      <i class=" bi bi-cart"></i>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                      </svg>
                                  </li>
                                </a>
                                  <li class="hdr_menu_purchaseSumCal">
                                      {{purchaseSumCalc}}
                                  </li>

                            </ul>
                  </div>
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
  data () {
    return {

    }
},
    computed:
    {
        purchaseSumCalc()
        {
            let sum = 0
            return sum + '₽'
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
  min-height: 15vh;
  background: ;

  flex: 1 0 auto;

  /* position: fixed; */

  border-bottom: 2px solid green;

}

.hdr_menu_nav
{
    background: ;
    padding-top:1%;
}
.hdr_menu_collapse
{
    background: ;
}

.hdr_menu_Login
{
    font-size: 1.2em;
}

.hdr_menu_search
{
    margin: 0;
    padding-right: 1%;
}

.hdr_menu_shop
{
    background: ;
    padding: 1%;
    border-left:2px solid green;
}
.hdr_menu_shop_ul
{
    list-style-type: none;
    background: ;
    padding:0%;
}
.hdr_menu_cart
{
    background: ;
    padding-left: 30%;
}
.hdr_menu_purchaseSumCalc
{
    font-size: 1em;
    background: ;
    width:5%;
    position: absolute;
    vertical-align: middle;
}
.hdr_menu_shopLink
{
    color:#000;
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
