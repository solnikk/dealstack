import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/variables.css'
import './styles/Header.css'
import './styles/Footer.css'
import './styles/PopularProducts.css'
import './styles/FavoriteList.css'
import './styles/ProductCard.css'
import './styles/ProductDetails.css'
import './styles/Carousel.css'
import './styles/BackButton.css'
import './styles/ProductList.css'
import './App.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Добавляем стили для предотвращения горизонтальной прокрутки
const style = document.createElement('style')
style.textContent = `
  html, body {
    overflow-x: hidden;
    max-width: 100%;
    width: 100%;
    position: relative;
  }
`
document.head.appendChild(style)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
