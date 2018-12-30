export const sortByDate = (array) => {
  return array.sort(function (a, b) {
    return new Date(b.created_at) - new Date(a.created_at)
  })
}

export const fromLastWeek = (array) => {
  return array.filter((element) => {
    return new Date(element.created_at) > new Date(new Date().setDate(new Date().getDate() - 7))
  })
}

export const dateReplaceTZ = (array) => {
  for (let key in array) {
    array[key].created_at = array[key].created_at.replace('T', ' ').replace('Z', '')
  }
  return array
}
