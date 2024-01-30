'use client'
import { useState } from 'react'


function DropdownMenu() {
	const [menuVisible, setMenuVisible] = useState(false)

	const handleMouseEnter = () => {
		setMenuVisible(true)
	}

	const handleMouseLeave = () => {
		setMenuVisible(false)
	}

	return (
		<div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<button
				id="dropdownHoverButton"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
			>
				Categorias{' '}
				<svg
					className="w-2.5 h-2.5 ml-2.5 transition-transform "
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
				</svg>
			</button>

			{menuVisible && (
				<div
					id="dropdownHover"
					className="absolute z-10 block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
				>
					<ul className="py-2 flex flex-col text-sm text-gray-700 dark:text-gray-200">
						<li>
							<a
								to="/categoria/electronics"
								className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								Electronica
							</a>
						</li>
						<li>
							<a
								to="/categoria/men's clothing"
								className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								Vestimenta hombre
							</a>
						</li>
						<li>
							<a
								to="/categoria/jewelery"
								className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								Joyas
							</a>
						</li>
						<li>
							<a
								to="/categoria/women's clothing"
								className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								Vestimenta mujer
							</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default DropdownMenu
