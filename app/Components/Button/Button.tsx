import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  type: "Fill" | "Outline";
  onClick?: () => void;
  typeSubmit?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      type={props.typeSubmit ? "submit" : "button"}
      onClick={props.onClick}
      className={`${styles.container} ${
        props.type == "Fill" ? styles.filleButton : styles.outlinedButton
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
