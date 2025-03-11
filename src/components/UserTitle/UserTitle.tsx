import { FC } from "react";
import styles from "./UserTitle.module.scss";
import { LocalGitHubUser } from "types";

interface UserTitleProps
  extends Pick<LocalGitHubUser, "login" | "name" | "created"> {}

const localDate = new Intl.DateTimeFormat("en-Gb", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitle: FC<UserTitleProps> = ({ login, name, created }) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};
