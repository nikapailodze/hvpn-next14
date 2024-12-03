import { IconEnum } from "@/global/Icon.enum";
import styles from "./RecentConnection.module.scss";
import Image from "next/image";
import RecenetLocationItem from "./Components/RecenetLocationItem/RecenetLocationItem";
import { useState } from "react";

interface Props {
    isLocationSelected: boolean;
    id?: number;
    countryFlag?: string;
    country?: string;
    locations?: string;
    isPremum?: boolean;
}

const RecentConnection = (props: Props) => {
    const [showOptions, setShowOptions] = useState(false);

    const onDropdownClick = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div>
            <div className={styles.container}>
                <p className={styles.title}>Recent Connection</p>
                <div className={styles.mainContent}>
                    <div
                        className={`${props.isLocationSelected && styles.selectedContent} ${styles.content} ${
                            showOptions && styles.contentBorder
                        }`}
                    >
                        <div className={styles.contentWrapper}>
                            <Image
                                src={props.isLocationSelected ? props?.countryFlag || IconEnum.Location : IconEnum.Location}
                                width={24}
                                height={24}
                                alt="location"
                            />
                            <div className={styles.detils}>
                                <p className={styles.detilsTitle}>
                                    {props.isLocationSelected ? props.country : "No location selected"}
                                </p>
                                <p className={styles.detilsSubtext}>
                                    {props.isLocationSelected ? props.locations : "No available locations"}{" "}
                                </p>
                            </div>
                        </div>
                        {props.isLocationSelected && (
                            <div onClick={onDropdownClick} className={styles.dropDown}>
                                <Image 
                                src={IconEnum.DropDown} 
                                className={`${styles.dropdownIcon} ${showOptions ? styles.open : ""}`}                                width={24} 
                                height={24} 
                                alt="Drop Down" />
                            </div>
                        )}
                    </div>
                    <div
                        className={`${styles.locationsContainer} ${
                            showOptions ? styles.locationsContainerShow : styles.locationsContainerHide
                        }`}
                    >
                        <RecenetLocationItem locationName="San Francisco" />
                        <RecenetLocationItem locationName="New York" />
                        <RecenetLocationItem locationName="Washington, DCcc" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentConnection;
