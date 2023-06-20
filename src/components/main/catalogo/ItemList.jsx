import ItemCard from "./ItemCard"


const ItemList = ({items}) => {

    return (
        <div>
            <h2 className="text-center my-5 py-3">NUESTROS PRODUCTOS</h2>
            <div className="productos container d-flex flex-wrap justify-content-center">
                {
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList