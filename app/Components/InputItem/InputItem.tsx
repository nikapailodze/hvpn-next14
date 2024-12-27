import styles from "./InputItem.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register: UseFormRegisterReturn;
  label: string;
}

const InputItem = ({ register, label }: Props) => {
  return (
    <div className={styles.inputItemContainer}>
      <p className={styles.subText}>{label}</p>
      <input
        className={styles.inputItem}
        {...register} 
        type="text"
      />
    </div>
  );
};

export default InputItem;