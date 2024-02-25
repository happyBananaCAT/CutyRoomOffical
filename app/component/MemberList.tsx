//用于排列成员信息
//需要修改
import Link from "next/link"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
export default function MemberLink({posts}){
    return (
        <>
        <ul>    
            {   posts.map((item: { id: Key; slug: string; title: string})=>(
                <>
                    <li key = {item.id}>
                        <Link href ={`/blog/${item.slug}`}>{item.title}</Link>
                    </li><br/>
                </>
                    )
                )
            }
        </ul>
        </>
    )
}