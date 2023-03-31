import FeaturedBook from "../../components/FeaturedBook/FeaturedBook";
import renderer from "react-test-renderer";

describe("FeaturedBook Component", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<FeaturedBook />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
