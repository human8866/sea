import request from '@/utils/request'

export function loginByUsername(data) {
  return request({
    url: `${process.env.BASE_API}/api/user/v1/web/login`,
    type: 'POST',
    data
  })
}

