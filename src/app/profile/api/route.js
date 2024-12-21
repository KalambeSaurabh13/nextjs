import { headers, cookies } from "next/headers";

//Read request from incoming headers   and you can also set headers by using new response by replacing existing headers

// export async function GET (request){
//     const requestHeader = new Headers(request.headers);
//     console.log(requestHeader.get("Authorization"));
//     return new Response("Profile API data");
// }

// or

export async function GET(request) {
  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("Theme: " + theme);
  
  
  (await cookies()).set("resultPerPage","30")  //seting a cookie
   console.log((await cookies()).get("resultPerPage")); // getting a cookie
   
  
  return new Response("<h1>Profile API data</h1>",{
    headers:{
        "content-type": "text/html",
        "set-cookie":"theme=night"
    }
  });
}
