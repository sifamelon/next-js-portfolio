export async function GET(request: Request) {
  const res = await fetch(`https://api.github.com/users/sifamelon/repos`);
  const repository = await res.json();
  return Response.json({ repository });
}
