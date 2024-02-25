import Image from 'next/image';
import Link from "next/link";
import MemberLink from '../component/MemberList';
import LinkActive from '../component/LinkActive/LinkActive';
export default function Page()
{
  const postData = [
    {id:1,slug:'href',title:'1'},
    {id:2,slug:'href',title:'2'},
    {id:3,slug:'href',title:'3'},
  ]
    return <>
   <div className=' flex flex-row flex-nowrap justify-center items-center text-center '>
      <LinkActive ></LinkActive>
    </div>
    <h1>芝士成员信息页面</h1> 
    <MemberLink posts={postData}></MemberLink>
    </>
}