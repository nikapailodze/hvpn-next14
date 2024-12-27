"use client";
// import { useRecoilState } from "recoil";
import styles from "./page.module.scss";
import Image from "next/image";
// import { locationIsSelectedState } from "@/global/atoms";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Components/Button/Button";
import { IconEnum } from "@/global/Icon.enum";
import InputItem from "../Components/InputItem/InputItem";
import PasswordStrength from "./Components/PasswordStreng/PasswordStreng";

type Inputs = {
  Email: string;
  Password: string;
  Retypepassword: string;
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
          Please enter your credentials to sign up
        </p>
      </div>
      <form
        className={styles.formWrapper}
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
        <div className={styles.inputsWrapper}>
          <div className={styles.inputs}>
            <InputItem
              label="Email"
              register={register("Email", { required: true })}
            />
            <InputItem
              label="Password"
              register={register("Password", { required: true })}
            />
            <InputItem
              label="Retype password"
              register={register("Retypepassword", { required: true })}
            />
          </div>
          <div className={styles.passwordStrength}>
            <PasswordStrength />
            <p className={styles.policyGray}>
              By signing up, you agree with our{" "}
              <span className={styles.policyPurple}>Terms of service</span> and{" "}
              <span className={styles.policyPurple}>privacy policy.</span>{" "}
            </p>
          </div>
        </div>

        <Button typeSubmit type={"Fill"}>
          Continue
        </Button>

        <div className={styles.decor}>
          <div className={styles.line}></div>
          <p className={styles.decorText}>or</p>
          <div className={styles.line}></div>
        </div>

        <div className={styles.otherMeans}>
          <div className={styles.otherMeansItem}>
            <Image
              src={"/Socials/Google.png"}
              width={24}
              height={24}
              alt="google"
            />
          </div>
          <div className={styles.otherMeansItem}>
            <Image
              src={"/Socials/Facebook.png"}
              width={24}
              height={24}
              alt="facebook"
            />
          </div>
          <div className={styles.otherMeansItem}>
            <Image
              src={"/Socials/apple.svg"}
              width={24}
              height={24}
              alt="apple"
            />
          </div>
        </div>

        <div className={styles.signupWrapper}>
          <div className={styles.signUP}>
            <p className={styles.signUpsubText}>
              Don’t you have an account yet?
            </p>

            <a className={styles.createAccontAncor} href="./Login">
              Sign in here
            </a>
          </div>
          <Image
            src={IconEnum.rightArrowPurple}
            width={20}
            height={20}
            alt="sign up"
          />
        </div>
      </form>
    </div>
  );
}
