// src/components/ReviewForm.js
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function ReviewForm({ onAddReview }) {
	const [user, setUser] = useState('')
	const [text, setText] = useState('')
	const [rating, setRating] = useState(0)

	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim() === '' || rating === 0) return
		onAddReview({ user, text, rating })
		setUser('')
		setText('')
		setRating(0)
	}

	const handleRatingClick = selectedRating => {
		setRating(selectedRating)
	}

	return (
		<form onSubmit={handleSubmit} className='review-form'>
			<h4>Оставить отзыв</h4>
			<input
				type='text'
				placeholder='Ваше имя (необязательно)'
				value={user}
				onChange={e => setUser(e.target.value)}
				className='review-input'
			/>
			<textarea
				placeholder='Напишите свой отзыв...'
				value={text}
				onChange={e => setText(e.target.value)}
				className='review-textarea'
				required
				rows={4}
			/>
			<div className='rating-container'>
				<label>Ваша оценка:</label>
				<div className='rating-stars'>
					{[1, 2, 3, 4, 5].map(star => (
						<FaStar
							key={star}
							className={`star ${star <= rating ? 'active' : ''}`}
							onClick={() => handleRatingClick(star)}
						/>
					))}
				</div>
			</div>
			<button type='submit' className='review-submit-button'>
				Опубликовать отзыв
			</button>
		</form>
	)
}

export default ReviewForm
