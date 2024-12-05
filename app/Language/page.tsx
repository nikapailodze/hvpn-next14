'use client'
import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
import { locationIsSelectedState } from "@/global/atoms";
import LanguageItem from "./Components/LanguageItem/LanguageItem";
import { useState } from "react";



export default function Home() {
    const [states] = useRecoilState(locationIsSelectedState)
    const [selectedId, setSelectedId] = useState<number | null>(null);
    
    const dummyData = [
        { id: 1, country: "United States", isChecked: false },
        { id: 2, country: "Canada", isChecked: false },
        { id: 3, country: "Germany", isChecked: false },
        { id: 4, country: "Australia", isChecked: false },
        { id: 5, country: "India", isChecked: false },
        { id: 6, country: "France", isChecked: false },
        { id: 7, country: "Brazil", isChecked: false },
        { id: 8, country: "Japan", isChecked: false },
        { id: 9, country: "South Korea", isChecked: false },
        { id: 10, country: "Mexico", isChecked: false },
    ];

    const handleSelect = (id: number) => {
        setSelectedId(id); 
    };


    return (
        <div className={styles.page}>
            {dummyData.map((item, index) => (
                <LanguageItem
                    country={item.country} 
                    isChecked={item.id === selectedId} 
                    id={index}
                    onClick={() => handleSelect(item.id )} 
                />
            ))}
        </div>
    );
}
