import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: `${process.env.BASE_API}/api/teacher/v1/list`,
    type: 'GET',
    data: query
  })
}

export function updateTeacher(data) {
  return request({
    url: `${process.env.BASE_API}/api/teacher/v1/update`,
    type: 'PUT',
    data
  })
}

export function setTeacherStatusAuth(data) {
  return request({
    url: `${process.env.BASE_API}/api/teacher/v1/auth`,
    type: 'PATCH',
    data
  })
}

export function setTeacherIsShow(data) {
  return request({
    url: `${process.env.BASE_API}/api/teacher/v1/show`,
    type: 'PATCH',
    data
  })
}

export function deleteTeacher(id) {
  return request({
    url: `${process.env.BASE_API}/api/teacher/v1/delete`,
    type: 'DELETE',
    data: {
      id
    }
  })
}

