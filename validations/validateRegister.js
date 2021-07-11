const regExp = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
}

export default function validateRegister(values) {
  const { username, email, password } = values

  let errors = {}

  if (!username) {
    errors.username = "Debes ingresar un nombre"
  }

  if (!email) {
    errors.email = "Debes ingresar un email"
  } else if (!regExp.email.test(email)) {
    errors.email = "El email debe tener un formato válido"
  }

  if (!password) {
    errors.password = "Debes ingresar una constraseña"
  } else if (password.length < 6) {
    errors.password = "La constraseá debe tener al menos 6 caracteres"
  }

  return errors
}
