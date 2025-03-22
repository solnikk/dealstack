// src/components/ProductCard.js
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function ProductCard({ product, onSelectProduct, isFavorite, toggleFavorite }) {
	const prices = Object.values(product.price)
	const minPrice = Math.min(...prices)
	const maxPrice = Math.max(...prices)

	return (
		<div className='product-card' onClick={() => onSelectProduct?.(product)}>
			<div className='image-container'>
				<img src={product.image} alt={product.name} className='product-image' />
				<button
					className='favorite-button'
					onClick={e => {
						e.stopPropagation()
						toggleFavorite(product.id)
					}}
					aria-label={
						isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'
					}
				>
					{isFavorite ? <FaHeart className='filled' /> : <FaRegHeart />}
				</button>
			</div>
			<div className='product-info'>
				<h3>{product.name}</h3>
				<p>{product.description}</p>
			</div>
			<div className='price-range'>
				<span className='price-label'>от</span>
				<span className='price-value'>${minPrice}</span>
				<span className='price-label'>до</span>
				<span className='price-value'>${maxPrice}</span>
			</div>
		</div>
	)
}

export default ProductCard
