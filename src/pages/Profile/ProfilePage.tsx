import { SubmitHandler, useForm } from 'react-hook-form';
import Title from '../../components/Title/Title';
import { useAuth } from '../../hooks/useAuth';
import classes from './profilePage.module.css';
import { useEffect } from 'react';
import { UserUpdate } from '../../models/UserUpdate';
import { Link } from 'react-router-dom';

function ProfilePage() {

    const { user, update } = useAuth();
    const { handleSubmit, register, formState: { errors }, reset } = useForm<UserUpdate>();

    useEffect(() => {
        reset(user);
    }, [])

    const submit: SubmitHandler<UserUpdate> = async (data) => {
        await update(data);
    }

    return (
        <section className={classes.container}>
            <Link to='/' className={classes.back}>&lt; &nbsp;Regresar</Link>
            <div className={classes.details}>
                <Title title='Perfil' margin='20px 0 30px 0' />
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

                    <label className={classes.labelInput}>Nueva Contraseña</label>
                    <input
                        type="password"
                        {...register('newPassword')}
                        placeholder='Ingresa la contraseña'
                    />

                    <hr className={classes.hr} />

                    <label className={classes.labelInput}>Contraseña actual</label>
                    <input
                        type="password"
                        {...register('currentPassword', { required: true })}
                        placeholder='Ingresa la contraseña'
                    />
                    {
                        errors.currentPassword && (
                            <p className={classes.errorText}>La contraseña actual es requerida</p>
                        )
                    }

                    <button type='submit'>Actualizar</button>
                </form>
            </div>
        </section>
    )
}

export default ProfilePage