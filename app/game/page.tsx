"use client";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"


export default function Game() {
  const gameref = useRef<HTMLCanvasElement | null>(null);
  const players = ["hehe", "new player", "yo mama", "scrimmy", "cockroachegg", "fat32","teri sasu"]

  const [chats, setChats] = useState<string[]>(["hehe", "new player", "yo mama", "scrimmy", "cockroachegg", "fat32","teri sasu"]);

  const [value, setValue] = useState<string>("");

  const handleval = (e: FormEvent) => {
    e.preventDefault();
    setChats([...chats, value])
    setValue("");
  }

  useEffect(()=>{
    if (gameref.current) {
    const canwidth = gameref.current.width; 
    const canheight =  gameref.current.height;
    const ctx = gameref.current.getContext("2d");
    if (ctx) {
    ctx.fillRect(0,0,canwidth,canheight);
    const img = new Image();
    img.src = "/Hellfire.jpg";
    img.onload = () => {
      ctx.drawImage(img, 0, canheight/3, canwidth, canheight/3);
    }
  }

  
  }
  },[gameref])
  return (<>
    <div className="row">
    
    <div className="h-dvh text-center w-99 border-2 column mr-2 ml-1 mt-1 mb-1">
    Server Details
    <h4 className="border-1 pt-2 pb-2">
      Server Status: ....
    </h4>
      Players
    <ul>
      {players.map((val)=>(<li key={Math.random()*999} className="m-3 border-2 rounded-xl h-fit text-center">{val} ....</li>))}
    </ul>

    <div className="border-1 text-center h-full center">
      The Veterans know, 
      <br />
      how to survive.
      <br />
      Mortal,
    </div>

    </div>

    <div className="column center">
    
    <h1 className=" border-2 rounded-2xl text-center p-2 text-red-500 hover:text-black hover:bg-white hover:border-red-600 select-none">
      Terminate
    </h1>
    
    <canvas className="border-2 m-2 w-99 min-w-99 h-99 min-h-99" ref={gameref} >For Game Canvas</canvas>
    
    <div className="text-xs text-center">Made with ❤️ by <a className="text-red-300 hover:border-b-1" href="https://github.com/TheHackerClown">TheHackerClown</a></div>
    </div>

    <div className="border-2 text-center w-99 ml-2 mr-1 mt-1 mb-1 h-dvh">
    Server Chat

    <div className="center border-1 h-10/12 overflow-auto">
      <ul>
        {chats.map((val)=>(<li className="m-2 column center text-red-400 border-1 rounded-xl w-full">{val} <small className="text-white">by DHru</small></li>))}
      </ul>
      
    </div>
    
    <div className="h-fit p-2 center">
      <form action="#" className=" row centers" onSubmit={(e)=>handleval(e)} method="post">
        <input type="text" name="chatpost" className="border-1 mt-auto mb-auto w-full m-4 rounded-xl" id="chatpost" value={value} onChange={(e:ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)} />
        <input type="submit" className="bg-green-600 rounded-xl p-2 text-white" value="Send" />
      </form>
    </div>
    
    </div>

  </div>
  </>
  )
}