import "jest-canvas-mock";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

// Mock @vercel/analytics/react module
jest.mock(
  "@vercel/analytics/react",
  () => ({
    Analytics: () => null
  }),
  {virtual: true}
);
