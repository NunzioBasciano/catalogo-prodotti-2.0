import styles from '../Product/product.module.css';

function Product({ item, handleDelete }) {
    return (
        <div className={styles.card} key={item.id}>
            <h3>{item.name}</h3>
            <p>Brand: {item.brand}</p>
            <p>Price: {item.price}</p>
            <p>Category: {item.category}</p>
            <p>Description: {item.description}</p>
            <button className={styles.button} onClick={() => handleDelete(item.id)}>DELETE</button>
        </div>
    )

    /* Quando all'interno di un componente devo utilizzare una funzione legata ad un evento:
    
    -- se devo passare degli argomenti in fase di evocazione come qui sopra devo utilizzare la callback.
    -- se non devo passare argomenti posso inserire solo il riferimento alla funzione
    */
}

export default Product