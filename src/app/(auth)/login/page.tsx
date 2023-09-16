import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
    return <main className="w-full h-screen lg:grid lg:grid-cols-2">
        <div className="lg:w-full bg-[url('/kampus.png')] bg-cover bg-no-repeat bg-center"> 
        </div>

        <div className="h-full flex flex-col items-center overflow-x-hidden bg-[#F8F8FA]">
            <div className='mt-5 md:mt-8 lg:mt-0'>
                <Image src='/logo.png' alt='logo' width={150} height={150} className='mt-5 md:w-[200px]'></Image>
            </div>

            <div className='flex flex-col items-center mt-5'>
                <p className='text-[25px] font-bold md:text-[30px] lg:text-[28px]'>WELCOME BACK!</p>
                <p className='text-[15px] text-[#6B6B6B] mt-1 md:text-[20px]'>Please enter your details</p>
            </div>

            <form action="" className='w-screen flex flex-col items-center mt-10'>
                <div className='w-4/5 flex flex-col gap-2 md:w-[65%] lg:w-[30%]'>
                    <label htmlFor="email">Email</label>
                    <input className='h-[35px] border border-[#CED4DA] px-3 rounded-md' type="text" id='email' />
                </div>

                <div className='w-4/5 flex flex-col gap-2 mt-5 md:w-[65%] lg:w-[30%]'>
                    <label htmlFor="password">Password</label>
                    <input className='h-[35px] border border-[#CED4DA] px-3 rounded-md' type="password" id='password' />
                </div>

                <div className='w-4/5 flex justify-between items-center mt-5 md:w-[65%] lg:w-[30%]'>
                    <div className=''> 
                        <input type="checkbox" id='checkbox' />
                        <label className='text-[14px] lg:text-[16px]' htmlFor='checkbox'> Remember me</label>
                    </div>

                    <span className='text-[14px] text-[#6B6B6B] lg:text-[16px]'>Forgot password?</span>
                </div>

                <div className='w-4/5 flex flex-col gap-6 mt-5 md:w-[65%] lg:w-[30%] lg:mt-7'>
                    <button type='submit' className='bg-black text-white font-bold rounded-3xl py-3 hover:bg-[#333333] '>Log in</button>
                    <button className='flex justify-center gap-x-3 bg-[#DDD] font-bold rounded-3xl py-3 hover:bg-[#cacaca]'><Image src='/search.png' alt='google' width={24} height={24}></Image>Log in with Google</button>
                </div>
            </form>

            <div className='mt-10'>
                <p>Don't have an account? <Link href='../register'>Sign up</Link></p>
            </div>
        </div>
    </main>;
}
