import { IconEnum } from "@/global/Icon.enum";
import styles from "./StartButton.module.scss";
import Image from "next/image";
import { useState } from "react";

interface props {
  isClicked: boolean;
  timeDisplayFunc: () => void;
}


const StartButton = ({isClicked, timeDisplayFunc}: props) => {

  const mainContainerClasses = `${styles.main_container} ${
    isClicked ? styles.main_container_animated : ""
  }`;
  
  const decorClasses = `${styles.decor} ${
    isClicked ? styles.decor_animated : ""
  }`;
  return (
    <div className={mainContainerClasses}>
      <div className={decorClasses}>
        <div className={styles.button_container}
          onClick={timeDisplayFunc}
        >
          <Image
            src={IconEnum.Play}
            width={108.401}
            height={108.401}
            alt="play"
          />
        </div>
      </div>
    </div>
  );
};

export default StartButton;
