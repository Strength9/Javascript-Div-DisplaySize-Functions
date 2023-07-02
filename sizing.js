
/* Returns Screen Width by injecting a div centrally directly after the body opener */

function returnScreenWidth() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var ResultID = 'ResultsID';    
  var existingDiv = document.getElementById(ResultID);

  if (existingDiv) { existingDiv.remove(); }
  
  var bodyElement = document.getElementsByTagName("body")[0];
  const screenDetDiv = document.createElement("div");

  screenDetDiv.id = ResultID;  
  
  Object.assign(screenDetDiv.style, {
    backgroundColor: "rgba(0,0,100,0.2)",
    width: "200px",
    display: "block",
    padding: "20px",
    margin: "0 auto",
    textAlign: "center",
  });

  // Add to content and then display under body tag
  screenDetDiv.innerHTML = "<strong>Screen Width:</strong> " +  screenWidth + "px";
  bodyElement.insertBefore(screenDetDiv, bodyElement.firstChild);
}

/* Returns div size width/height from passed class array */
function returnDivSizes(classNames) {
  
   classNames.forEach(function(className) {
    // Perform the desired action for each class name
     
      var ResultID = className+'_0';    
      var existingDiv = document.getElementById(ResultID);
      if (existingDiv) { existingDiv.remove(); }
      const detaildiv = document.createElement("div");
      Object.assign(detaildiv.style, {
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "rgba(255,255,255,0.8)",
        display : "inline-block",
        margin: "10px 10px 0 auto",
        padding: "5px 10px",
        //height: "20px",
        lineHeight : "1.5",
        textAlign: "center",
        border: "1px dashed rgba(255,255,255,0.8)",
      });
      detaildiv.id = ResultID; 
      element = document.querySelector('.'+className);
      detaildiv.innerHTML = element.offsetWidth + "px&nbsp;/&nbsp;" + element.offsetHeight +"px";
      element.appendChild(detaildiv);
    });
};

/* inserts a div before a container div (single) with a size */
function returnHolder(className) {
  var ResultID = className+'_0'; 
  var existingDiv = document.getElementById(ResultID);
  if (existingDiv) { existingDiv.remove(); }
     
  element = document.querySelector('.'+className);   
  const detaildiv = document.createElement("div");
  Object.assign(detaildiv.style, {
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "rgba(255,255,255,0.8)",
   display : "block",
    margin: "10px auto 0 auto",
    padding: "5px 10px",
    width: element.offsetWidth+"px",
    lineHeight : "1.5",
    textAlign: "center",
    border: "1px dashed rgba(255,255,255,0.8)",
  });
  detaildiv.id = ResultID; 
   detaildiv.innerHTML = element.offsetWidth + "px&nbsp;/&nbsp;" +      element.offsetHeight +"px";
    
element.parentNode.insertBefore(detaildiv, element);

  
};

// Calls all three sizing functions
function updateScreenWidth() {
  returnScreenWidth()
  returnDivSizes(['small1', 'small2', 'lg1', 'lg2', 'textarea'])
  returnHolder('window_container')
}

// Initial update
updateScreenWidth();

// Add event listener to update on screen size changes
window.addEventListener("resize", updateScreenWidth);

