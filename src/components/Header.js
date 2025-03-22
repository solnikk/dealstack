import {FaHeart, FaRegHeart, FaMoon, FaSun } from 'react-icons/fa'
import React, { useState } from "react";

function Header({ onSearch, onShowFavorites, favoritesCount , darkMode, toggleDarkMode}) {
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters); // Вызываем функцию поиска
  };

  return (
    <header className="header">
      <div className="logo-section">
        <h1>DealStack</h1>
        <button 
          className="theme-toggle logo-theme-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
      
       <div className="header-controls">
        <button 
          className="favorites-button"
          onClick={onShowFavorites}
        >
          <div className="favorites-icon-wrapper">
            {favoritesCount > 0 ? (
              <FaHeart className="favorites-icon filled" />
            ) : (
              <FaRegHeart className="favorites-icon" />
            )}
            <span className="favorites-badge">{favoritesCount}</span>
          </div>
          <span className="favorites-label">Избранное</span>
        </button>
         
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="name"
          placeholder="Поиск"
          value={filters.name}
          onChange={handleChange}
          className="search-input"
        />
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="search-select"
        >
          <option value="">Все категории</option>
          <option value="Smartphones">Смартфоны</option>
          <option value="Laptops">Ноутбуки</option>
          <option value="Tablets">Планшеты</option>
          <option value="Headphones">Наушники</option>
        </select>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="search-select"
        >
          <option value="">Все бренды</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Asus">Asus</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Bose">Bose</option>
          <option value="Jabra">Jabra</option>
          <option value="Sennheiser">Sennheiser</option>
          <option value="Sony">Sony</option>
          <option value="HP">HP</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Dell">Dell</option>
          <option value="Razer">Razer</option>
          <option value="Microsoft">Microsoft</option>

        </select>
        <button type="submit" className="search-button">
        Найти
        </button>
      </form>
      </div>
    </header>
  );
}

export default Header;