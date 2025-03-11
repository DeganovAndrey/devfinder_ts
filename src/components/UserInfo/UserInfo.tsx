import { FC } from "react";
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg";
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg";
import { ReactComponent as LocationIcon } from "assets/icon-location.svg";
import { ReactComponent as BlogIcon } from "assets/icon-website.svg";

import styles from "./UserInfo.module.scss";
import { LocalGitHubUser } from "types";
import { InfoItem, InfoItemProps } from "components/InfoItem";

interface UserInfoProps
  extends Pick<LocalGitHubUser, "blog" | "company" | "twitter" | "location"> {}

export const UserInfo: FC<UserInfoProps> = ({
  blog,
  company,
  twitter,
  location,
}) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, i) => (
        <InfoItem key={i} {...item} />
      ))}
    </div>
  );
};
