import {
	FaHeart,
	FaRegHeart,
	FaMoon,
	FaSun,
	FaSearch,
	FaBars,
	FaTimes,
} from 'react-icons/fa'
import React, { useState, useEffect, useRef } from 'react'

function Header({
	onSearch,
	onShowFavorites,
	favoritesCount,
	darkMode,
	toggleDarkMode,
	goToHomePage,
}) {
	const [filters, setFilters] = useState({
		name: '',
		category: '',
		brand: '',
	})
	const [isSearchVisible, setIsSearchVisible] = useState(false)
	const searchFormRef = useRef(null)

	const handleChange = e => {
		const { name, value } = e.target
		setFilters({ ...filters, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		onSearch(filters)
		setIsSearchVisible(false)
	}

	const toggleSearch = () => {
		setIsSearchVisible(!isSearchVisible)
	}

	// Обработчик для перехода на главную при клике на логотип
	const handleLogoClick = () => {
		// Используем функцию возврата на главную, переданную из App.js
		goToHomePage()
	}

	// Обработчик клика вне формы поиска
	useEffect(() => {
		function handleClickOutside(event) {
			if (
				searchFormRef.current &&
				!searchFormRef.current.contains(event.target) &&
				!event.target.closest('.mobile-menu-button')
			) {
				setIsSearchVisible(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<header className='header'>
			<div className='logo-section'>
				<button
					className='mobile-menu-button'
					onClick={toggleSearch}
					aria-label='Toggle search'
				>
					{isSearchVisible ? <FaTimes /> : <FaBars />}
				</button>
				<h1 className='logo' onClick={handleLogoClick}>
					DealStack
				</h1>
				<button
					className='theme-toggle logo-theme-toggle'
					onClick={toggleDarkMode}
					aria-label='Toggle dark mode'
				>
					{darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
				</button>
			</div>

			<div className='header-controls'>
				<button className='favorites-button' onClick={onShowFavorites}>
					<div className='favorites-icon-wrapper'>
						{favoritesCount > 0 ? (
							<FaHeart className='favorites-icon filled' />
						) : (
							<FaRegHeart className='favorites-icon' />
						)}
						{favoritesCount > 0 && (
							<span className='favorites-badge'>{favoritesCount}</span>
						)}
					</div>
					<span className='favorites-label'>Избранное</span>
				</button>

				<form
					ref={searchFormRef}
					onSubmit={handleSubmit}
					className={`search-form ${isSearchVisible ? 'active' : ''}`}
				>
					<input
						type='text'
						name='name'
						placeholder='Поиск'
						value={filters.name}
						onChange={handleChange}
						className='search-input'
					/>
					<select
						name='category'
						value={filters.category}
						onChange={handleChange}
						className='search-select'
					>
						<option value=''>Все категории</option>
						<option value='Smartphones'>Смартфоны</option>
						<option value='Laptops'>Ноутбуки</option>
						<option value='Tablets'>Планшеты</option>
						<option value='Headphones'>Наушники</option>
					</select>
					<select
						name='brand'
						value={filters.brand}
						onChange={handleChange}
						className='search-select'
					>
						<option value=''>Все бренды</option>
						<option value='Apple'>Apple</option>
						<option value='Samsung'>Samsung</option>
						<option value='Asus'>Asus</option>
						<option value='Xiaomi'>Xiaomi</option>
						<option value='Bose'>Bose</option>
						<option value='Jabra'>Jabra</option>
						<option value='Sennheiser'>Sennheiser</option>
						<option value='Sony'>Sony</option>
						<option value='HP'>HP</option>
						<option value='Lenovo'>Lenovo</option>
						<option value='Dell'>Dell</option>
						<option value='Razer'>Razer</option>
						<option value='Microsoft'>Microsoft</option>
					</select>
					<button type='submit' className='search-button'>
						<FaSearch /> Найти
					</button>
				</form>
			</div>
		</header>
	)
}

export default Header
