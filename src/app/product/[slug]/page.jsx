import Link from "next/link";
import { notFound } from "next/navigation"

export const generateMetadata = ({params})=>{
  return {
    title: `Product is ${params.slug}`
  }
}

export default async function ProductId({ params }) {
    const slug = (await params).slug

    if(slug >100){
      notFound();
    }
    return <div>My Post: {slug} <br />
    <Link href="/product" >Go Back</Link>
    </div>
  }