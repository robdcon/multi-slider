$(document).ready(function()
{
	
	var slideControls = slider()
	$('#right').on('click', slideControls.increment)
	$('#left').on('click', slideControls.decrement)
	//test()
	
})

// function test()
// {
// 	console.log('test-working')
// }

function slider()
{
	
	
	let slideLength = $('.slide').eq(0)[0].offsetWidth 
	console.log(slideLength)
	let position = 0
	
	//console.log(slideLength)
	const $slideTrack = $('.slide-container-inner')
	$('.slide-container-inner').children().first().addClass('active')
	let next = $('.active').next()
	let prev = $('.active').prev()
	const slides = $('.slide-container-inner').children()
	const length = $('.slide-container-inner').children().length
	
					
	return  {

		
		decrement: ()=>
		{
			if($('.active').index() - 1 < 0)
			{
				position = -(slideLength * (length - 1 )) 
				
				console.log("POS: ", position)
				//console.log( $('.active').index() )

				$('.active').removeClass('active')
				slides.last().addClass('active')
				$slideTrack.css('transform', 'translateX('+ position +'px)')
			}
			else
			{
				
				position = position + slideLength
				console.log("POS: ", position)
				
				//console.log( $('.active').index() )

				$('.active').removeClass('active').prev().addClass('active')
				$slideTrack.css('transform', 'translateX('+ position +'px)')
			}
		},	
			
		

		increment: ()=>
		{
			if($('.active').index() + 1 > length -1)
			{
				position = 0
				
				console.log("POS: ", position)
				//console.log( $('.active').index() )

				$('.active').removeClass('active')
				slides.first().addClass('active')
				$slideTrack.css('transform', 'translateX('+ position +'px)')
				
			}
			else
			{
				position = position - slideLength
				
				 console.log("POS: ", position)
				//console.log( $('.active').index() )

				$('.active').removeClass('active').next().addClass('active')
				$slideTrack.css('transform', 'translateX('+ position +'px)')
			}
		},
		getPos: () => {return position},

	}			
				
}


