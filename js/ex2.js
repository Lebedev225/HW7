// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];


let countryElement = document.getElementById("country")


countryElement.addEventListener("input", e => {

    let suggestions = document.getElementById("suggestions")

    suggestions.textContent = ""
    suggestions.classList.remove("suggestions")

    countryList.forEach(country => {

    if (country.toLowerCase().startsWith(e.target.value.toLowerCase()) 
        && e.target.value.length > 0) {

        suggestions.classList.add("suggestions");

        const countryElement = document.createElement("div");
        countryElement.textContent = country;

        countryElement.classList.add("suggestion");
        

        countryElement.addEventListener("click", eCountry => {
        e.target.value = country;
        })
            suggestions.appendChild(countryElement)
        }
    })
})
