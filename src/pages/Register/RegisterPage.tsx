import { SubmitHandler, useForm } from 'react-hook-form'
import classes from './registerPage.module.css'
import Title from '../../components/Title/Title';
import { Link, useNavigate } from 'react-router-dom';
import { UserRegister } from '../../models/UserRegister';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

function RegisterPage() {

    const { handleSubmit, register, formState: { errors } } = useForm<UserRegister>();
    const { register: registerUser, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;
        navigate('/tracks');
    }, [user])

    const submit: SubmitHandler<UserRegister> = async (data) => {
        await registerUser(data);
    }

    return (
        <div className={classes.container}>
            <Link to='/' className={classes.back}>&lt; &nbsp;Ir al inicio</Link>
            <div className={classes.details}>
                <Title title='Registro' />
                <form onSubmit={handleSubmit(submit)}>
                    <label className={classes.labelInput}>Nombre</label>
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        placeholder='Ingresa tu nombre'
                    />
                    {
                        errors.name && (
                            <p className={classes.errorText}>El nombre es requerido</p>
                        )
                    }

                    <label className={classes.labelInput}>Apellido</label>
                    <input
                        type="text"
                        {...register('lastname', { required: true })}
                        placeholder='Ingresa tu apellido'
                    />
                    {
                        errors.lastname && (
                            <p className={classes.errorText}>El apellido es requerido</p>
                        )
                    }

                    <label className={classes.labelInput}>Celular</label>
                    <input
                        type="text"
                        {...register('phone')}
                        placeholder='Ingresa tu celular'
                    />

                    <label className={classes.labelInput}>Género</label>
                    <input
                        type="text"
                        {...register('gender')}
                        placeholder='Ingresa tu género'
                    />

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
                        placeholder='Ingresa la contraseña'
                    />
                    {
                        errors.password && (
                            <p className={classes.errorText}>La contraseña es requerida</p>
                        )
                    }

                    <button type='submit'>Registrar</button>
                </form>

                <div className={classes.login}>
                    Eres usuario? &nbsp;
                    <Link to='/login'>
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage