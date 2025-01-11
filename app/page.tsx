'use client'
import { useRecoilState } from "recoil";
import StartButton from "./Components/StartButton/StartButton";
import styles from "./page.module.scss";
import { locationIsSelectedState } from "@/global/atoms";
import { useState } from "react";



export default function Home() {
  const [states] = useRecoilState(locationIsSelectedState)
  const [isOnClicked, setIsOnClicked] = useState(false)

  function timeDisplay() {
    setIsOnClicked(!isOnClicked)
  }

  return (
    <div className={styles.page}>
      {isOnClicked ? 
      <div>
        <p></p>
        <p></p>
      </div>
       : ''}
      <StartButton isClicked={isOnClicked} timeDisplayFunc={timeDisplay} />
    </div>
  );
}
