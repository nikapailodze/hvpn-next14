"use client";
// import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
import Image from "next/image";
// import { locationIsSelectedState } from "@/global/atoms";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Components/Button/Button";
import { IconEnum } from "@/global/Icon.enum";

type Inputs = {
  Email: string;
  Password: string;
};

export default function Home() {
  // const [states] = useRecoilState(locationIsSelectedState)

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className={styles.page}>

      <div className={styles.titles}>
        <div className={styles.titleWrapper}>
          <Image src={"/Logo/Logo.svg"} width={40} height={40} alt="logo" />
          <h1 className={styles.title}>Welcome to H-vpn</h1>
        </div>
        <p className={styles.subText}>
          Please enter your credentials to sign in
        </p>
      </div>
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)} action="">
        <div className={styles.inputsWrapper}>
          <div className={styles.inputs}>
            <div className={styles.inputItemContainer}>
              <p className={styles.subText}>Email</p>
              <input
                className={styles.inputItem}
                {...register("Email", { required: true })}
                type="text"
              />{" "}
            </div>
            <div className={styles.inputItemContainer}>
              <p className={styles.subText}>Password</p>
              <input
                className={styles.inputItem}
                {...register("Password", { required: true })}
                type="text"
              />
            </div>
          </div>

          <div className={styles.forgot}>
            <a className={styles.forgetAncor} href="">
              Forget password?
            </a>
          </div>
        </div>

        <Button typeSubmit type={"Fill"}>
          Continue
        </Button>

        <div className={styles.decor}>
          <div className={styles.line}>
          </div>
          <p className={styles.decorText}>or</p>
          <div className={styles.line}>
          </div>
        </div>


        <div className={styles.otherMeans}>
            <div className={styles.otherMeansItem}>
              <Image src={'/Socials/Google.png'} width={24} height={24} alt="google"/>
            </div>
            <div className={styles.otherMeansItem}>
              <Image src={'/Socials/Facebook.png'} width={24} height={24} alt="facebook"/>
            </div>
            <div className={styles.otherMeansItem}>
              <Image src={'/Socials/apple.svg'} width={24} height={24} alt="apple"/>
            </div>
        </div>

        <div className={styles.signupWrapper}>
          <div className={styles.signUP}>
            <p className={styles.signUpsubText}>Don’t you have an account yet? </p>

            <a className={styles.createAccontAncor} href="">Create an account </a>
          </div>
          <Image src={IconEnum.rightArrowPurple} width={20} height={20} alt="sign up"/>
        </div>

      </form>


    </div>
  );
}
