import { Minus, Plus, XCircle } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef } from 'react';


export interface CardProps {
    title?: string,
    href?: string,
    subtitle?: string,
    img: string
}
function CardComponent(props: CardProps) {
    const { title, href, img, subtitle } = props


    return (
        <a href={href} target='_blank'>
            <div className='xs:w-9/12 md:w-4/12 h-fit flex flex-wrap bg-gray-600 rounded'>
                <span className='w-full flex justify-center mt-2 text-black font-semibold  rounded'>
                    <img className='w-2/12 pl-2 ' src={img} alt='imagem' ></img>
                    <span className='w-10/12 flex pt-3 pl-3 align-middle'>@joaopedrofortes/angular-rating</span>
                </span>
                {/* <span className='w- font-bold text-black pl-3 text-sm '>
                    {title}
                </span>
                <span className='w-full text-black p-2'>
                    {subtitle}
                </span> */}
            </div>
        </a>
    );


}


export default CardComponent;