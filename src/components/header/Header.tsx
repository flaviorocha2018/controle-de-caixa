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
                <Link href='/'>
                FERRAMENTAS
                </Link>
            </li>
            <li>
                <Link href='/'>
                A EMPRESA
                </Link>
            </li>
            <li>
                <Link href='/precos'>
                PREÇOS
                </Link>
            </li>
            <li>
                <Link href='/conteudo'>
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
                        <Link href='/videos'>
                        VÍDEOS & TUTORIAIS
                        </Link>
                        </li>
                        <li>
                        <Link href='/history'>
                        HISTÓRIAS DE SUCESSO
                        </Link>
                        </li>
                        <li>
                        <Link href='/materials'>
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