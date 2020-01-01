import { $axios } from 'axios'

/**
 * @name 申诉
 * @param {string} teamCode --团队码
 * @param {string} state --申诉说明
 * @param {'person', 'team'} type --学生固定申诉类型为 person
 */
export function appeal(teamCode, state, type = 'person') {
  const url = 'appealScore/add'
  const data = `teamCode=${teamCode}&state=${state}&type=${type}`
  return $axios.post(url, data)
}

