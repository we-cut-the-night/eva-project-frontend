import { useState, useEffect } from 'react';
import { EMPLOYEES } from '../../utils/employees';
import { useFormWithValidation } from '../../utils/hooks/useValidation.js';
import Preloader from '../Preloader/Preloader';
import './Signin.css';

function Signin({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const { values, setValues, checkValidity, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onSubmit({
        email: values.email,
        password: values.password
      });
      setIsLoading(false);
    }, 700);
  };

  const setFormValues = () => {
    const randomInt = Math.floor(Math.random() * (EMPLOYEES.length + 1))
    const test_id = randomInt === 0 ? 1 : randomInt;
    const employee = EMPLOYEES.find(employee => employee.id === test_id + '');
    resetForm();
    setValues({...values, email: employee?.email, password: employee?.password});
  };

  useEffect(() => resetForm(), []);
  useEffect(() => checkValidity(), [values]);

  return (
    <main className='signin'>
      {
        isLoading ? <Preloader /> : (
          <>
            <div className='signin__wrapper'>
              <form className='signin__form' onSubmit={handleSubmit} noValidate>
                <h1 className='signin__header'>Авторизация</h1>
                <input
                  id='email'
                  name='email'
                  type='text'
                  className={errors?.email ? 'signin__input signin__input_error' : 'signin__input'}
                  placeholder='Введите ваш email'
                  onChange={handleChange}
                  value={typeof values.email === 'undefined' ? '' : values.email}
                />
                {errors?.email && (<span className='signin__error'>{errors.email}</span>)}
                <input
                  id='password'
                  name='password'
                  type='password'
                  className={errors?.password ? 'signin__input signin__input_error' : 'signin__input'}
                  placeholder='Введите ваш пароль'
                  onChange={handleChange}
                  value={typeof values.password === 'undefined' ? '' : values.password}
                />
                {!errors?.email && errors?.password && (<span className='signin__error'>{errors.password}</span>)}
                <label className='signin__remember' htmlFor='remember'>
                  <input className='signin__checkbox' id='remember' name='remember' type='checkbox' />
                  <div className='signin__checkbox-custom' />
                  <p className='signin__checkbox-subtitle'>Запомнить пароль</p>
                </label>
                <button
                  type='submit'
                  className={isValid ? 'signin__submit' : 'signin__submit signin__submit_disabled'}
                  disabled={!isValid}
                >
                  Войти
                </button>
              </form>
              <div className='signin__pic'></div>
            </div>
            <button className='signin__test-user' onClick={setFormValues}>Тест</button>
            <p className='signin__test-description'>
              Случайным образом подставить в форму авторизации логин и пароль одного из пользователей.
            </p>
          </>
        )
      }
    </main>
  );
}

export default Signin;
