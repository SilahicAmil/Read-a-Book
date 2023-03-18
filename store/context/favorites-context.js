import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  bookNames: [],
  purchasedBookNames: [],
  addFavorite: (bookName) => {},
  removeFavorite: (bookName) => {},
  purchaseBook: (bookName) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  const addFavoriteHandler = (bookName) => {
    setFavoriteBooks((currBooks) => [...currBooks, bookName]);
  };

  const purchaseBookHandler = (bookName) => {
    setPurchasedBooks((currBooks) => [...currBooks, bookName]);
  };

  const removeFavoriteHandler = (bookName) => {
    setFavoriteBooks((currBooks) =>
      currBooks.filter((books_title) => books_title !== bookName)
    );
  };

  const value = {
    bookNames: favoriteBooks,
    purchasedBookNames: purchasedBooks,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    purchaseBook: purchaseBookHandler,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
