import axios from "axios";

// axios实例
var axiosInstance = axios.create({
  baseURL: "/api/",
  timeout: 5000,
  headers: {
    'ContentType': 'application/json;charset=UTF-8;',
  }
})

//请求拦截器 
axiosInstance.interceptors.request.use((config) => {
  //若为post，则将data参数转为 JSON字符串
  if (config.method === 'POST') {
    config.data = JSON.stringify(config.data);
  }
  return config;
}, (error) => {
  Promise.reject(error);
})


// 响应拦截器
axiosInstance.interceptors.response.use(response => {
  //响应成功
  return response.data;
}, error => {
  //响应错误
  return Promise.reject(error);
});

export default axiosInstance;