import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '@/lib/services/auth';
import loginSchema from '@/schema/auth/loginSchema';
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

export default function LoginForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isSubmitting } = form.formState;

  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    // Reset error state
    setError('');

    try {
      const response = await login({ email: values.email, password: values.password });

      // Store token if provided
      if (response.body.token) {
        localStorage.setItem('authToken', response.body.token);
      }

      console.log('Login successful:', response);

      // Navigate to homepage or dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel>Password</FormLabel>

                  <Link to="/forget-password" className="text-sm text-indigo-600 hover:underline">
                    Forget Password?
                  </Link>
                </div>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition duration-300 font-semibold cursor-pointer"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </Form>
      <p className="text-center mt-4 text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
