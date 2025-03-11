import React, { useState } from "react";
import { Container } from "components/Container";
import { TheHeader } from "components/TheHeader/";
import { Search } from "components/Search";
import { UserCard } from "components/UserCard";

import { defaultUSer } from "mock";
import { GitHubError, GitHubUser, LocalGitHubUser } from "types";
import { isGithubUser } from "utils/typesguards";
import { extractLocalUser } from "utils/excract_local_user";
import "./App.css";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(defaultUSer);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = (await res.json()) as GitHubUser | GitHubError;
    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
