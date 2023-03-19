import request from '@/utils/request'

export function getAllVehicles(query) {
  return request({
    url: `${process.env.BASE_API}/api/vehicle/v1/queryAllVehicles`,
    type: 'GET',
    data: query
  })
}

export function vehicleLicense(query) {
  return request({
    url: `${process.env.BASE_API}/api/vehicle/v1/vehicleLicense`,
    type: 'POST',
    data: query
  })
}
export function saveVehicle(data) {
  return request({
    url: `${process.env.BASE_API}/api/vehicle/v1/web/saveVehicle`,
    type: 'POST',
    data
  })
}
export function updateVehicle(data) {
  return request({
    url: `${process.env.BASE_API}/api/vehicle/v1/web/updateVehicle`,
    type: 'PUT',
    data
  })
}
export function deleteVehicle(data) {
  return request({
    url: `${process.env.BASE_API}/api/vehicle/v1/web/deleteVehicle`,
    type: 'DELETE',
    data
  })
}
