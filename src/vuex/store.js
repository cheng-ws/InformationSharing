 import Vue from 'vue'
 import Vuex from 'vuex'

 Vue.use(Vuex)

// //state在vuex中用于存储数据
var state={
    count: 1,
    list:[]
}
// //mutations里面放的是方法，主要用于改变state里面的数据
 var mutations={
     inCount(){
         ++state.count;
     },
     addList(state,data){
        state.list=data; 
     }
}
// //计算属性 改变state里面的count数据的时候会触发getters里面的方法 获取新的值
// var getters={
//     computedCount: (state)=>{
//         return state.count*2;
//     }
// }
// //action 类似mutations 提交的是mutation，而不是直接变更状态 action 可以包含任意异步操作
// var actions={
//     inMutations(context){
//         context.commit('inCount');
//         // 执行mutations 里面的方法，改变state的数据
//     }
// }
// //vuex
 const store = new Vuex.Store({
     state,
     mutations,
     getters,
     actions
 })
 export default store;