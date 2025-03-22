// src/components/ProductDetails.js
import React, { useState, useEffect } from 'react'
import ReviewForm from './ReviewForm'
import { FaStar } from 'react-icons/fa'

function ProductDetails({ product, onClose }) {
	const [reviews, setReviews] = useState(product.reviews)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	const addReview = review => {
		setReviews([...reviews, review])
	}

	return (
		<div className='product-details'>
			<button className='back-button small' onClick={onClose}>
				← Назад
			</button>
			<div className='product-details-container'>
				<div className='product-details-left'>
					<img
						src={product.image}
						alt={product.name}
						className='product-details-image'
					/>
				</div>
				<div className='product-details-right'>
					<div className='product-details-header'>
						<h2>{product.name}</h2>
						<p className='product-details-description'>{product.description}</p>
					</div>
				</div>
			</div>

			<div className='product-details-shops'>
				<h3>Где купить:</h3>
				<div className='shops-list'>
					{Object.entries(product.price).map(([shop, price]) => (
						<a
							key={shop}
							href={product.shopLinks[shop]}
							target='_blank'
							rel='noopener noreferrer'
							className='shop-item'
						>
							<span className='shop-name'>{shop}</span>
							<span className='shop-price'>${price}</span>
						</a>
					))}
				</div>
			</div>

			<div className='product-details-specs'>
				<h3>Характеристики:</h3>
				<ul className='specifications-list'>
					{product.specifications.map((spec, index) => (
						<li key={index}>{spec}</li>
					))}
				</ul>
			</div>

			<div className='product-details-reviews'>
				<h3>Отзывы:</h3>
				<div className='reviews'>
					{reviews.length > 0 ? (
						reviews.map((review, index) => (
							<div key={index} className='review-item'>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Faenza-avatar-default-symbolic.svg/1024px-Faenza-avatar-default-symbolic.svg.png'
									alt='Avatar'
									className='review-avatar'
								/>
								<div className='review-content'>
									<strong>{review.user || 'Anonymous'}</strong>
									<p>{review.text}</p>
									<div className='review-rating-stars'>
										{[1, 2, 3, 4, 5].map(star => (
											<FaStar
												key={star}
												className={`star ${
													star <= review.rating ? 'active' : ''
												}`}
											/>
										))}
									</div>
								</div>
							</div>
						))
					) : (
						<p>Нет отзывов о товаре.</p>
					)}
				</div>
				<ReviewForm onAddReview={addReview} />
			</div>
		</div>
	)
}

export default ProductDetails
