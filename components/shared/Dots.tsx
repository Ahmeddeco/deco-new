type Color =
	| 'bg-chart-1'
	| 'bg-chart-2'
	| 'bg-chart-3'
	| 'bg-chart-4'
	| 'bg-chart-5'
type DotsProps = {
	color: Color
	rowNumber: number
	className: string
}

const Dots = ({ color, rowNumber, className }: DotsProps) => {
	const totalDots: number = rowNumber * 6
	const dotsArray = Array.from({ length: totalDots })

	return (
		<div className={`${className} -z-50 absolute`}>
			<div className={`grid grid-cols-6 gap-4 h-auto w-fit `}>
				{dotsArray.map((_, index) => (
					<div key={index} className={`size-2 ${color} rounded-full `} />
				))}
			</div>
		</div>
	)
}

export default Dots
