import React from 'react'
import ProductCard from './ProductCard'

function PopularProducts({
	products,
	onSelectProduct,
	favorites,
	toggleFavorite,
}) {
	// Сортируем товары по рейтингу и берем первые 6
	const popularProducts = [...products]
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 6)

	return (
		<div className='popular-products'>
			<h2 className='section-title'>Популярные товары</h2>
			<div className='product-list'>
				{popularProducts.map(product => (
					<ProductCard
						key={product.id}
						product={product}
						onSelectProduct={onSelectProduct}
						isFavorite={favorites.includes(product.id)}
						toggleFavorite={toggleFavorite}
					/>
				))}
			</div>
		</div>
	)
}

export default PopularProducts
