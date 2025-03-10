import React, { FC } from "react";
import { ThemeSwitcher } from "components/ThemeSwitcher";
import styles from "./TheHeader.module.scss";

interface TheHeaderProps {}

export const TheHeader: FC<TheHeaderProps> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>devfinder</div>
      <ThemeSwitcher />
    </div>
  );
};
