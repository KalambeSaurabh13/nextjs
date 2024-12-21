import { comments } from "./data";

export async function GET(request){
    const searchParams = await request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filterComments = query ? comments.filter((comment) =>comment.text.includes(query)):comments
    return Response.json(filterComments)
}


export async function POST(request){
    const comment = await request.json();
    const newComment = {
        id:comments.length +1,
        text:comment
    }
    comments.push(newComment);
    
    return new Response(JSON.stringify(newComment),{
        headers:{
            "content-type": "application/json"
        },
        status:201,
    });
}