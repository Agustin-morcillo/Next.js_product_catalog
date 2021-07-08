import { useState, useEffect } from "react"

export default function useFormValidation(initalState, validate, fn) {
  const [values, setValues] = useState(initalState)
  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    if (formSubmitted) {
      const noError = Object.keys(errors).length < 1

      if (noError) {
        fn()
      }
      setFormSubmitted(false)
    }
    // eslint-disable-next-line
  }, [formSubmitted])

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate(values)
    setErrors(validationErrors)
    setFormSubmitted(true)
  }

  return {
    values,
    errors,
    handleSubmit,
    handleChange,
  }
}
