"use client";
import { ChangeEvent,KeyboardEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from "react"

export default function Game() {
  const gameref = useRef<HTMLCanvasElement | null>(null);
  const players = ["Use CTRL + E for chat typing", "Use CTRL + C for game screen focusing", "Use CTRL + A for going into fullscreen mode", "cockroachegg", "fat32"];


  const chatboxref = useRef<HTMLInputElement | null>(null);

  const [chats, setChats] = useState<string[]>(players);

  const [value, setValue] = useState<string>("");

  const handleval = (e: FormEvent) => {
    e.preventDefault();
    setChats([...chats, value])
    setValue("");
  }
  const keydownhandler = (e: KeyboardEvent<Element>) =>{
    if (e.ctrlKey && e.key.toLocaleLowerCase() === 'e') {
      e.preventDefault();
      chatboxref.current?.focus();
      console.log('ctrl + e pressed')
      //for backward compatiblity, this false is required
      return false
    } else
    if (e.ctrlKey && e.key.toLocaleLowerCase() === 'c') {
      e.preventDefault();
      gameref.current?.requestPointerLock();
      return false
    }
    else
    if (e.ctrlKey && e.key.toLocaleLowerCase() === 'a') {
      e.preventDefault();
      //Temporary
      //Remove this ASAP
      document.body.requestFullscreen().catch(()=>alert("Please Click on the website then press CTRL + A"));
      return false
    }
  }


  const handleTouch = () => {
    
    console.log(123);
    gameref.current?.requestPointerLock();
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

    //These type make me unpardonize my hairs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.body.addEventListener("keydown",(e: any)=> keydownhandler(e),false)
    // eslint-enable-next-line @typescript-eslint/no-explicit-any
  }


  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    document.body.removeEventListener("keydown",(ev : any)=>keydownhandler(ev), false)
    // eslint-enable-next-line @typescript-eslint/no-explicit-any
  )
  }
  },[gameref])




  return (<>
    <div className="row">
    

      {/*This Left Section With Server Details, Player count, and others things that i will implement later */}
      <div className="h-dvh text-center w-99 border-2 column mr-2 ml-1 mt-1 mb-1">

        Server Details

        {/*Here Player Names will be shown */}
        <h4 className="border-1 pt-2 pb-2">
          Server Status: ....
        </h4>
        Players
        <ul>
          {players.map((val) => (<li key={Math.random() * 999} className="m-3 border-2 rounded-xl h-fit text-center">{val} ....</li>))}
        </ul>


        {/*Here Player Weapons will be shown, but for now i will leave it here */}
        <div className="border-1 text-center h-full center">
          The Veterans know,
          <br />
          how to survive.
          <br />
          Mortal,
        </div>

      </div>


    {/*This is Center section with Terminate LOGO, Game Canvas and Footer*/}
    <div className="column center">
    
    {/*The Terminate Logo, It will be gradient in the production version */}
    <h1 className=" border-2 rounded-2xl text-center p-2 text-red-500 hover:text-black hover:bg-white hover:border-red-600 select-none">
      Terminate
    </h1>
    
    {/*Game Canvas for Player to Play Game */}
    <canvas className="border-2 m-2 w-99 min-w-99 h-99 min-h-99" onClick={handleTouch} ref={gameref} >For Game Canvas</canvas>
    
    {/*Footer */}
    <div className="text-xs text-center">Made with ❤️ by <a className="text-red-300 hover:border-b-1" href="https://github.com/TheHackerClown">TheHackerClown</a></div>
    </div>



    {/*This is Right Section with Server Chats Only */}
    <div className="border-2 text-center w-1/3 ml-2 mr-1 mt-1 mb-1 h-dvh">
    
    Server Chat


    {/*All the Chats to be Listed Here */}
    <div className="center border-1 h-10/12 w-full overflow-auto column">
      <ul>
        {chats.map((val)=>(<li key={Math.random()*99999} className="m-2 column center text-red-400 border-1 p-3 rounded-xl w-90 h-auto overflow-hidden">{val} <small className="text-white">by DHru</small></li>))}
      </ul>
    </div>
    

    {/*Here we can Enter the Message to sent to global chat, private chat is not available, go to hell cyberbullies, which is ofcourse me */}
    <div className="h-43 border-1 p-2 center">
      <form action="#" className=" row centers" onSubmit={(e)=>handleval(e)} method="post">
        <input ref={chatboxref} type="text" name="chatpost" className="border-1 mt-auto mb-auto w-full m-4 rounded-xl text-center" id="chatpost" placeholder="Write something" value={value} onChange={(e:ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}/>
        <input type="submit" className="bg-green-600 rounded-xl p-2 text-white" value="Send" />
      </form>
    </div>
    
    </div>

  </div>
  </>
  )
}