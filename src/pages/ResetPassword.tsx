import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
import { Logo } from '@/components/Logo';

export default function ResetPassword() {
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
        <ResetPasswordForm />
      </div>
    </div>
  );
}
