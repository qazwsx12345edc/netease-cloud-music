import axios from "./axios";

const GET = ({ path, data }) => {
  return axios({
    path: path,
    method: "get",
    data,
    config: {
      headers: {
      },
      timeout: 6000
    }
  })
}


const POST = ({ path, data }) => {
  return axios({
    path: path,
    method: "post",
    data,
    config: {
      headers: {
        // 'ContentType': 'application/json;charset=UTF-8;',
      },
      timeout: 6000
    }
  })
}

window.GET = GET
window.POST = POST