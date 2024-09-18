export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export function GET() {
    //test12345
  console.log("Testing Cron");
  return new Response("Testing Cron");
}