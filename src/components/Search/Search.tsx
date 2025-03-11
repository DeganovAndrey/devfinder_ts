// import React, { FC } from "react";
// import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
// import styles from "./Search.module.scss";
// import { Button } from "components/Button";

// interface SearchProps {
//   hasError: boolean;
//   onSubmit: (text: string) => void;
// }

// type FormFields = {
//   username: HTMLInputElement;
// };

// export const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {

//   const handleSubmit = (
//     event: React.FormEvent<HTMLFormElement & FormFields>
//   ) => {
//     event.preventDefault();
//     const text = event.currentTarget.username.value;

//     if (text.trim()) {
//       onSubmit(text);
//       event.currentTarget.reset();
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <div className={styles.search}>
//         <label htmlFor="search" className={styles.label}>
//           <SearchIcon />
//         </label>
//         <input
//           type="text"
//           className={styles.textField}
//           id="search"
//           placeholder="Search GitHub username..."
//         />
//         {hasError && <div className={styles.error}>No result </div>}
//         <Button>Search</Button>
//       </div>
//     </form>
//   );
// };

//WITH useREF

import React, { FC, useRef } from "react";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import styles from "./Search.module.scss";
import { Button } from "components/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search: FC<SearchProps> = ({ hasError, onSubmit }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(searchRef);
    const text = searchRef.current ? searchRef.current.value : "";
    if (text) {
      onSubmit(text);
      if (searchRef.current) searchRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          ref={searchRef}
          type="text"
          className={styles.textField}
          id="search"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result </div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
