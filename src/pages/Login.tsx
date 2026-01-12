import { Logo } from '@/components/Logo';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Logo at top-left */}
      <div className="absolute top-6 left-6">
        <Logo />
      </div>

      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-linear-to-tr from-blue-950 to-blue-900 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1581092334518-2e4b0c08f3c2?auto=format&fit=crop&w=800&q=80"
          className="w-4/5 rounded-2xl shadow-lg"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-10">
        <LoginForm />
      </div>
    </div>
  );
}
