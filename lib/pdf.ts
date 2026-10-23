import { PDFParse } from "pdf-parse";
import type { Paper } from "@/app/generated/prisma/client"

export async function parse(paper:Paper) {
    // outer try catch is to account for the possibility of parser creation throwing error
    try{
        const parser = new PDFParse({url : paper.fileUrl});
        try{
            console.log("PDF extraction started -- paperId", paper.id);
            const text = (await parser.getText()).text;
            console.log("PDF extraction completed -- paperId", paper.id, "characters ", text.length);
            return text;
        }catch(error){
            console.error("lib/pdf.ts :: error reading pdf :: " , error, "paperId" , paper.id);
            throw error;
        }finally{
            await parser.destroy();
        }
    }catch(e){
        console.log(e);
        throw e;
    }
}