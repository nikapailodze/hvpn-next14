'use client'
import { useRecoilState } from "recoil";
import StartButton from "./Components/StartButton/StartButton";
import styles from "./page.module.scss";
import { locationIsSelectedState } from "@/global/atoms";



export default function Home() {
  const [states] = useRecoilState(locationIsSelectedState)

  return (
    <div className={styles.page}>
      <StartButton />
    </div>
  );
}
