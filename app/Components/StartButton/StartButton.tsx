import { IconEnum } from "@/global/Icon.enum";
import styles from "./StartButton.module.scss";
import Image from "next/image";

const StartButton = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.decor}>
          <div className={styles.button_container}>
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
