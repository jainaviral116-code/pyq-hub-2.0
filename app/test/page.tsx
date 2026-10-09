"use client"
import { useState, useEffect } from "react"

export default function List(){
    const [papers, setPapers] = useState<{ id: string; title: string; subject: string; semester: string; fileUrl: string }[]>([]);

  const [loading, setLoading] = useState(false);

    useEffect(()=>{

        const fetchData = async () => {
            const res = await fetch("/api/papers");
            if(!res.ok){
                throw new Error(`Request failed with status ${res.status}`);
            }
            const data = await res.json();
            setPapers(data);
        }
        fetchData();
    }, []
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await fetch("/api/upload", 
        {
            method : "POST",
            body: formData
        }
    )

    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" />
                <input type="text" name="subject" />
                <input type="text" name="title" />
                <input type="number" id="file" name="semester" />
            </form>


            <ul>
                {papers.map((paper, index) => {
                    return <li key={index}>subject : {paper.subject} and title : {paper.title}</li>
                })}
            </ul>

        </>
    )
}