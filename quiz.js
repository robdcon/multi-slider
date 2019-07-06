
const makeActive = (e) =>
{
	$(e.target).closest('.options').children().removeClass('selected')
	$(e.target).closest('.option').addClass('selected')
}



const slider = () => 
{
	let position = 0 // Index position of initial slide
	let currentPage = 0 // Initialise to indicate page numuber
	const target = $('#quiz-wrapper') // Slide container
	const slides = $(target).children()

	$($(slides)[position]).addClass('active') // Make first slide active on initialisation
	$('.current-page').html(currentPage) // Set the page indicator to the current page value

	const changeSlide = (pos) =>
	{
	
		if(pos > $(slides).length - 1)
		{
			position = 0
		}
		else if(pos < 0)
		{
			position = $(slides).length - 1
		}
		else
		{
			position = pos
		}
		
		$($(slides)[position]).addClass('active').siblings().removeClass('active') // Add the active class to the current slide and remove from its siblings
		$('.current-page').html(position) // Set new page indicator incrementing by 1 to account for 0 indexing

	}

	const controls = 
	{
	
		next: () => {let pos = ++position; changeSlide(pos)},
		prev: () => {let pos = --position; changeSlide(pos)},
	}

	return controls
}



$(document).ready(function()
{
	
	const slides = $('#quiz-wrapper').children()
	
	const sliderControls = slider()


	const delayChange = () =>
	{
		setTimeout(sliderControls.next, 500)
	}
	
	$('.option').on('click', makeActive)
	$('.option').on('click', delayChange)
	$('.option').on('click', () => {let check = calcResult(); if(check){$('.message-page').html('<h1>'+check+'</h1>')}})
	$('.arrow-left').on('click', sliderControls.prev)
	$('.arrow-right').on('click', sliderControls.next)
	$('.start').on('click', sliderControls.next)

})

getMissingAnswers = () =>
{
	const array = $('#quiz-wrapper').children()
	let missing = []
	$.each($(array), function()
	{
		$.each($('.option'), function()
		{
					
		}) 
		
			
	})
	console.log("Missing: ", missing)
}

const getScore = () =>
{
	const array = $('#quiz-wrapper').children()
	let val = 0
	$.each($(array), function()
	{
		if($(this).find('.selected').data('val'))
			val += $(this).find('.selected').data('val')
	})
	console.log(val)
	return val
}

const calcResult = () =>
{
	const result = getProgress()
	if(result === 10)
		return 'Your Score is ' + getScore()*2 + '%'
	else 
		return false
	
}

const getProgress = () => 
{
	let progress = 0
	const array = $('#quiz-wrapper').children()

	
		$.each($('.slide .option'), function(i)
		{
			
			if($(this).hasClass('selected'))
			{
				progress++
				console.log(this)
			}	
		})
	$('.progress-bar').css('transform', 'scaleX('+(progress/10)+')')
	
	return progress
	
}










