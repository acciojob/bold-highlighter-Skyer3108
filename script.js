function highlight() {
    //Write your code here

	   const boldElements = document.querySelectorAll('strong');
    
    // Iterate through all <strong> elements and change their color to green
    boldElements.forEach(element => {
        element.style.color = 'green';
    });


}


function return_normal() {
    //Write your code here

	  const boldElements = document.querySelectorAll('strong');
    
    // Iterate through all <strong> elements and change their color back to black
    boldElements.forEach(element => {
        element.style.color = 'black';
    });

    
}
