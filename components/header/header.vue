<template>
    <!--
        <nav class="navbar navbar-expand-lg  navbar-light bg-light">
            <div class="container">
            <nuxt-link to="/"  class="navbar-brand" href="#">Syngenta Shop</nuxt-link>

            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                <div v-if="user.username != ''" class="d-flex align-items-conter">
                    <nuxt-link class="btn btn-success m-2" to="/add-customer">Add Customer</nuxt-link>
                    <nuxt-link class="btn btn-success m-2" to="/all-product">Product</nuxt-link>
                    <nuxt-link class="btn btn-success m-2" to="/add-product">Add Product</nuxt-link>
                    <nuxt-link class="btn btn-success m-2" to="/overview">Overview</nuxt-link>
                </div>
                <form v-else class="form-inline d-flex align-items-center my-2 ml-0 my-lg-0">
                    <input v-model="userName" class="form-control m-2" type="email" placeholder="Email">
                    <input v-model="password" class="form-control m-2" type="password" placeholder="Password">
                    <button @click.prevent="login"  class="btn btn-outline-success my-2 my-sm-0">Login</button>
                </form>

            </div>
            </div>    
        </nav>
    -->
                <!-- ========== Left Sidebar Start ========== -->
            <div id="side-menu" class="left side-menu">
                <button @click.prevent="toggleMobileMenu" type="button" class="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                    <i class="mdi mdi-close"></i>
                </button>

                <div class="left-side-logo d-block d-lg-none">
                    <div class="text-center">
                        
                        <a href="index.html" class="logo"><img src="assets/images/logo_dark.png" height="20" alt="logo"></a>
                    </div>
                </div>

                <div class="sidebar-inner slimscrollleft">
                    
                    <div id="sidebar-menu">
                        <ul>
                            <li class="menu-title">Main</li>

                            <li>
                                <a href="index.html" class="waves-effect">
                                    <i class="dripicons-home"></i>
                                    <span> Dashboard <span class="badge badge-success badge-pill float-right">3</span></span>
                                </a>
                            </li>

                            <li class="has_sub">
                                <a href="javascript:void(0);" class="waves-effect"><i class="dripicons-briefcase"></i> <span> Elements </span> <span class="menu-arrow float-right"><i class="mdi mdi-chevron-right"></i></span></a>
                                <ul class="list-unstyled">
                                    <li><a href="ui-alerts.html">Alerts</a></li>
                                    <li><a href="ui-badge.html">Badge</a></li>
                                    <li><a href="ui-buttons.html">Buttons</a></li>
                                    <li><a href="ui-cards.html">Cards</a></li>
                                    <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                                    <li><a href="ui-navs.html">Navs</a></li>
                                    <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                                    <li><a href="ui-modals.html">Modals</a></li>
                                    <li><a href="ui-images.html">Images</a></li>
                                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                                    <li><a href="ui-pagination.html">Pagination</a></li>
                                    <li><a href="ui-popover-tooltips.html">Popover & Tooltips</a></li>
                                    <li><a href="ui-spinner.html">Spinner</a></li>
                                    <li><a href="ui-carousel.html">Carousel</a></li>
                                    <li><a href="ui-video.html">Video</a></li>
                                    <li><a href="ui-typography.html">Typography</a></li>
                                    <li><a href="ui-grid.html">Grid</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div> <!-- end sidebarinner -->
            </div>
            <!-- Left Sidebar End -->
</template>

<script>
import {API_URL} from "~/plugins/api"

export default {
    data(){
        return {
            isLogin: false,
            userName: '',
            password: '',
            user: {
                'username': '',
                'email': ''
            }
        }
    },
    created() {
        this.checkAuth()
    },
    methods: {
        toggleMobileMenu(){
            $("body").toggleClass("fixed-left-void");
            $("#wrapper").toggleClass("enlarged");
        },
        login(){
            let url = API_URL("auth/local/");
            let data = {
                "identifier": this.userName,
                "password": this.password
            }
            console.log(data)
            this.$axios.post(url, data).then(response => {
                if(response.status == 200){
                    let userJWT = response.data.jwt
                    let userName = response.data.user.username
                    localStorage.setItem("token", userJWT)
                    localStorage.setItem("userName", JSON.stringify(userName))
                    this.checkAuth()
                }
            }).catch(err => console.log(err));
        },
        checkAuth(){
            if(process.browser){
                let token = localStorage.getItem("token")
                let userName = localStorage.getItem("userName")
                console.log(userName)
                if(token){
                    this.user.username = JSON.parse(userName)
                    this.isLogin = true
                }else {
                    this.isLogin = false
                }
            }
        }
    }
}
</script>