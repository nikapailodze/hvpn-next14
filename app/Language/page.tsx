'use client'
import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
import { locationIsSelectedState } from "@/global/atoms";
import LanguageItem from "./Components/LanguageItem/LanguageItem";



export default function Home() {
    const [states] = useRecoilState(locationIsSelectedState)

    const dummyData = [
        { country: "United States", isChecked: true },
        { country: "Canada", isChecked: false },
        { country: "Germany", isChecked: true },
        { country: "Australia", isChecked: false },
        { country: "India", isChecked: true },
        { country: "France" }, // isChecked is optional
        { country: "Brazil", isChecked: false },
        { country: "Japan", isChecked: true },
        { country: "South Korea" }, // isChecked is optional
        { country: "Mexico", isChecked: false },
        { country: "United States", isChecked: true },
        { country: "Canada", isChecked: false },
        { country: "Germany", isChecked: true },
        { country: "Australia", isChecked: false },
        { country: "India", isChecked: true },
        { country: "France" }, // isChecked is optional
        { country: "Brazil", isChecked: false },
        { country: "Japan", isChecked: true },
        { country: "South Korea" }, // isChecked is optional
        { country: "Mexico", isChecked: false },
    ];


    return (
        <div className={styles.page}>
            {dummyData.map((item, index) => (
                <LanguageItem
                    country={item.country} 
                    isChecked={item.isChecked} 
                    id={index}
                />
            ))}
        </div>
    );
}
