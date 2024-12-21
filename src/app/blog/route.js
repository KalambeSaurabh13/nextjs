import { blogData } from "./blogsData";

export async function GET(){
    return Response.json(blogData)
}

export async function POST(request){
    const newData = await request.json();
    const newBlogData ={
        id: blogData.length + 1,
        text: newData
    }
    blogData.push(newBlogData);

    return new Response(JSON.stringify(newBlogData),{
        headers: { 'Content-Type': 'application/json' },
        status: 201,
    },
)
}