import { Minus, Plus, XCircle } from 'lucide-react';
import { useState, useRef } from 'react';


export interface ITask {
    dataInicial: Date,
    dataFinal: Date
}

export interface TaskProps{
    id:number,
    title:string,
    onExcluirTask: any
}
function TaskComponent(props: TaskProps) {
    const { id, title, onExcluirTask }= props
    const [lancamentos, setLancamentos] = useState<ITask[]>([
        {
            dataInicial: new Date,
            dataFinal: new Date
        }
    ]);

    const lancamentosRef = useRef(null)

    const handleExcluir = () => {
        onExcluirTask(id);
    };


    const handleChangeDataInicial = (index: number, value: any) => {
        const novoArray = [...lancamentos];
        novoArray[index].dataInicial = value;
        setLancamentos(novoArray);
    };

    const handleChangeDataFinal = (index: number, value: any) => {
        const novoArray = [...lancamentos];
        novoArray[index].dataFinal = value;
        setLancamentos(novoArray);
    };


    const addLancamento = () => {
        setLancamentos([...lancamentos, {
            dataInicial: new Date,
            dataFinal: new Date
        }])
    }


    const removerLancamento = (index: number) => {
        const arr = [...lancamentos]
        arr.splice(index, 1)
        setLancamentos(arr)
    }

    function diff_hours(dt2: any, dt1: any) {
        if (!dt2 || !dt1) return 0;
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60);
        return diff
    }

    const calcularTotalLancamentos = () => {
        const arr = [...lancamentos];
        const map = arr.map((lancamento) => diff_hours(new Date(lancamento.dataFinal), new Date(lancamento.dataInicial)))
        return map.reduce((acc, cur) => acc += cur)
    }



    return (
        <div key={id} className='mobile-w  bg-neutral-900 rounded h-40 m-1'>
            <div className='flex flex-col p-1'>
                <div id='header' className='w-full flex'>
                    <p className='w-4/5 pl-1 text-center'>{title}</p>
                    <span className='w-1/5 flex justify-end'>
                        <button className='btn' onClick={handleExcluir}>
                            <XCircle size={20} />
                        </button>
                    </span>
                </div>
                <div id='lancamentos' className='h-24 overflow-y-auto' ref={lancamentosRef}>
                    {lancamentos.map((lancamento, index) => (
                        <div className='flex justify-between p-1' key={index}>
                            <input type="datetime-local" name="inicial" value={lancamento.dataInicial.toString()} onChange={(e) => handleChangeDataInicial(index, e.target.value)} />
                            <input type="datetime-local" name="final" value={lancamento.dataFinal.toString()} onChange={(e) => handleChangeDataFinal(index, e.target.value)} className='ml-1 mr-1' />
                            <button className='btn' title='Remover Lançamento' disabled={lancamentos.length == 1} onClick={() => removerLancamento(index)}><Minus size={12} /></button>
                            <button className='btn' title='Adicionar Lançamento' onClick={addLancamento}><Plus size={12} /></button>
                        </div>
                    ))}
                </div>

                <div id="total">
                    <div className='w-full flex justify-between p-1'>
                        <span>Horas Lançadas:  {calcularTotalLancamentos()}</span>
                    </div>
                </div>
            </div>
        </div>
    );


}


export default TaskComponent;