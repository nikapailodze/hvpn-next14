'use client'
import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
import { locationIsSelectedState } from "@/global/atoms";
import { useRouter } from "next/navigation";
import LeftArrow from "../Components/LeftArrow/LeftArrow";



export default function Home() {
    const [states] = useRecoilState(locationIsSelectedState)
    const router = useRouter();

    const onLeftArrowClick = ()=>{
        router.push('./')
    }

    return (
        <div className={styles.page}>
            



        </div>
    );
}
