const switchPlanet = event => {
	const center = document.querySelector('.center')
	const hidden = document.querySelector('.hidden')
	const left = document.querySelector('.left')
	const right = document.querySelector('.right')
	
	if (event?.target?.classList?.contains('left')) {
		left.classList.remove('z-1')
		left.classList.replace('left', 'center')
		center.classList.add('z-1')
		center.classList.remove('z-0')
		center.classList.replace('center', 'right')
		right.classList.remove('z-1')
		right.classList.add('z-0')
		right.classList.replace('right', 'hidden')
		hidden.classList.replace('hidden', 'left')
		hidden.classList.remove('z-0')
		hidden.classList.add('z-1')
	}
	
	if (event?.target?.classList?.contains('right')) {
		left.classList.replace('left', 'hidden')
		left.classList.remove('z-1')
		left.classList.add('z-0')
		center.classList.replace('center', 'left')
		center.classList.add('z-1')
		center.classList.remove('z-0')
		right.classList.replace('right', 'center')
		right.classList.remove('z-1')
		hidden.classList.replace('hidden', 'right')
		hidden.classList.remove('z-0')
		hidden.classList.add('z-1')
	}
}

document.querySelectorAll('planet')
	.forEach(planet => planet.addEventListener('click', switchPlanet))