<template>
  <div class="login">
    <Card class="login-card" shadow title="注册" icon="ios-bus">
      <div style="text-align:center">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80">
          <FormItem prop="user" label="用户名:" label-for="username">
            <Input
              type="text"
              v-model="formInline.user"
              element-id="username"
              placeholder="Username"
              prefix="ios-person-outline"
            />
          </FormItem>
          <FormItem prop="password" label="密 码:  " label-for="userpassword">
            <Input
              type="password"
              v-model="formInline.password"
              element-id="userpassword"
              placeholder="Password"
              prefix="ios-lock-outline"
            />
          </FormItem>
          <FormItem prop="passwordCheck" label="确认密码:" label-for="userpasswordCheck">
            <Input
              type="password"
              v-model="formInline.passwordCheck"
              element-id="userpasswordCheck"
              placeholder="PasswordCheck"
              prefix="ios-lock-outline"
            />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" style="float:left">提交</Button>
            <Button @click="handleReset('formInline')" style="margin-left: 50px">重置</Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>
 
   
<script>
import { Card, Input, Button, Form, Icon } from "iview";

export default {
  name: "login",
  data() {
    const validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formInline.passwordCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formInline.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formInline.password) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    return {
      formInline: {
        user: "",
        password: "",
        passwordCheck: ""
      },
      ruleInline: {
        user: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        passwordCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          // localStorage.setItem("userName", "chengws");
          // window.location.href = "/home";
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    
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