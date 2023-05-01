import AvatarComponent from '@/components/avatar/Avatar'
import { Github, Linkedin, Mail, CornerDownRight, Lightbulb } from 'lucide-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [showGratuation, setShowGraduation] = useState(false);

  function changeGratuation() {
    setShowGraduation(!showGratuation);
  }

  return (
    <div>
      <Head>
        <title>João Pedro Fortes</title>
      </Head>
      <main className={`main flex min-h-screen flex-col items-center md:p-24 ${inter.className}`}>
        <section className={`bg-black rounded-t w-full container `}>
          <div className="flex flex-row p-2 md:w-1/4  ">
            <div className="w-20">
              <AvatarComponent
                src={'./assets/img/avatar.jpg'}
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col justify-center pl-2 ">
              <h2 className="text-md">João Pedro Fortes</h2>
              <h4 className="text-sm">Software Developer</h4>
              <span className='flex justify-between w-1/2'>
                <Link href='https://github.com/JoaoPedroFortes' target="_blank">
                  <Github size={20} ></Github>
                </Link>
                <Link href='https://www.linkedin.com/in/joao-pedro-fortes/' target="_blank">
                  <Linkedin size={20} color='#0077b5'></Linkedin>
                </Link>
                <Link href='mailto:jpedrofortes@outlook.com'>
                  <Mail size={20} className='animate-bounce' ></Mail>
                </Link>
              </span>
            </div>
          </div>
        </section>
        <section className={`bg-black container rounded-b h-80 overflow-y-auto`}>
          <div className='flex flex-wrap justify-start p-2'>
            <span className='w-full flex'><Lightbulb size={20} color='yellow' /> <span className='ml-1'>Utils</span></span>
            <span className='ml-2 mt-1 flex'>
              <CornerDownRight size={15} /> <Link href="/tasks" className='ml-1'>Gerenciador de lançamentos de horas</Link>
            </span>
          </div>

        </section>
      </main>
    </div>

  )
}
