import { Inter } from 'next/font/google'
import { PlusCircle } from 'lucide-react'
import TaskComponent from '@/components/task/Task'
import { useState } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Tasks() {

    const [tasks, setTasks] = useState<number[]>([1]);
    let index: number = tasks.length;

    function addTask() {
        const arr = [...tasks]
        arr.push(index + 1)
        setTasks(arr)
    }

    const onExcluirTask = (index: number) => {
        const arr = [...tasks]
        arr.splice(index, 1)
        setTasks(arr)
    }

    return (
        <div>
            <Head>
                <title>Gerenciador de lançamentos de horas</title>
            </Head>
            <main className={`flex min-h-screen bg-white flex-col w-full items-center ${inter.className}`}>
                <section id='tasks' className={`flex flex-wrap justify-stretch  align-top w-full p-3`}>
                    {tasks.map((element, index) => (

                        <TaskComponent key={index} id={index} title={`task-${element}`} onExcluirTask={onExcluirTask} />

                    ))}
                </section>

                <button className='fixed right-5 bottom-5' title='Nova task'>
                    <PlusCircle size={40} color='black' onClick={addTask}></PlusCircle>
                </button>
            </main>
        </div>
    )

}