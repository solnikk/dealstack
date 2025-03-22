import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import CategoryCarousel from './components/CategoryCarousel'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import { products, categories } from './mockData'
import FavoriteList from './components/FavoriteList'
import Footer from './components/Footer'
import PopularProducts from './components/PopularProducts'

function App() {
	const [darkMode, setDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		return savedTheme === 'dark'
	})

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			darkMode ? 'dark' : 'light'
		)
		localStorage.setItem('theme', darkMode ? 'dark' : 'light')
	}, [darkMode])

	const [filteredProducts, setFilteredProducts] = useState(products)
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [favorites, setFavorites] = useState([])
	const [selectedCategory, setSelectedCategory] = useState(null)
	const [showFavorites, setShowFavorites] = useState(false)
	const [productSource, setProductSource] = useState(null)
	const [scrollPosition, setScrollPosition] = useState(0)

	// Функция для поиска товаров
	const handleSearch = filters => {
		let filtered = products

		if (filters.name) {
			filtered = filtered.filter(p =>
				p.name.toLowerCase().includes(filters.name.toLowerCase())
			)
		}
		if (filters.category) {
			filtered = filtered.filter(p => p.category === filters.category)
		}
		if (filters.brand) {
			filtered = filtered.filter(p => p.brand === filters.brand)
		}

		console.log('Filtered products after search:', filtered)

		setSelectedCategory(null)
		setFilteredProducts(filtered)
	}

	// Функция для выбора категории
	const handleCategorySelect = categoryName => {
		setSelectedCategory(categoryName)
		setSelectedProduct(null)
	}

	// Фильтрация товаров по выбранной категории
	const getFilteredProductsByCategory = () => {
		return selectedCategory
			? products.filter(product => product.category === selectedCategory)
			: products
	}

	// Функция для добавления/удаления из избранного
	const toggleFavorite = id => {
		if (favorites.includes(id)) {
			setFavorites(favorites.filter(favId => favId !== id))
		} else {
			setFavorites([...favorites, id])
		}
	}

	const handleProductSelect = product => {
		setScrollPosition(window.scrollY)
		setSelectedProduct(product)
		if (showFavorites) {
			setProductSource('favorites')
			setShowFavorites(false)
		} else {
			setProductSource('products')
		}
	}

	const handleCloseProduct = () => {
		setSelectedProduct(null)
		if (productSource === 'favorites') {
			setShowFavorites(true)
		}
		setProductSource(null)
		window.scrollTo(0, scrollPosition)
	}

	return (
		<div className='app'>
			{/* Шапка с логотипом и поиском */}
			<Header
				onSearch={handleSearch}
				onShowFavorites={() => setShowFavorites(!showFavorites)}
				favoritesCount={favorites.length}
				darkMode={darkMode}
				toggleDarkMode={() => setDarkMode(!darkMode)}
			/>
			<main className='main-content'>
				{showFavorites ? (
					<FavoriteList
						products={products.filter(p => favorites.includes(p.id))}
						toggleFavorite={toggleFavorite}
						onClose={() => setShowFavorites(false)}
						onSelectProduct={handleProductSelect}
					/>
				) : (
					<>
						{/* Карусель категорий */}
						{!selectedCategory &&
							!selectedProduct &&
							filteredProducts.length === products.length && (
								<>
									<CategoryCarousel
										categories={categories}
										onSelectCategory={handleCategorySelect}
									/>
									<PopularProducts
										products={products}
										onSelectProduct={handleProductSelect}
										favorites={favorites}
										toggleFavorite={toggleFavorite}
									/>
								</>
							)}

						{/* Список товаров */}
						{(selectedCategory ||
							filteredProducts.length !== products.length) &&
							!selectedProduct && (
								<ProductList
									products={
										selectedCategory
											? getFilteredProductsByCategory()
											: filteredProducts
									}
									onBack={() => {
										setSelectedCategory(null)
										setFilteredProducts(products)
									}}
									onSelectProduct={handleProductSelect}
									favorites={favorites}
									toggleFavorite={toggleFavorite}
								/>
							)}

						{/* Детальный обзор товара */}
						{selectedProduct && (
							<ProductDetails
								product={selectedProduct}
								onClose={handleCloseProduct}
							/>
						)}
					</>
				)}
			</main>
			<Footer />
		</div>
	)
}

export default App
