import axios from 'axios'
import qs from 'qs'

export default {
    set(key,value){
        // localStorage.setItem(key,JSON.stringify(value));
        localStorage.setItem(key,value);
    },
    get(key){
        // return JSON.parse(localStorage.getItem(key));
        return localStorage.getItem(key);
    },
    remove(key){
        localStorage.removeItem(key);
    },
    axiosAjax(url,json){
         return axios.post(url,json,{
                //配置`transformRequest` ，在向服务器发送前，修改请求数据，axios会根据修改后的数据，自动设置请求头
                transformRequest:[function(data){
                    return qs.stringify(data);//把数据转化为QueryString
                }]
            }).then(res=>{
                return res.data;
            }).catch(err=>{
                return err;
            })
           
        // axios.create({
        // baseURL:'/api',
        // transformRequest: [function (data) { // <--- here 转换数据
        //      return qs.stringify(data); // 通过Qs.stringify转换为表单查询参数
        // }],
        // headers:{
        //     'Content-Type':'application/x-www-form-urlencoded'
        // }
        // // headers:{'Content-Tye':'application/json'}
        // })
    }
    
}
 
 