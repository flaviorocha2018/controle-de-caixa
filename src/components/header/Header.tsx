'use client';
import { MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const Header = () => {
    const currentPath = usePathname();


    return (
       <nav className='flex items-center justify-center bg-primary py-4'>
        <ul className='flex gap-2'>
            <li>
                <Link href='/' data-active={currentPath === '/'} className='data-[active=true]: underline'>
                Página Inicial
                </Link>
            </li>
            <li>
                <Link href='/' data-active={currentPath === '/'} className='data-[active=true]: underline'>
                SOBRE O CONTROLE DE CAIXA
                </Link>
            </li>
            <li>
                <Link href='/precos' data-active={currentPath === '/'} className='data-[active=true]: underline'>
                PREÇOS
                </Link>
            </li>
            <li>
                <Link href='/conteudo' data-active={currentPath === '/'} className='data-[active=true]: underline'>
                CONTEÚDO
                </Link>
                <nav>
                    <ul>
                        <li>
                         <Link href='/blog'>BLOG
                         <MdOutlineOpenInNew />
                         </Link>
                        </li>
                        <li>
                        <Link href='/videos' data-active={currentPath === '/'} className='data-[active=true]: underline'>
                        VÍDEOS & TUTORIAIS
                        </Link>
                        </li>
                        <li>
                        <Link href='/history' data-active={currentPath === '/'} className='data-[active=true]: underline'>
                        HISTÓRIAS DE SUCESSO
                        </Link>
                        </li>
                        <li>
                        <Link href='/materials' data-active={currentPath === '/'} className='data-[active=true]: underline'>
                        MATERIAIS
                        </Link>
                        </li>
                    </ul>
                </nav>
            </li>
        </ul>
       </nav>


    );
};