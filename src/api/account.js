import $http from '../util/http.js'

export function getQcxinfo() {
  const url = '/'
  return $http.post(url)
}
/**
 * @name 登录
 * @param {Object} options {account, password}
 */
export function doLogin(options) {
  if (options.account && options.password) {
    const url = '/user/login'
    const data = `account=${options.account}&password=${options.password}`
    return $http.post(url, data)
  }
}

/**
 * @name 注销
 */
export function doLogout() {
  const url = '/user/logout'
  return $http.post(url)
}

/**
 * @name 获取身份信息
 */
export function getStuInfo() {
  const url = '/user/getInfo'
  return $http.post(url)
}

export function query(stuId) {
  const url = '/scoreDetail/query'
  const data = `stuId=${stuId}`
  return $http.post(url, data)
}

export function getCivil() {
  const url = '/civil/getList'
  return $http.post(url)
}

