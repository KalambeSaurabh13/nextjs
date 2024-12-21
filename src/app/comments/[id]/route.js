import { redirect } from "next/navigation";
import { comments } from "../data";
export async function GET(request, { params }) {
  const index = params.id;
  if(parseInt(index)>comments.length) {
    redirect("/comments")
  }
  const comment = comments.find((value) => value.id === parseInt(index));
  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex((value) => value.id === parseInt(id));
  comments[index].text = text;

  return Response.json(comments[index]);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = comments.findIndex((value) => value.id === parseInt(id));
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
}
