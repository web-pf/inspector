export default function objectToFormData(obj: object) {
  const formdata = new FormData()
  Object.keys(obj).forEach(key => {
    formdata.append(key, JSON.stringify(obj[key]))
  })

  return formdata
}
