import BooksListItem from "../../components/BooksList/BooksListItem";
import renderer from "react-test-renderer";

describe("BooksListItem Component", () => {
  it("should render correctly", () => {
    description = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. ";
    const tree = renderer
      .create(<BooksListItem description={description} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
