// Character list. Each house has a name and a code
const houses = [
{
    code: "ST",
    name: "Stark"
},
{
    code: "LA",
    name: "Lannister"
},
{
    code: "BA",
    name: "Baratheon"
},
{
    code: "TA",
    name: "Targaryen"
}
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
switch (houseCode) {
    case "ST":
    return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
    return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
    return ["Robert", "Stannis", "Renly"];
    case "TA":
    return ["Aerys", "Daenerys", "Viserys"];
    default:
    return []; // Empty array
}
};

let options = document.getElementById("house")

// Try to use JQuery

for (let i = 0; i < houses.length; i++) {

    let house = document.createElement("option");
    house.setAttribute("value", `${houses[i].code}`)
    
    let houseName = document.createTextNode(houses[i].name);
    house.appendChild(houseName);

    options.appendChild(house)

}


//switch to options to declutter
options.addEventListener("change", e => {
    let characterList = getCharacters(e.target.value)
    let bulletList = document.getElementById("characters")
    bulletList.innerHTML = ""


    for (let i = 0; i < characterList.length; i++) {

        let character = document.createElement("li");
        let characterName = document.createTextNode(characterList[i]);
        character.appendChild(characterName)

        let bulletList = document.getElementById("characters")
        bulletList.appendChild(character)

    }

    console.log(characterList)
})