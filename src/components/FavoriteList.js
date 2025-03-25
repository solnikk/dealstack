// src/components/FavoriteList.js
import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { FaArrowLeft } from 'react-icons/fa'

function FavoriteList({ products, toggleFavorite, onClose, onSelectProduct }) {
	// Добавляем эффект для скролла страницы наверх при монтировании компонента
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	return (
		<div className='products-container'>
			<button className='back-button small' onClick={onClose}>
				<FaArrowLeft /> <span>Назад</span>
			</button>
			<h2>Ваши избранные товары ({products.length})</h2>
			<div className='product-list'>
				{products.length > 0 ? (
					products.map(product => (
						<ProductCard
							key={product.id}
							product={product}
							isFavorite={true}
							toggleFavorite={toggleFavorite}
							onSelectProduct={onSelectProduct}
						/>
					))
				) : (
					<div className='empty-state'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/1139/1139982.png'
							alt='Empty favorites'
							className='empty-icon'
						/>
						<p>Избранное отсутствует. Начните добавлять товары!</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default FavoriteList
