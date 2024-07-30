import style from "@/app/(auth)/auth.module.css";
import Link from "next/link";


import RegisterForm from "@/app/components/Auth/RegisterForm";
import HeroThree from "@/app/components/hero/HeroThree";
import MainLayout from "@/app/components/Layout/MainLayout";
import AuthNav from "@/app/components/Auth/AuthNav";


export const metadata = {
  title: "Register",
  description: "Register",
};

export default function Register() {
  return (
    <MainLayout>
      <section>
        <HeroThree />
      </section>
      <section>
        <div className={`${style.auth_wrapper} pt-5`}>

          <AuthNav />

          <div className={`${style.form_border}`}>
            <div className="authInfo d-flex flex-column align-items-center justify-content-center gap-3 mb-4 ">
              <h5>Welcome Back</h5>
              <p className="text-center">
                Enter the information while you are registering
              </p>
            </div>

            <RegisterForm />
          </div>

          <div className="d-flex mt-4 flex-column align-items-center justify-content-center gap-2">
            <Link
              href="/forget-password"
              className="font-16 fw-500 text-primary"
            >
              Forgot password?
            </Link>
            <p className="font-16 fw-500 text-black">
              All ready have account?{" "}
              <Link href="/login" className="me-1 ms-1 text-primary">
                Login
              </Link>
              Here
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
