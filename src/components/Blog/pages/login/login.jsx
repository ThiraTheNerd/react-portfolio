"use client";
// import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
// import { useRoutes } from "react-router-dom";
const LoginPage = () => {
//   const { status } = useSession();

//   const router = useRoutes();

//   if (status === "loading") {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (status === "authenticated") {
//     router.push("/")
//   }
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} >
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;