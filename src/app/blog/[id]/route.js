import { blogData } from "../blogsData";

export async function GET(request, { params }) {
  const Id = params.id;
  const blogvalue = blogData.find((blog) => blog.id === Id);
  return Response.json(blogvalue);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;
  const index = blogData.findIndex((value) => value.id === id);
  blogData[index].text = text;
  return Response.json(blogData[index]);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = blogData.findIndex((value) => value.id === id);
  const deletedblog = blogData[index];
  blogData.splice(index, 1);
  return Response.json(deletedblog);
}