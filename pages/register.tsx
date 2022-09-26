import type { NextPage } from 'next';
import {
  LockOpenIcon,
} from '@heroicons/react/24/solid';
import { useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Register: NextPage = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    watch,
  } = useForm({ mode: 'onChange' });

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;

    toast.success('Register successful!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log(email, password);
  };

  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='flex flex-col h-[500px] w-[700px] border-2 border-[#eee] rounded'>
        <div className='flex flex-row items-center px-4 h-[50px] bg-gray-200 rounded justify-between'>
          <div className='flex flex-row items-center'>
            <span className='mr-2'>Register</span>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center grow h-1 p-4'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col h-[300px] w-[300px]'>
              <span className='field-label'>E-mail</span>
              <input
                {...register('email', {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type='text'
                className='text-field'
              />
              {errors.email?.type === 'required' && (
                <span className='error-message'>This field is required</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span className='error-message'>This e-mail is invalid</span>
              )}

              <span className='field-label mt-2'>Senha</span>
              <input
                {...register('password', {
                  required: true,
                })}
                type='password'
                className='text-field'
              />
              {errors.password?.type === 'required' && (
                <span className='error-message'>This field is required</span>
              )}

              <span className='field-label mt-2'>Confirmar senha</span>
              <input
                {...register('confirmPassword', {
                  required: true,
                  validate: (value) => value === password.current,
                })}
                type='password'
                className='text-field'
              />
              {errors.confirmPassword?.type === 'required' && (
                <span className='error-message'>This field is required</span>
              )}
              {errors.confirmPassword?.type === 'validate' && (
                <span className='error-message'>
                  <span className='error-message'>Passwords don\'t match</span>
                </span>
              )}

              <button
                disabled={!isDirty || !isValid}
                className='button mt-3'
                type='submit'
              >
                <LockOpenIcon className='rounded h-5 w-5 mr-3' />
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
