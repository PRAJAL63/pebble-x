import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ForgetPasswordSchema from '@/schema/auth/ForgetPasswordSchema';
import { forgetPassword } from '@/lib/services/auth';
import { Logo } from '@/components/Logo';

export default function ForgetPassword() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof ForgetPasswordSchema>>({
    resolver: zodResolver(ForgetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });
  const handleForgetPassword = async (values: z.infer<typeof ForgetPasswordSchema>) => {
    try {
      const response = await forgetPassword(values);
      if (response) {
        navigate('/reset-password');
      }
    } catch (error) {
      console.log(error);
      setError('Unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Logo at top-left */}
      <div className="absolute top-6 left-6">
        <Logo />
      </div>

      <div className="hidden lg:flex w-1/2 bg-linear-to-tr from-green-950 to-green-900 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1581091215362-32f0f2286ca0?auto=format&fit=crop&w=800&q=80"
          alt="Hardware wala image"
          className="w-4/5 rounded-2xl shadow-lg text-white"
        />
      </div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-10">
        <div className="max-w-md w-full mx-auto ">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Forget Password</h2>
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleForgetPassword)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300 font-semibold mt-4"
              >
                Send Reset Link
              </Button>
            </form>
          </Form>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-teal-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
