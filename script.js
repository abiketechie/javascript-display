var row = 1;


var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);


function displayDetails() {
    var name = document.getElementById("name").value;
    var height = document.getElementById("height").value;
    var country = document.getElementById("country").value;

    

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = height;
    cell3.innerHTML = country;
    
    row++;
    
}