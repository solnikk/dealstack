import React from 'react'
import ProductCard from './ProductCard'
import { FaArrowLeft } from 'react-icons/fa'
function ProductList({
	products,
	onBack,
	onSelectProduct,
	favorites,
	toggleFavorite,
}) {
	return (
		<div className='products-container'>
			<button className='back-button small' onClick={onBack}>
				<FaArrowLeft /> <span>Назад</span>
			</button>
			<div className='product-list'>
				{products.length > 0 ? (
					products.map(product => (
						<ProductCard
							key={product.id}
							product={product}
							onSelectProduct={onSelectProduct}
							isFavorite={favorites.includes(product.id)}
							toggleFavorite={toggleFavorite}
						/>
					))
				) : (
					<div className='empty-state'>
						<p>Товары в категории отсутствуют.</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductList
// src/components/ProductList.js
// import React from "react";
// import ProductCard from "./ProductCard";

// function ProductList({ products, onBack, onSelectProduct, favorites, toggleFavorite }) {
//   return (
//     <div className="product-list">
//       {/* Кнопка "Назад" */}
//       <button className="back-button" onClick={onBack}>
//          Back to Categories
//       </button>

//       {/* Список товаров */}
//       {products.length > 0 ? (
//         <div className="products-container">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               onSelectProduct={onSelectProduct} // Передаем функцию для выбора товара
//               isFavorite={favorites.includes(product.id)}
//               toggleFavorite={toggleFavorite}
//             />
//           ))}
//         </div>
//       ) : (
//         <p>No products found in this category.</p>
//       )}
//     </div>
//   );
// }

// export default ProductList;
