import React from 'react'
import { FaTelegram, FaVk, FaInstagram, FaEnvelope } from 'react-icons/fa'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='footer-section'>
					<h3>О DealStack</h3>
					<p>
						DealStack - это современный сервис для сравнения цен на электронику.
						Мы помогаем пользователям находить лучшие предложения на рынке,
						отслеживать изменения цен и принимать информированные решения при
						покупке.
					</p>
				</div>

				<div className='footer-section'>
					<h3>Контакты</h3>
					<div className='contact-links'>
						<a
							href='https://t.me/kolyaasolo'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<FaTelegram /> Telegram
						</a>
						<a
							href='https://vk.com/kolyaasolo'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<FaVk /> VK
						</a>
						<a
							href='https://instagram.com/kolyaasolo'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<FaInstagram /> Instagram
						</a>
						<a
							href='mailto:solodovnikov.2003@gmail.com'
							className='contact-link'
						>
							<FaEnvelope /> solodovnikov.2003@gmail.com
						</a>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>&copy; 2025 DealStack. Все права защищены.</p>
			</div>
		</footer>
	)
}

export default Footer
