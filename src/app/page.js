'use client';
import { useEffect, useState } from "react";
import { getDocs, collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = async (e) => {
  e.preventDefault();
  try{
    if(!content){
      return;
    }
  await addDoc(collection(db, "notes"), {
    title: title || "Untitled note",
    content,
  });
  setTitle("");
  setContent("");
  }
  catch(err){
    console.log(err)
  }}


  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })))
    })
    return unsubscribe;
  },[])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
     <form onSubmit={addNote} className="w-1/2 flex flex-col items-center justify-between gap-2">
      <h1 className="text-2xl font-bold">Add a note</h1>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full p-4 bg-gray-100 text-black rounded-lg shadow-lg" placeholder="Title" />
      <textarea value={content} onChange={(e)=>setContent(e.target.value)} className="w-full p-4 bg-gray-100 text-black rounded-lg shadow-lg" placeholder="Content" />
      <button type="submit" className="w-full p-4 bg-gray-100 text-black rounded-lg shadow-lg">Add note</button>
    </form>
   
   
    {
    notes.map(note => <div key={note.id} className="w-1/2 p-4 bg-gray-100 text-black rounded-lg shadow-lg">

    <h1 className="text-2xl font-bold">{note.title}</h1>
    <p className="text-lg">{note.content}</p>
    </div>)
    }
    </main>
  )
}
