CREATE EXTENSION IF NOT EXISTS vector;

-- CreateTable
CREATE TABLE "Chunk" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "embedding" vector(384) NOT NULL,
    "paper_id" TEXT NOT NULL,

    CONSTRAINT "Chunk_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chunk" ADD CONSTRAINT "Chunk_paper_id_fkey" FOREIGN KEY ("paper_id") REFERENCES "Paper"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
