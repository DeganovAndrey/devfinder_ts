import { GitHubUser, LocalGitHubUser } from "types";

export const extractLocalUser = (user: GitHubUser): LocalGitHubUser => ({
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  location: user.location,
  blog: user.blog,
  bio: user.bio,
  twitter: user.twitter_username,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  created: user.created_at,
});
