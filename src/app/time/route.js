export const dynamic = "force-dynamic"; //BY default get in next js cached data to avoid caching we use force-dynamic
export async function GET(){
    return  Response.json({time: new Date().toLocaleTimeString()});
}