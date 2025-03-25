import React from 'react'
import {
	FaTelegram,
	FaVk,
	FaInstagram,
	FaEnvelope,
	FaGithub,
} from 'react-icons/fa'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='footer-section'>
					<h3>О DealStack</h3>
					<p>
						DealStack - современный сервис для сравнения цен на электронику. Мы
						помогаем пользователям находить лучшие предложения на рынке и
						принимать информированные решения при покупке.
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
							<FaTelegram /> <span>Telegram</span>
						</a>
						<a
							href='https://vk.com/kolyaasolo'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<FaVk /> <span>VK</span>
						</a>
						<a
							href='https://instagram.com/kolyaasolo'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<FaInstagram /> <span>Instagram</span>
						</a>
						<a
							href='mailto:solodovnikov.2003@gmail.com'
							className='contact-link'
						>
							<FaEnvelope /> <span>solodovnikov.2003@gmail.com</span>
						</a>
						<a
							href='https://github.com/kolyasolo'
							target='_blank'
							rel='noopener noreferrer'
							className='contact-link'
						>
							<FaGithub /> <span>GitHub</span>
						</a>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>&copy; {new Date().getFullYear()} DealStack. Все права защищены.</p>
			</div>
		</footer>
	)
}

export default Footer
