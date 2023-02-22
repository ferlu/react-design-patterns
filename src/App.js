import "./App.css";

// Split-screen components
import { SplitScreenPage } from "./pages/layout-components/split-screen";

// Lists and list items
import { PEOPLE, PRODUCTS } from "./constants/list-items";
import { RegularList } from "./components/layout-components/list-items/lists";
import { NumberedList } from "./components/layout-components/list-items/lists/numbered-list";
import { SmallPersonListItem } from "./components/layout-components/list-items/people/small-person";
import { LargePersonListItem } from "./components/layout-components/list-items/people/large-person";
import { SmallProductListItem } from "./components/layout-components/list-items/products/small-product";
import { LargeProductListItem } from "./components/layout-components/list-items/products/large-product";

function App() {
  return (
    <div>
      {/* <SplitScreenPage /> */}

      <RegularList items={PEOPLE} resourceName='person' itemComponent={SmallPersonListItem} />
      <NumberedList items={PEOPLE} resourceName='person' itemComponent={LargePersonListItem} />
      <RegularList items={PRODUCTS} resourceName='product' itemComponent={SmallProductListItem} />
      <NumberedList items={PRODUCTS} resourceName='product' itemComponent={LargeProductListItem} />
    </div>
  );
}

export default App;
