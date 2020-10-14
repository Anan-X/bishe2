import {request} from './request'

// 密码登陆请求
export function apiLogin (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
// 注册
export function apiRegister (data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}
// 判读用户名是否可用
export function isUsername (username) {
  return request({
    url: '/isusername',
    method: 'get',
    params: {
      username
    }
  })
}



