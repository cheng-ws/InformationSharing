<template>
  <Row class="content-home">
    <Col span="14" offset="2" class="home-left">
      <Card
        dis-hover
        v-for="(item, index) in list1"
        :key="index"
        style="background:#f5f7f9;border:0;"
      >
        <Card style="position:relative; padding-bottom: 10px;">
          <Avatar size="small" style="color: #f56a00;background-color: #fde3cf">U</Avatar>
          <div class="bottom">
            <Poptip trigger="hover" placement="bottom" class="home-left-name">
              Content{{item}}
              <div slot="content">
                <Avatar shape="circle" style="color: #f56a00;background-color: #fde3cf">U</Avatar>
                Content{{item}}
                <Button size="small">访问主页</Button>
              </div>
            </Poptip>
            <Icon type="ios-time-outline" />
            <Time :time="time" type="datetime" />
          </div>
          <!-- <Time :time="time2" /> -->
          <!-- <br>
          <Time :time="time2" type="date" />-->
          <!-- <br> -->
          <div>
            <router-link
              to
              style="color:#515a6e;font-size:16px;display:block;width:90%;padding:10px;"
            >
              <span class="home-left-content">请问iview中可否引入iconfont自定义图标库{{item}}</span>
            </router-link>
          </div>
          <div class="home-left-comment">
            <Poptip trigger="hover" placement="bottom">
              <Icon type="ios-chatboxes-outline" />
              &nbsp;{{item}}
              <div slot="content" style="text-align:center;">共有{{item}}评论</div>
            </Poptip>
          </div>
        </Card>
      </Card>
      <Card dis-hover style="text-align:center;background:#f5f7f9; border: 0;">
        <Button @click="handleAddMore" style="width: 100%; height: 100%;font-size: 14px">加载更多</Button>
      </Card>
    </Col>
    <Col span="6" offset="1" class="home-right">
      <Card>
        <Affix :offset-top="50">
          <Collapse v-model="value" style="border:0;background:#fff;">
            <Panel name="1">
              网站通告：
              <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </Panel>
          </Collapse>
        </Affix>
      </Card>
      <Card style="margin-top:20px;" title="资讯选项" icon="md-list">
        <div>
          <h4>资讯状态</h4>
        </div>
        <div>
          <Form :model="formItem">
            <FormItem>
              <RadioGroup v-model="formItem.radio">
                <Radio label="everyday">全部</Radio>
                <Radio label="yesterday">昨天</Radio>
                <Radio label="today">今天</Radio>
                <Radio label="tommerday">明天</Radio>
              </RadioGroup>
            </FormItem>
          </Form>
        </div>
      </Card>
      <Card dis-hover style="background:#f8f8f8;border:0;">
        <Button
          style="background: #25d17b;width:100%;border:0;font-size:16px; color:#fff;"
          @click="article_sumbit"
        >
          <span class="home-right-create">
            <Icon type="ios-create-outline" />&nbsp;发布资讯
          </span>
        </Button>
      </Card>
    </Col>
  </Row>
</template>
<script>
import { Row, Col, Card, Avatar, Form, Radio } from "iview";
export default {
  name: "home",
  data() {
    return {
      time: new Date().getTime() - 86400 * 3 * 1000,
      formItem: {
        radio: "everyday"
      },
      value: "1",
      list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list1.push(last + i);
          }
          resolve();
        }, 2000);
      });
    },
    handleAddMore() {},
    article_sumbit() {
      // this.$router.push('/home');
      if (localStorage.username) {
         this.$router.push('/article');
      }else{
         this.$router.push('/login')
      }
    }
  }
};
</script>
<style scoped>
.content-home {
  min-height: 800px;
  position: relative;
}
.content-home::before {
  /* display: table; */
  box-sizing: border-box;
}
.home-left {
  box-sizing: border-box;
}
.bottom {
  text-align: center;
  position: absolute;
  left: 50px;
  top: 20px;
}
.home-left-name:hover {
  color: aquamarine;
}
.home-left-content:hover {
  color: aquamarine;
}
.home-left-comment {
  float: right;
}
.home-right {
  position: fixed;
  top: 15%;
  right: 7%;
}
.home-right-create:hover {
  color: #86e9b8;
}
.home-right::after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0;
  content: "";
  display: table;
}
</style>