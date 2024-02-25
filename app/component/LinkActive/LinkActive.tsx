"use client"
//用于显示导航栏
import { usePathname } from "next/navigation";
import Link from 'next/link'
const navLinks =[
    {name:'Home',href:'/'},
    {name:'Join' , href:'/Join'},
    {name:'Members' , href:'/Members'},
  ]
export default function LinkActive() {
    const pathname = usePathname()
    return (<>
        {
            navLinks.map((link:{href:string;name:string;})=>{
                const isActive:boolean = (pathname==link.href?true:false);
                // console.log(pathname)
                return (
                    <Link
                    className={isActive?' text-blue-400 flex-1':' text-black flex-1'}
                    href={link.href}
                    key={link.name}>
                        {link.name}
                    </Link>
                )
            })
        }
    </>)
  }
