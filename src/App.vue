<template>
  <div id="app">
    <Article class="layout">
        <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" :active-name="isSelect==''?home:isSelect">
          <div class="layout-logo">
            <img src="./assets/logo.png" alt />
          </div>
          <div class="layout-nav">
            <router-link v-for="item in navList" :key="item.name" :to="item.name">
              <MenuItem :name="item.name">
                <Icon :type="item.icon" class="nav-icon"></Icon>
                {{item.title}}
              </MenuItem>
            </router-link>
          </div>
          <div class="login-reg" v-show="loginOnline">
            <Avatar style="margin-right: 10px;background-color: #fde3cf;font-size:22px">{{username.slice(0,1)}} </Avatar>
            {{username}}
            <Divider type="vertical" />
            <Button type="primary" class="reg" @click="modalRemove=true">注销</Button>
            <Modal v-model="modalRemove" width="360">
              <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-information-circle"></Icon>
                <span>此操作将注销此次登录</span>
              </p>
              <div style="text-align:center">
                <p>退出后，下次要重新登录！</p>
                <p>确定退出吗？</p>
              </div>
              <div slot="footer">
                <Button
                  type="warning"
                  size="large"
                  long
                  :loading="modal_loading"
                  @click="removeUserName"
                >确定退出</Button>
              </div>
            </Modal>
          </div>
          <div class="login-reg" v-show="isLogin">
            <div class="layout-nav">
                <router-link v-for="item in userList" :key="item.name" :to="item.name">
                  <MenuItem :name="item.name">
                  <Icon :type="item.icon" class="nav-icon"></Icon>
                    {{item.title}}
                  </MenuItem>
                </router-link>
              </div>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '80px auto', width:'90%',minHeight:'500px'}">
        <keep-alive>
          <router-view />
        </keep-alive>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> 
    </Article>
  </div>
</template>

<script>
import { Button, Divider, Avatar, Message, Modal } from "iview";
import Routers from "@/router/index.js";
export default {
  name: "App",
  data() {
    return {  
      navList: [],
      userList:[],
      isSelect: "",
      username: "",
      isLogin: true,
      loginOnline:false,
      modalRemove: false,
      modal_loading: false
    };
  },  
   
  created() {
     this.getList()
  },
  methods: {
    getList(){
       if (localStorage.username) {
           this.username = localStorage.username;
           this.isLogin = false;
           this.loginOnline=true;
        } 
       let listAll = Routers.options.routes;
       this.navList=listAll.slice(0, 4);
       this.userList=listAll.slice(4,6);
       this.isSelect = this.$route.name;
       console.log(this.$route);
       
       console.log(this.isSelect);
       
    },
    getuserName() {
      console.log(localStorage.username);
     
    },
    removeUserName() {
      this.modal_loading = true;
      setTimeout(() => {
        this.modal_loading = false;
        this.modalRemove = false;
      }, 5000);
      localStorage.clear();
      window.location.href = "/login"; 
    }
  },
  mounted(){
    
  }
  
} 
 
</script>

<style scoped>
.ivu-layout-header {
  background: #fff;
  padding: 0 40px;
  z-index: 99999;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  top: 0;
}
.layout-logo {
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 10px;
  left: 25px;
}
img {
  height: 40px;
}
.layout-nav {
  /* width: 420px;
  margin: 0 auto; */
  margin-left: 160px;
  font-size: 14px;
}
.nav-icon {
  margin-right: 8px;
}
.login-reg {
  float: right;
  /* margin-right: 50px; */
}

.login:hover,
.reg:hover {
  color: black;
}

.layout-footer-center {
  text-align: center;
}
 </style>