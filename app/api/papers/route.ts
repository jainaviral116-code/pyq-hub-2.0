import { prisma } from "@/lib/prisma"

export async function GET() {

    const papers = await prisma.paper.findMany();

    return Response.json(papers);
}