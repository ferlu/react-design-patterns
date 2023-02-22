import { RegularList } from "../../components/layout-components/list-items/lists";
import { NumberedList } from "../../components/layout-components/list-items/lists/numbered-list";
import { LargePersonListItem } from "../../components/layout-components/list-items/people/large-person";
import { SmallPersonListItem } from "../../components/layout-components/list-items/people/small-person";
import { LargeProductListItem } from "../../components/layout-components/list-items/products/large-product";
import { SmallProductListItem } from "../../components/layout-components/list-items/products/small-product";
import { PEOPLE, PRODUCTS } from "../../constants/list-items";

const ListItemsPage = () => {
  return (
    <>
      <RegularList items={PEOPLE} resourceName='person' itemComponent={SmallPersonListItem} />
      <NumberedList items={PEOPLE} resourceName='person' itemComponent={LargePersonListItem} />
      <RegularList items={PRODUCTS} resourceName='product' itemComponent={SmallProductListItem} />
      <NumberedList items={PRODUCTS} resourceName='product' itemComponent={LargeProductListItem} />
    </>
  );
};

export default ListItemsPage;
