'use client'
import AvatarComponent from '@/components/avatar/Avatar'
import CardComponent from '@/components/card/Card'
import { Github, Linkedin, Mail, CornerDownRight, Lightbulb } from 'lucide-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import Head from 'next/head'
import { yellow } from '@radix-ui/colors'

const inter = Inter({ subsets: ['latin'] })
import '@sinm/react-chrome-tabs/css/chrome-tabs.css';
import { TabProperties } from '@sinm/react-chrome-tabs/dist/chrome-tabs'
import dynamic from 'next/dynamic'

const Tabs = dynamic(() => import('@sinm/react-chrome-tabs').then(m => m.Tabs), { ssr: false })
export default function Home() {


  const page: any = {
    skills: <>
      <div className='row  '>
        <div className='w-100 '>
          <h1>Principais</h1>
          <p className='mt-1'> Java(17 | 8+); Angular (JS | 2+ | Material); PostgreSQL; Azure Devops;</p>
        </div>
        <div className='w-100'>
          <h1>Secundárias</h1>
          <p className='mt-1'> NodeJS; Firebase; React + NextJS ; Github Actions</p>
        </div>
      </div>
    </>
  }

  const [utilActive, setUtilActive] = useState(false);

  const utils = 'Links'
  const skills = 'Habilidades'
  const contact = 'Contato'


  function changeUtilActive() {
    setUtilActive(!utilActive);
  }

  const UTILS = "tab-utils";
  const SKILLS = "tab-skills";
  const CONTACT = "tab-contact";

  const [tabs, setTabs] = useState<TabProperties[]>([
    { id: SKILLS, title: skills, active: true },
    { id: UTILS, title: utils },
  ]);
  const [activeTab, setActiveTab] = useState<String>(SKILLS);

  const reorder = () => {

  }

  const active = (id: string) => {
    setActiveTab(id);
    setTabs(tabs.map((tab) => ({ ...tab, active: id === tab.id })));
  }

  const close = () => {

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
              <h4 className="text-sm">Desenvolvedor Web</h4>
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
        <section className={`bg-black container rounded-b h-fit overflow-y-auto`}>
          <div className='flex flex-wrap justify-start p-2'>
            <span className='w-full flex'><Lightbulb size={20} color='yellow' fill={utilActive ? 'yellow' : ''} onClick={changeUtilActive} /> <span className='ml-1 cursor-pointer' onClick={changeUtilActive}>Utils</span></span>
            {
              utilActive && (
                <span className='ml-2 mt-1 flex flex-wrap'>
                  <div className='w-full flex'>
                    <CornerDownRight size={15} /> <Link href="/tasks" className='ml-1 hover:text-gray-700'>Calculadora de horas para tasks (Azure devops)</Link>

                  </div>
                  <div className='w-full flex' >
                    <CornerDownRight size={15} /> <Link href="/cnpj" className='ml-1 hover:text-gray-700'>Consulta de CNPJ na API Brasil </Link>

                  </div>
                </span>
              )
            }
          </div>
        </section>
        <section className={`bg-black container`}>
          <span className='ml-2 mt-1 flex flex-wrap'>
            {/* <div className='w-full'>
              <CardComponent title='Angular 18 rating lib' img='assets/img/npm.svg' href='https://www.npmjs.com/package/@joaopedrofortes/angular-rating'></CardComponent>
            </div> */}
            <div className='w-full'>
              <Tabs
                className={'font-bold j-black'}
                onTabClose={close}
                onTabReorder={reorder}
                onTabActive={active}
                tabs={tabs}
              />
            </div>
            <div className='w-full j-black  mt-2 h-80 rounded-b'>
              {
                activeTab === SKILLS && (
                  <div className='xs:w-12/12 md:w-12/12'>
                    {page.skills}
                  </div>
                )
              }

             

              {
                activeTab === UTILS && (
                  <div>
                    
                    <Link target='_blank' href={'https://www.npmjs.com/package/@joaopedrofortes/angular-rating'}>npm @joaopedrofortes/angular-rating</Link>
                  </div>
                )
              }
            </div>
          </span>
        </section>
      </main>
    </div>

  )
}
