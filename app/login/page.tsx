import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex items-center h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">

        <LoginForm />
      </div>


            <Link
                href={'/'}
                type="button"
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
                className="absolute flex items-center gap-5 self-end rounded-lg bg-cyan-800 m-3 p-6 text-2xl font-medium text-white transition-colors hover:bg-cyan-700"
            >
                <span>Назад</span>
            </Link>
    </main>
  );
}
