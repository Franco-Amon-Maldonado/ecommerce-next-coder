import CardProducto from '@/components/CardProducto'

export default function Home() {
	return (
		<main className="min-h-screen max-w-7xl m-auto bg-white">

			<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 mt-10">
				<article>
					<CardProducto />
				</article>

				<article>
					<CardProducto />
				</article>

				<article>
					<CardProducto />
				</article>

				<article>
					<CardProducto />
				</article>
			</section>
      
		</main>
	)
}
