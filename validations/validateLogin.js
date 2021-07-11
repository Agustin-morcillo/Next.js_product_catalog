const regExp = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
}

export default function validateLogin(values) {
  const { email, password } = values

  let errors = {}

  if (!email) {
    errors.email = "Debes ingresar un email"
  } else if (!regExp.email.test(email)) {
    errors.email = "Debes ingresar un email válido"
  }

  if (!password) {
    errors.password = "Debes ingresar una constraseña"
  }

  return errors
}
