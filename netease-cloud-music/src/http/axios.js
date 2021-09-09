import axiosInstance from "./index";

/**
 * 
 * @param method: String, 请求方法 
 * @param path: String,   请求的url
 * @param data: Object,   参数
 * @param config: Object  配置
 * @returns {Promise}
 * 
 */

const axios = ({
  method,
  path,
  data,
  config
}) => {
  method = method.toLowerCase(); //统一为小写
  if (method == 'post') {
    // const token = "3cf1c4cda290a10b9c2b5e25829740ccea6dfeee39b8af9a7bd20912d17caee19cb4377b2d7ba249"
    // config.headers.Authorization = 'Bearer ' + token
    return axiosInstance.post(path, data, { ...config })
  } else if (method == 'get') {
    return axiosInstance.get(path, {
      params: data,
      ...config
    })
  } else {
    console.error('unknown method' + method)
    return false
  }
}

export default axios;
