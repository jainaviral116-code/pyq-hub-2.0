import { put } from '@vercel/blob'
import { prisma } from "@/lib/prisma"

export async function POST(request:Request) {
    const data = await request.formData();
    const file = data.get("file") as File;
    const title = data.get("title") as string;
    const subject = data.get("subject") as string;
    const semester = data.get("semester") as string;

    const blob = await put(file.name, file, {access : 'public'});

    const paper = await prisma.paper.create({
        data : {title: title, subject:subject, semester:semester, fileURL:blob.url},
    });

    return Response.json(paper);
}