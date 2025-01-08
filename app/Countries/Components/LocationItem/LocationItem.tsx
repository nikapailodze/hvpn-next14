import { IconEnum } from "@/global/Icon.enum";
import styles from "./LocationItem.module.scss";
import Image from "next/image";
import { useState } from "react";
import RecenetLocationItem from "@/app/Components/RecentConnection/Components/RecenetLocationItem/RecenetLocationItem";

interface Props {
  id: number;
  countryFlag: string;
  country: string;
  locations: string;
  isPremum?: boolean;
}

const LocationItem = (props: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const onDropdownClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={styles.wrapper}>
      <div key={props.id} className={styles.container}>
        <div className={styles.details}>
          <Image
            src={props.countryFlag}
            width={24}
            height={24}
            alt="Drop Down"
          />
          <div className={styles.detailsText}>
            <p className={styles.detailsTextTitle}>{props.country}</p>
            <p className={styles.detailsTextSubtext}>{props.locations}</p>
          </div>
          {props.isPremum && (
            <div className={styles.premium}>
              <p>Premium</p>
            </div>
          )}
        </div>
        <div onClick={onDropdownClick} className={styles.dropDown}>
          <Image
            src={IconEnum.DropDown}
            width={24}
            height={24}
            alt="Drop Down"
          />
        </div>
      </div>
      <div
        className={`${styles.locationsContainer} ${
          showOptions
            ? styles.locationsContainerShow
            : styles.locationsContainerHide
        }`}
      >
        <RecenetLocationItem locationName="San Francisco" />
        <RecenetLocationItem locationName="New York" />
        <RecenetLocationItem locationName="Washington, DCcc" />
      </div>
    </div>
  );
};

export default LocationItem;
