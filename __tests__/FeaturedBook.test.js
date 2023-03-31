import { fireEvent, render, screen } from "@testing-library/react-native";

import FeaturedBook from "../components/FeaturedBook/FeaturedBook";

test("featured book component renders correctly", () => {
  const bookName = "The Book of Lost Things";

  render(<FeaturedBook />);

  const featuredBook = screen.getByTestId("featured-book");

  expect(featuredBook).toHaveTextContent(bookName);
});
