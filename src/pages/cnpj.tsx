import { Inter } from 'next/font/google';
import { useState } from 'react';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

type Empresa = {
    nomeFantasia: string
    qsa: any
    razaoSocial: string
    telefone1: string
    telefone2: string

}
export default function Tasks() {

    const [cnpj, setCnpj] = useState<string>('');
    const [empresa, setEmpresa] = useState<Empresa | undefined>(undefined);

    const url: string = 'https://brasilapi.com.br/api/cnpj/v1/'

    const onChangeCNPJ = (e) => {
        const cnpj = e.target.value.replace(/[.-]/g, '');
        setCnpj(cnpj)
    }

    const handleSearch = () => {
        if (!cnpj) { setEmpresa(undefined); return }
        if (cnpj.length < 14) return;
        buscarCNPJ();
    }

    const buscarCNPJ = async () => {
        const urlCNPJ = url + cnpj;

        try {
            const response = await fetch(`${url}${cnpj}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar CNPJ');
            }
            const data = await response.json();
            console.log(data)
            setEmpresa({ qsa: data.qsa, nomeFantasia: data.nome_fantasia, razaoSocial: data.razao_social, telefone1: data.ddd_telefone_1, telefone2: data.ddd_telefone_2 }); // Armazena os dados da empresa no estado
        } catch (error) {
            console.error('Erro ao buscar CNPJ:', error);
            // Aqui você pode adicionar uma lógica para tratamento de erro, como exibir uma mensagem ao usuário
        }
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <Head>
                <title>Consulta de dados cnpj</title>
            </Head>
            <main className={`flex min-h-screen bg-white flex-col w-full items-center ${inter.className}`}>
                <div className="bg-gray-100 text-gray-800 p-4 shadow-md text-center">
                    Os dados apresentados nessa tela são dados públicos que foram recuperados através da API:
                    <a href="https://brasilapi.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-500 ml-1">https://brasilapi.com.br/</a>
                </div>
                <section className={`flex flex-wrap justify-stretch  align-top w-full p-3 text-black`}>
                    <div className='w-full flex mr-2'>
                        <div className={`w-2/3`}>
                            <label htmlFor="cnpj">CNPJ:</label>
                            <input
                                id="cnpj"
                                placeholder="Digite o CNPJ"
                                autoComplete="off"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={cnpj}
                                onChange={onChangeCNPJ}
                                onKeyDown={handleKeyDown}
                                maxLength={14}
                            />
                        </div>
                        <div className={`w-1/3 mt-6 ml-2`}>

                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleSearch}>
                                Pesquisar
                            </button>
                        </div>
                    </div>
                    <div className={`w-full  mr-2 mt-10`}>
                        {empresa && (


                            <div className={`rounded overflow-hidden shadow-lg bg-gray-100 w-100`}>
                                <div className="px-6 py-4 ">
                                    <div className="font-bold text-xl mb-2"> {empresa?.nomeFantasia ? empresa.nomeFantasia : ''} ( {empresa?.razaoSocial} )</div>
                                    <p className="text-gray-700 text-base">
                                        <strong>Telefone 1:</strong> {empresa?.telefone1}
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        <strong>Telefone 2:</strong> {empresa?.telefone2 ? empresa.telefone2 : '-'}
                                    </p>

                                    <p className="text-gray-700 text-base w-full flex flex-wrap justify-between">
                                        {empresa?.qsa?.map((socio: any, index: number) => (
                                            <div key={index} className="mt-2 w-4/12">
                                                <div>
                                                    <strong>Sócio:</strong> {socio.nome_socio}
                                                </div>
                                                {socio.cnpj && (
                                                    <div>
                                                        <strong>Representante:</strong> {socio.nome_representante_legal || 'Não especificado'}
                                                    </div>
                                                )}
                                                <div>
                                                    <strong>Qualificação / Posição:</strong> {socio.qualificacao_socio}
                                                </div>
                                            </div>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )

}