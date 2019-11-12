//CONSTRUKTOSKA FJA:

function Country (name, odds, continentEl){
    this.name = name;
    this.odds = odds;
    this.continent = continentEl;
}

function Person (name, surname, dateOfBirth){
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
}

function Player(personObject, betAmount, countryObject) {
    this.person = personObject;
    this.betAmount = betAmount;
    this.drzava = countryObject;
 }
 
 function Address(countryObject, city, postalCode, street, number) {
     this.country = countryObject;
     this.city = city;
     this.postalCode = postalCode;
     this.street = street;
     this.number = number;
 
 }
 
 function BettingPlace(addressObject) {
     this.addressObject = addressObject;
     this.listOfPlayers = [];
 }
 function BettingHouse(competition) {
     this.competition = competition;
     this.listOfBettingPlaces = [];
     this.numberOfPlayers = 0;
 }

 var continent = {
     EU: "Europe",
     AS: "Asia",
     AF: "Africa",
     SA: "South America",
     NA: "North America",
     AU: " Australia",

} // kako da se ne menjaju kontinenti???

function createPerson (){
    return this.name + " " + this.surname + " " + this.dateOfBirth + " ";
}

function createAddress (){
    return this.street + " " + this.number + " " + this.postalCode + " " + this.country;
}

funtion createPlayer (){
    return this.drzava + " " + this.betAmount + "eur" + this.person.name + this.person.surname;  //godine??
}

function createBettingPlace (){
    return this.street + " " + this.postalCode + " " + this.country;

}