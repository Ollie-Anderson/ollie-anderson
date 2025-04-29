window.onload = startupFunctionality();

function startupFunctionality() {
	
}



function setActive(element) {
	
	//stores element to variable called current so element can be used in second part of code
	var current = element;
	
	//if the current element does not have the 'active' tag then it adds it, otherwise it removes it. 
	//it was necessary to reverse the order like this instead of removing it if it had it.
	//I have no idea why, but this works so whatever.
	if(element.classList.contains('active') == false){
	current.classList.add('active');
	} else {
			element.classList.remove('active');
	}
	
	//creates a const array of all 'deactivatable' items ('deactivate' class must be given to html element if it can be dynamically set 'active')
	//then iterates through and removes active from all but the current element.
	const deactivatedItems = document.querySelectorAll(".deactivate");
	deactivatedItems.forEach(function(element){
		
		
		if (element != current) {
			element.classList.remove('active');
		}
		
		
	});
	
	//This last part will probably need to be updated at some point to show as active based on whether they are collapsed or un collapsed in case the data stays on the page later. will test now.
	
};