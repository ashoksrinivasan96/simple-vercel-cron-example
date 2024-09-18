export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET() {
    //test123456
  console.log("Testing Cron");
  return new Response("Testing Cron");
}