import type { NextPage } from 'next';
import {
  LockOpenIcon,
} from '@heroicons/react/24/solid';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Login: NextPage = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;

    toast.success('Login successful!', {
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
            <span className='mr-2'>Login</span>
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

              <button
                disabled={!isDirty || !isValid}
                className='button mt-3'
                type='submit'
              >
                <LockOpenIcon className='rounded h-5 w-5 mr-3' />
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
