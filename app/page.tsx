"use client";
import { useState } from "react";
import Game from "./game/page";



export default function Home() {
  const [usertoken, setUserToken] = useState<string | null>(null);
    return (<>
  <Game/>
  </>);
}
