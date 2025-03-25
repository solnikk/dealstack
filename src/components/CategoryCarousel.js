// import React from "react";
// import Slider from "react-slick";

// function CategoryCarousel({ categories, onSelectCategory }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="category-carousel">
//       <h2>Categories</h2>
//       <Slider {...settings}>
//         {categories.map((category) => (
//           <div key={category.id} className="category-item" onClick={() => onSelectCategory(category.name)}>
//             <img src={category.image} alt={category.name} className="category-image" />
//             <h3>{category.name}</h3>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default CategoryCarousel;

import React from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function CategoryCarousel({ categories, onSelectCategory }) {
	const NextArrow = ({ onClick }) => (
		<div className='slick-arrow next-arrow' onClick={onClick}>
			<FaChevronRight />
		</div>
	)

	const PrevArrow = ({ onClick }) => (
		<div className='slick-arrow prev-arrow' onClick={onClick}>
			<FaChevronLeft />
		</div>
	)

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		centerMode: true,
		centerPadding: '0',
		focusOnSelect: true,
		cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	}

	return (
		<div className='category-carousel-wrapper'>
			<h2 className='section-title'>Популярные категории</h2>
			<Slider {...settings} className='custom-slider'>
				{categories.map(category => (
					<div
						key={category.id}
						className='category-item'
						onClick={() => onSelectCategory(category.name)}
					>
						<div className='category-image-wrapper'>
							<img
								src={category.image}
								alt={category.name}
								className='category-image'
							/>
							<div className='category-overlay'>
								<h3 className='category-title'>{category.name}</h3>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default CategoryCarousel
