

/**
* Function to copy code content
*/
function copyCode(event,idName){
	
	var copyText = document.getElementById(idName);
	var textContent = copyText.innerText;
	navigator.clipboard.writeText(textContent.trim());
	
	
	event.target.classList.remove("bi-clipboard");
	event.target.classList.add("bi-check-lg");
	event.target.classList.add("ab-green-font");
	event.target.classList.add("animate__animated"); 
	event.target.classList.add("animate__bounce");
	
	setTimeout(function(){
		event.target.classList.remove("bi-check-lg");
		event.target.classList.remove("ab-green-font");
		event.target.classList.remove("animate__animated"); 
		event.target.classList.remove("animate__bounce");		
		event.target.classList.add("bi-clipboard");
	},800);	
	
}

/**
* function to display HTML article tags from the sidebar
*/
function showArticle(idName){
	
	var article;

	//Hide all page table of content
	var pageToc = document.getElementsByClassName("page-toc");
  	for (i = 0; i < pageToc.length; i++) {
    	pageToc[i].style.display = "none";
  	}


	//Display target article 
	article = document.getElementsByTagName("article");
	  for (i = 0; i < article.length; i++) {
	    article[i].style.display = "none";
	  }
	document.getElementById(idName).style.display = "block";
	
}

/**
 * function to show details inside an HTML article tag
 * @param {*} className 
 * @param {*} idName 
 */
function showContainer(className, idName){
	var classColorDiv;

	//Hide all page table of content
	var pageToc = document.getElementsByClassName("page-toc");
  	for (i = 0; i < pageToc.length; i++) {
    	pageToc[i].style.display = "none";
  	}

	// Get all elements with class="tabcontent" and hide them
	classColorDiv = document.getElementsByClassName(className);
  	for (i = 0; i < classColorDiv.length; i++) {
    	classColorDiv[i].style.display = "none";
  	}

	document.getElementById(idName).style.display = "block";
	document.getElementById(idName.concat("-toc")).style.display = "block";
	
}

function collapse(event, idName){
	
	if(document.getElementById(idName).className == "ab-collapse-content-show"){
		event.target.classList.remove("ab-collapse-item-expended");
		event.target.classList.add("ab-collapse-item-collapsed");

		document.getElementById(idName).classList.add("ab-collapse-content");
		document.getElementById(idName).classList.remove("ab-collapse-content-show");

//		document.getElementById(idName).style.display = "none";
	} else {
		event.target.classList.remove("ab-collapse-item-collapsed");
		event.target.classList.add("ab-collapse-item-expended");

		document.getElementById(idName).classList.remove("ab-collapse-content");
		document.getElementById(idName).classList.add("ab-collapse-content-show");


		//document.getElementById(idName).style.display = "block";
	}

}


function showHide(idName){
	
	if(document.getElementById(idName).style.display == "block"){
		document.getElementById(idName).style.display = "none";
	} else {
		document.getElementById(idName).style.display = "block";
	}

}



/**
 * function to manage Tabs selection 
 */

 function openTab(evt, idName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(idName).style.display = "block";
  evt.currentTarget.className += " active";
} 

/**
 * Function to navigate to a specific tab
 */
function toTab(id) {
	
	document.getElementById(id).click();
	location.href = '#'+id;
}


/**
 * Function to include HTML page into another HTML page
 * @returns Function to 
 */
function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
	  elmnt = z[i];
	  /*search for elements with a certain atrribute:*/
	  file = elmnt.getAttribute("ab-include-html");
	  if (file) {
		/* Make an HTTP request using the attribute value as the file name: */
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		  if (this.readyState == 4) {
			if (this.status == 200) {elmnt.innerHTML = this.responseText;}
			if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			/* Remove the attribute, and call this function once more: */
			elmnt.removeAttribute("w3-include-html");
			includeHTML();
		  }
		}
		xhttp.open("GET", file, true);
		xhttp.send();
		/* Exit the function: */
		return;
	  }
	}
  }

