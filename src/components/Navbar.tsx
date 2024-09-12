"use client";
import React from "react"; 
import Image from "next/image";
import { useState } from "react";

import logo from "@/app/assets/images/financial-svgrepo-com.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    
}

const navItems : NavItem[] = [
    {
        label: 'A EMPRESA', 
        link: '#', 
        children:[
            {
                label: "A Experiência",
                link: '#',
            },
            {
                label: "Valores",
                link: '#',
            },
            {
                label: "Missão",
                link: '#',
            },
           
        ], 
    },

    {
        label: 'SERVIÇOS',
        link: '#',
        children: [
            {
               label: 'Gestão Financeira com nosso sistema',
               link: '#',
            },
            {
                label: 'Gestão Financeira Terceirizada - (BPO Financeiro)',
                link: '#',
             },
             {
                label: 'Integrações da sua empresa com o nosso sistema',
                link: '#',
             }
        ]
    },
    {
        label: 'CONTEÚDO',
        link: '#',
        children: [
            {
               label: 'BLOG',
               link: '#',
            },
            {
                label: 'VÍDEOS E TUTORIAIS',
                link: '#',
             },
             {
                label: 'HISTÓRIAS DE SUCESSO',
                link: '#',
             },
             {
                label: 'MATERIAIS E LINKS',
                link: '#',
             }
        ]
    },

    {
        label: "PREÇOS",
        link: "#"
      },
      {
        label: "CONTATO",
        link: "#"
      }

];

export default function Navbar() {
    const [animationParent] = useAutoAnimate();
    const [isSideMenuOpen, setSideMenue] = useState(false);
    function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

    return(
        <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-0 text-sm">
         {/* left side data */}
         <section ref={animationParent} className="flex items-center gap-20">
         {/* logo */}
          <Image src={logo} alt=" logo" />

          {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                    >
                    
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

         {/* Right side data */}
         <section className=" hidden md:flex   items-center gap-6 ">
         <button className="h-fit rounded-xl border-2 border-neutral-400 px-8 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Login
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-8 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Cadastre-se
        </button>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>

    );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
    return (
      <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
        <div className=" h-full w-[65%] bg-white px-4 py-4">
          <section className="flex justify-end">
            <AiOutlineClose
              onClick={closeSideMenu}
              className="cursor-pointer text-4xl "
            />
          </section>
          <div className=" flex flex-col text-base  gap-2 transition-all">
            {navItems.map((d, i) => (
              <SingleNavItem
                key={i}
                label={d.label}
                link={d.link}
              >
                {d.children}
              </SingleNavItem>
            ))}
          </div>
  
          <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
              Login
            </button>
  
            <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
              Register
            </button>
          </section>
        </div>
      </div>
    );
  }
  
  function SingleNavItem(d: NavItem) {
    const [animationParent] = useAutoAnimate();
    const [isItemOpen, setItem] = useState(false);
  
    function toggleItem() {
      return setItem(!isItemOpen);
    }
  
    return (
      <Link
        ref={animationParent}
        onClick={toggleItem}
        href={d.link ?? "#"}
        className="relative   px-2 py-3 transition-all "
      >
        <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
          <span>{d.label}</span>
          {d.children && (
            // rotate-180
            <IoIosArrowDown
              className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
            />
          )}
        </p>
  
        {/* dropdown */}
        {isItemOpen && d.children && (
          <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
            {d.children.map((ch, i) => (
              <Link
                key={i}
                href={ch.link ?? "#"}
                className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
              >
                <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
              </Link>
            ))}
          </div>
        )}
      </Link>
    );
  }