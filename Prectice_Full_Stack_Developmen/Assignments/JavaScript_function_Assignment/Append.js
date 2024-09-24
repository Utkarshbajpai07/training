function createAndAppendDiv() {
    
    var newDiv = document.createElement("div");

    
    var uniqueId = 'ID :- ' +Math.floor(Math.random()*100000000000) ;
    newDiv.id = uniqueId;

    
    var textContent = document.createTextNode("This is a new div with ID: " + uniqueId);

    
    newDiv.appendChild(textContent);

    
    document.body.appendChild(newDiv);

    newDiv.style.backgroundColor = "#f0f0f0" ;
    newDiv.style.border = "2px solid #000";
    newDiv.style.padding = "10px";
    newDiv.style.margin = "10px";             
    newDiv.style.fontFamily = "Arial, sans-serif"; 
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    newDiv.style.height="200px";
    newDiv.style.width="200px"
    newDiv.style.color="#000";
    




}


createAndAppendDiv();