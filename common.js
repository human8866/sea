import request from '@/utils/request'

export function getGrades() {
  return request({
    url: `${process.env.BASE_API}/api/common/v1/grades`,
    type: 'GET'
  })
}

export function getSubjectsByGrade(gradeId) {
  return request({
    url: `${process.env.BASE_API}/api/course/v1/subject/list/${gradeId}`,
    type: 'GET'
  })
}

export function getGroupTypes() {
  return request({
    url: `${process.env.BASE_API}/api/common/v1/grouptypes`,
    type: 'GET'
  })
}

export function getTeacherTypes() {
  return request({
    url: `${process.env.BASE_API}/api/common/v1/teacher/types`,
    type: 'GET'
  })
}

export function getTeacherTypePrices() {
  return request({
    url: `${process.env.BASE_API}/api/common/v1/tprices`,
    type: 'GET'
  })
}

export function getTeacherListByGrade(data) {
  return request({
    url: `${process.env.BASE_API}/api/teacher/v1/teacherList`,
    type: 'GET',
    data
  })
}


