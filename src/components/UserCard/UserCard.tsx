import { FC } from "react";
import styles from "./UserCard.module.scss";
import { UserStat } from "components/UserStat";
import { LocalGitHubUser } from "types";
import { UserTitle } from "components/UserTitle";
import { UserInfo } from "components/UserInfo";

interface UserCardProps extends LocalGitHubUser {}

export const UserCard: FC<UserCardProps> = (props) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        name={props.name}
        login={props.login}
        created={props.created}
      />
      <p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>
        {props.bio || "This profile has no bio"}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        company={props.company}
        blog={props.blog}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
};
