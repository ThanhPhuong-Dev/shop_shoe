import { useState } from 'react';

import DefaultLayout from './Layout/DefaultLayout/defaullayout';
import Recommended from './Recommended/recommended';
import ContainerProduct from './ContainerProduct/containerProduct';
import products from './db/data';
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected,
      );
    }

    // return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
    //   <Product
    //     key={Math.random()}
    //     img={img}
    //     title={title}
    //     star={star}
    //     reviews={reviews}
    //     prevPrice={prevPrice}
    //     newPrice={newPrice}
    //   />
    // ));

    return filteredProducts;
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="App">
      <DefaultLayout handleChange={handleChange} query={query} handleInputChange={handleInputChange}>
        <Recommended handleClick={handleClick}></Recommended>
        <ContainerProduct result={result}></ContainerProduct>
      </DefaultLayout>
    </div>
  );
}

export default App;
