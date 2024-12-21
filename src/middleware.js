import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // return NextResponse.redirect(new URL('/', request.url))
  // return NextResponse.rewrite(new URL('/product', request.url))
  const response = NextResponse.next();
   const theme = (await cookies()).get("theme")
   if(!theme){
    (await cookies()).set("theme","dark");
   }

   response.headers.set("cusom-header","custom-value")
   return response;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about',
}