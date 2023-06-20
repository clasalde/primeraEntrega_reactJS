import ItemList from "./ItemList"
import { useProductos } from "../../../hooks/useProductos"

const ItemListContainer = () => {

    const { productos } = useProductos()

    return (
        <div className="container my-5">
            <ItemList items={productos} />
        </div>
    )
}

export default ItemListContainer