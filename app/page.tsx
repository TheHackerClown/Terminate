"use client";
import { useEffect, useState } from "react";
import Game from "./game/page";



export default function Home() {
  const [usertoken, setUserToken] = useState<string | null>(null);
  const [serverip, setServerIP] = useState<string | null>(null);
  useEffect(()=>{
    setUserToken(localStorage.getItem("usertoken"));
    setServerIP(localStorage.getItem("serverloc"));
    
  },[])
    return (<>
  <Game/>
  </>);
}
