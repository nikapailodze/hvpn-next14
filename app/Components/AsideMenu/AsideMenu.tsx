import styles from "./AsideMenu.module.scss"
import Image from "next/image";
import { IconEnum } from "@/global/Icon.enum";

//Components
import IPDisplay from "./Components/IPDisplay/IPDisplay";
import Button from "../Button/Button";
import RecentConnection from "./Components/RecentConnection/RecentConnection";
import SearchComponent from "./Components/SearchComponent/SearchComponent";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { locationIsSelectedState } from "@/global/atoms";

const AsideMenu = () => {
    // const [isLocationSelected] = useRecoilState(locationIsSelectedState)
    const [isLocationSelected] = useState(true)

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={IconEnum.Logo} width={32} height={32} alt="Logo"/>
                <p className={styles.logoTitle}>H-VPN</p>
            </div>

            <IPDisplay isLocationSelected={isLocationSelected} />

             {/* Buttons */}
            {isLocationSelected? 
            <div className={styles.btns}>
                <Button type="Fill">Change server</Button>
                <Button type="Outline">Disconnect </Button>
            </div>

            :
            <Button type="Fill">Quick connection</Button>
            }


            <RecentConnection isLocationSelected={isLocationSelected} country="USA" locations="Locations 4"
            countryFlag="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"/>
            <SearchComponent/>
        </div>
    )
}

export default AsideMenu;