var request = new XMLHttpRequest()
request.open('GET','https://restcountries.com/v3.1/all','true')
request.send()
request.onload = function () {

var data = JSON.parse(this.response)
    
//Get all the countries from Asia continent /region using Filter method

function getCountryName(item) {
    return item.name.common
}

function filterByContinent(item) {
    if (item.region==='Asia') {
      return true
    }
    return false
}
  
const result_1 = data.filter(filterByContinent).map(getCountryName)
console.log(result_1)

//Get all the countries with a population of less than 2 lakhs using Filter method

function filterByPopulation(item) {
    if (item.population < 200000) {
      return true
    }
    return false
}
  
const result_2 = data.filter(filterByPopulation).map(getCountryName)
console.log(result_2)

//Print the following details name, capital, flag, using forEach method

data.forEach((element) => {
    console.log(`Name:${getCountryName(element)}, Capital:${element.capital}, Flag:${element.flag}`)
})

//Print the total population of countries using reduce method

let result_4 = data.reduce((accumulator,currentValue) => {
    return accumulator + currentValue.population
},0)

console.log(`Total Population: ${result_4}`)

//Print the country that uses US dollars as currency

function filterByCurrency(item) {
    if(item.currencies && item.currencies.USD) {
      return true
    }
    return false
}
  
const result_5 = data.filter(filterByCurrency).map(getCountryName)
console.log(result_5)

}