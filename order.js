import request from '@/utils/request'

export function getOrdersList(data) {
  return request({
    url: `${process.env.BASE_API}/api/order/v1/cvalue/orders`,
    type: 'GET',
    data
  })
}

export function createOrderSave(data) {
  return request({
    url: `${process.env.BASE_API}/api/order/v1/offline/save`,
    type: 'POST',
    data
  })
}
