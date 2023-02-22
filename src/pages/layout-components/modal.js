import { LargeProductListItem } from "../../components/layout-components/list-items/products/large-product";
import { Modal } from "../../components/layout-components/modal";
import { PRODUCTS } from "../../constants/list-items";

const ModalsPage = () => {
  return (
    <Modal>
      <h1>Title</h1>
      <p>Content</p>
      <LargeProductListItem product={PRODUCTS[0]} />
    </Modal>
  );
};

export default ModalsPage;
