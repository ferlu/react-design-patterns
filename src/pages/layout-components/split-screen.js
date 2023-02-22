import { SplitScreen } from "../../components/layout-components/split-screen";

const LeftHandComponent = ({ name }) => (
  <h1 style={{ backgroundColor: "lightseagreen" }}>{name}</h1>
);
const RightHandComponent = ({ message }) => (
  <h1 style={{ backgroundColor: "lavenderblush" }}>{message}</h1>
);

export const SplitScreenPage = () => (
  <SplitScreen leftWeight={1} rightWeight={3}>
    <LeftHandComponent name='Fer' />
    <RightHandComponent message='Hi!' />
  </SplitScreen>
);
