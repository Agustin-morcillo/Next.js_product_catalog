const regExp = {
  url: /^(ftp|http|https):\/\/[^ "]+$/,
}

export default function validateCreateProduct(values) {
  const { name, company, url, description } = values

  let errors = {}

  if (!name) {
    errors.name = "Debes ingresar un nombre"
  }

  if (!company) {
    errors.company = "Debes ingresar una empresa"
  }

  if (!url) {
    errors.url = "Debes ingresar una url"
  } else if (!regExp.url.test(url)) {
    errors.url = "Debes ingresar una url válida"
  }

  if (!description) {
    errors.description = "Debes ingresar una descripción"
  }

  return errors
}
