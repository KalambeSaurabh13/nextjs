import Link from "next/link";

export default function Product(){
    const productId = "100"
    return (
    <div>

        <h1>My Product List</h1>
        
        <Link href={"/product/1"} >Product 1</Link> <br />
        <Link href={"/product/2"} >Product 2</Link> <br />
        <Link href={"/product/3"} >Product 3</Link> <br />
        <Link href={`/product/${productId}`} replace >Product {productId}</Link> <br />


    </div>
)
}