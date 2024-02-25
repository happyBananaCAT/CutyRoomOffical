import Image from 'next/image';
import Link from "next/link";
import LinkActive from '../component/LinkActive/LinkActive';
export default function Page()
{
    return <>
    <div className=' flex flex-row flex-nowrap justify-center items-center text-center '>
      <LinkActive ></LinkActive>
    </div>
    <h1>芝士信息收集页面</h1></>
}