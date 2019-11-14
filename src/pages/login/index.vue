<template>
  <div class="login">
    <Card class="login-card" shadow title="登录" icon="ios-bus">
      <div style="text-align:center">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80">
          <FormItem prop="username" label="用户名:" label-for="username">
            <Input
              type="text"
              v-model="formInline.username"
              element-id="username"
              placeholder="Username"
              prefix="ios-person-outline"
            />
          </FormItem>
          <FormItem prop="userpassword" label="密 码:  " label-for="userpassword">
            <Input
              type="password"
              v-model="formInline.userpassword"
              element-id="userpassword"
              placeholder="Password"
              prefix="ios-lock-outline"
            />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" style="float:left">登录</Button>
            <Button style="margin-left: 50px" @click="handleRegister">注册</Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>
 
   
<script>
import { Card, Input, Button, Form, Icon } from "iview";
import storage from '../../model/storage.js'
export default {
  name: "login",
  data() {
    return {
      formInline: {
        username: "",
        userpassword: ""
      },
      ruleInline: {
        username: [
          {
            required: true,
            pattern: /^[A-z]+$/,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        userpassword: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 4,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          },
          {
            pattern: /^[A-z]+$/,
            message: "输入格式不正确",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      //  console.log(this.requestData());//promise
      this.requestData().then(res=>{
        if(res.code===0){
          storage.set("userId",res.list[0].id);
          storage.set('username',res.list[0].username)
          console.log(localStorage);
          // this.$router.push({path:'/home',query:{id:res.list[0].id}})
          // this.$router.push('/home');
           window.location.href='/home';
          //接受参数 this.id=this.$route.query.id;
          // this.$router.replace({path:'/'})
          // this.$router.replace('/home');
        }
      })
      
    },
    handleRegister() {
      window.location.href = "/register";
    },
    requestData() {
      return storage.axiosAjax('/api/user.php',{...this.formInline});
    }
  }
};
</script>
<style scoped>
.login {
  position: relative;
}
.login-card {
  position: absolute;
  left: 30%;
  top: 100px;
  width: 350px;
}
</style>