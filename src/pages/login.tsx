import { BASE_URL } from '@/configs'
import Layout from '@/ui/Layout'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'
import { BsGithub, BsGoogle } from 'react-icons/bs'

const LoginPage = () => {
  const { data: session } = useSession()
  const { push } = useRouter()
  const onGithubLogin = () => {
    signIn('github', {
      callbackUrl: BASE_URL,
    })
  }
  const onGoogleLogin = () => {
    signIn('google', {
      callbackUrl: BASE_URL,
    })
  }
  useEffect(() => {
    if (session?.user?.email) {
      push('/')
    }
  }, [session?.user?.email, push])

  return (
    <div className='flex flex-col items-center pt-20'>
      <h3 className='text-3xl'>LOGIN | PC Builder X</h3>
      <div className='my-10 flex flex-col gap-3'>
        <p
          className='flex items-center cursor-pointer px-10 py-3 border-[1px] border-current rounded-full text-sky-500 hover:bg-sky-500 hover:text-white hover:border-white transition-colors'
          onClick={onGoogleLogin}>
          Login with Google
          <BsGoogle className='ml-2 mt-1' />
        </p>
        <p
          className='flex items-center cursor-pointer px-10 py-3 border-[1px] border-current rounded-full text-gray-400 hover:bg-gray-400 hover:text-white hover:border-white transition-colors'
          onClick={onGithubLogin}>
          Login with Github
          <BsGithub className='ml-2 mt-1' />
        </p>
      </div>
    </div>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='Login | PC Builder X'>{page}</Layout>
}

export default LoginPage
