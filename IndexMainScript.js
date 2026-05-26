function loadLocations(){ // Load the json file with the CS2 smoke Locations and apply it to the Selection menu in index.html
    
    // Get the selected map and side from the dropdown menus
    var SideSelection = document.getElementById("side");
    var MapSelection = document.getElementById("map"); 
    var LocationSelection = document.getElementById("location");
    var map = MapSelection.value;
    var side = SideSelection.value;

    // get the json file with the locations and apply it to the selection menu
    fetch('MapData.json')
        .then(response => response.json())
        .then(data => {
            console.log(map);
            console.log(side);
            console.log(data);
            data[map][side]["Locations"].forEach(Location => {
                var option = document.createElement("option");
                option.text = Location.toString();
                LocationSelection.add(option);
            });
        });
};

function FindSmokes(){

    var SelectionMenu = document.getElementById("location");
    var selection = SelectionMenu.value
    document.createElement("img").innerHTML = "<img src='IMAGES/" + selection + ".png' alt='" + selection + " Smoke'>";

}
