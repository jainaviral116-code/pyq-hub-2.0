export default function chunkText(text : string, size = 800, overlap = 100) : string[] {
    if(size <= 0 || overlap < 0){
        throw new Error("Non positive size or overlap in chunking");
    }
    if(overlap >= size){
        throw new Error("Overlap more than size");
    }
    let chunks : string[] = [];
    let i = 0;
    while(i < text.length){
        chunks.push(text.slice(i, i+size));
        i = i+size-overlap;
    }
    return chunks;
}