import { SubmitHandler, useForm } from 'react-hook-form'
import Title from '../../components/Title/Title'
import classes from './loginPage.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserLogin } from '../../models/UserLogin';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

function LoginPage() {

  const { handleSubmit, register, formState: { errors } } = useForm<UserLogin>();
  const { login, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    navigate('/tracks');
  }, [user])

  const submit: SubmitHandler<UserLogin> = async data => {
    await login(data);
  }

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title='Iniciar Sesión' />
        <form onSubmit={handleSubmit(submit)}>
          <label className={classes.labelInput}>Correo</label>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder='Ingresa tu correo'
          />
          {
            errors.email && (
              <p className={classes.errorText}>El correo es requerido</p>
            )
          }

          <label className={classes.labelInput}>Contraseña</label>
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder='Ingresa tu contraseña'
          />
          {
            errors.password && (
              <p className={classes.errorText}>La contraseña es requerida</p>
            )
          }

          <button type='submit'>Iniciar</button>
        </form>

        <div className={classes.register}>
          Nuevo usuario? &nbsp;
          <Link to='/register'>
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage