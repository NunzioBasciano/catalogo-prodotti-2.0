import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Product from './components/Product/Product'
import styles from './app.module.css'

const initialState = [
  {
    id: crypto.randomUUID(),
    name: 'Iphone 12',
    brand: 'Apple',
    price: '399',
    category: 'Electronics',
    description: 'A powerful smartphone with a 6.1-inch OLED display.',
  }
]

const initialInput =
{
  name: '',
  brand: '',
  price: '',
  category: '',
  description: ''
}

function App() {


  const [item, setItem] = useState(initialState);
  const [input, setInput] = useState(initialInput);
  const [filter, setFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const name = input.name;
    const brand = input.brand;
    const price = input.price;
    const category = input.category;
    const description = input.description;

    setItem([...item, { id, name, brand, price, category, description }]);
    setInput(initialInput);
  }

  const handleChange = (e) => {
    setInput((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  }

  const handleDelete = (id) => {
    const newList = item.filter((item) => item.id !== id);
    setItem(newList);
  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  const categories = [...new Set(item.map(product => product.category))];  // prende tutte le categorie dai prodotti, rimuove i duplicati utilizzando un Set, e quindi le converte di nuovo in un array.



  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Create item for your shop</h1>
          <div className={styles.form_item}>
            <label htmlFor="item-name">Item Name</label>
            <input className={styles.form_input} type="text" placeholder="Add item name" id="name" value={input.name} onChange={handleChange} />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="item-brand">Item Brand</label>
            <input className={styles.form_input} type="text" placeholder="Add item brand" id="brand" value={input.brand} onChange={handleChange} />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="item-price">Item Price</label>
            <input className={styles.form_input} type="number" placeholder="Add item price" id="price" value={input.price} onChange={handleChange} />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="item-category">Item Category</label>
            <input className={styles.form_input} type="text" placeholder="Add item category" id="category" value={input.category} onChange={handleChange} />
          </div>
          <div className={styles.form_item}>
            <label htmlFor="item-description">Item Description</label>
            <textarea className={styles.form_input} placeholder="Add item description" id="description" value={input.description} onChange={handleChange} />
          </div>
          <button>Add item</button>
        </form >
        <div className={styles.result}>
          <div className={styles.result_heading}>
            <h2>Your item details:</h2>
            <label htmlFor="category">Choose a category:</label>
            <select onChange={handleFilter} name="category" id="select-category">
              <option value="">All categories</option>

              {categories.map((category, index) => {
                return (
                  <option key={index} value={category}>{category}</option>
                )
              })}
            </select>
          </div>

          <div className={styles.result_products}>
            {item
              .filter((item) => item.category.includes(filter))
              .map((item) => {
                return (
                  <Product key={item.id} item={item} handleDelete={handleDelete} />
                )
              })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App
