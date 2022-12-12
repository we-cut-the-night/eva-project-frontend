import { useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const isEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/);
  };

  const checkEmailValue = (email) => {
    isEmail(email) ?
      setErrors({ ...errors, email: '' })
      : setErrors({ ...errors, email: 'Введен некорректный Email' });
  };

  const checkPasswordValue = (password) => {
    password.length < 6 ?
      setErrors({ ...errors, password: 'Пароль должен содержать не менее 6 символов' })
      : setErrors({ ...errors, password: '' });
  };

  const checkValidity = () => {
    if (values.email && values.password) {
      (errors.email || errors.password) ? setIsValid(false) : setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    name === 'email' ? checkEmailValue(value) : checkPasswordValue(value);
  };

  const resetForm = () => {
    setValues({});
    setErrors({});
    setIsValid(false);
  };

  return { values, setValues, checkValidity, handleChange, errors, isValid, resetForm };
}
