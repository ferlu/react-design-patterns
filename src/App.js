import "./App.css";
import ListItemsPage from "./pages/layout-components/list-items";
import ModalsPage from "./pages/layout-components/modal";

// Split-screen components
import { SplitScreenPage } from "./pages/layout-components/split-screen";

// Lists and list items

function App() {
  return (
    <div>
      {/* <SplitScreenPage /> */}
      {/* <ListItemsPage /> */}
      <ModalsPage />
    </div>
  );
}

export default App;
