import { FC } from "react";
import styles from "./UserCard.module.scss";

interface UserCardProps {}

export const UserCard: FC<UserCardProps> = () => {
  return <div className={styles.user}>User Card</div>;
};
