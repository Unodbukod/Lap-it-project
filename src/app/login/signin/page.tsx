'use client'
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

// Triaged, use Snackbar for notification alerts
const schema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const SignInPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormFields> = async ({ username, password }) => {
    try {
      const signInData = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      if (signInData?.error) {
        console.error(signInData.error);
        alert('Login failed. Account does not exist');
      } else {
        // Successful login
        router.push('/login/dashboard/client');
        alert('Login successful!');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      alert('An unexpected error occurred during login. Please try again later.');
    }
  };

return (
    <div className="relative h-screen">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/bgimage.svg')",
      filter: "blur(0px)", // Adjust the blur radius as needed
    }}
  />
  <main className="relative z-10 flex justify-center items-center h-full flex-col">
    <a href="/" className="absolute top-0 left-0 m-4 text-amber-50">Back to Home</a>
    <img src="/Lapwhitelogo.svg" alt="Logo" className="w-40 h-auto mt-8" />
    <div className="bg-white rounded-lg flex items-center mt-8">
      <div className="">
        <img src="/signupleftimage.svg" alt="Image" className="w-64 h-3/6" />
      </div>
      <div className="pt-5">
        <h1 className="text-3xl font-semibold mb-1 ml-60">Login</h1>
        <p className="text-lg mb-4 ml-32 mr-32">Welcome Back! Please enter your details</p>
        <form onSubmit={handleSubmit(onSubmit)} className="pb-20 pl-28 text-xs items-center">
          <div className="mb-4 w-9/12">
            <input {...register('username')} name="username" type="text" placeholder="Username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4 w-9/12">
            <input {...register('password')} type="password" name="password" placeholder="Password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors duration-300 w-9/12">Login</button>
            <br />
            <br />
            <button type="submit" className="bg-black text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition-colors duration-300 w-9/12">Continue with Google</button>
          </div>
          <div>
          {errors.username && <div>{errors.username.message}</div>}
          {errors.password && <div>{errors.password.message}</div>}
          </div>
          <br />
          <h1 className="ml-24">Dont have an account? <a href="/login/signup">Register Here</a></h1>
        </form>
      </div>
    </div>
  </main>
</div>
)
};

export default SignInPage;


