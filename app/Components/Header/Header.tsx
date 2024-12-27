import { IconEnum } from "@/global/Icon.enum";
import styles from "./Header.module.scss";
import Image from "next/image";
import { useState } from "react";
import DropOptionList from "./Components/DropOptionList/DropOptionList";
import Status from "./Status/Status";
import LeftArrow from "../LeftArrow/LeftArrow";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const onDropdownClick = () => {
    setShowOptions(!showOptions);
  };
  const onClickOverlay = () => {
    setShowOptions(!showOptions);
  };

  const getPageTitle = () => {
    const pathTitleMap: { [key: string]: string } = {
      "/": "Home",
      "/Profile": "Profile",
      "/AccountSettings": "Settings",
      "/Countries": "Countries",
      "/Language": "Language",
      "/Login": "Login",
      "/Register": "Register",
    };

    return pathTitleMap[pathName] || "Unknown Page";
  };
  const onLeftArrowClick = () => {
    if (pathName === "/Language") {
      router.replace("./AccountSettings");
    } else {
      router.push("./");
    }
  };

  return (
    <header className={styles.container}>
      {(getPageTitle() == "Countries" || getPageTitle() == "Home") && (
        <div className={styles.dropDownContainer}>
          <div
            onClick={onDropdownClick}
            className={`${styles.dropDown} ${showOptions ? styles.open : ""}`}
          >
            <Image
              src={IconEnum.BurgerIcon}
              width={24}
              height={24}
              alt="Drop Down"
            />
          </div>
        </div>
      )}

      {getPageTitle() == "Language" && (
        <div className={styles.dropDownContainer}>
          <LeftArrow onClick={onLeftArrowClick} />
        </div>
      )}

      {getPageTitle() === "Home" ? (
        <Status />
      ) : getPageTitle() === "Login" || getPageTitle() === "Register" ? null : (
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{getPageTitle()}</h1>
        </div>
      )}

      {(getPageTitle() == "Countries" || getPageTitle() == "Home") && (
        <div className={styles.pro}>
          <Image
            src={IconEnum.DollarSymbol}
            width={20}
            height={20}
            alt="Dollar Sybmbol"
          />
          <p>Pro</p>
        </div>
      )}

      <div
        className={`${styles.locationsContainer} 
            ${
              showOptions
                ? styles.locationsContainerShow
                : styles.locationsContainerHide
            }`}
      >
        <DropOptionList />
      </div>

      <div
        onClick={onClickOverlay}
        className={`${styles.overlay} ${showOptions && styles.showOverlay}`}
      ></div>
    </header>
  );
};

export default Header;
