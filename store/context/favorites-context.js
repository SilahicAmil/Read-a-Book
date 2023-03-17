import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  bookName: [],
  addFavorite: (bookName) => {},
  removeFavorite: (bookName) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const addFavoriteHandler = (bookName) => {
    setFavoriteBooks((currBooks) => [...currBooks, bookName]);
  };

  const removeFavoriteHandler = (bookName) => {
    setFavoriteBooks((currBooks) =>
      currBooks.filter((books_title) => books_title !== bookName)
    );
  };

  const value = {
    bookName: favoriteBooks,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
