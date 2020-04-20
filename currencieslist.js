

const table = document.getElementById('currencies')


var request = new XMLHttpRequest()

request.open('GET', 'https://www.csast.csas.cz/webapi/api/v1/rates/exchangerates?web-api-key=86d63706-3a9c-4762-bd7a-415651cc26f8', true)
request.onload = function() {
  
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(currency => {
      const row = document.createElement('tr')
      const country = document.createElement ('td')
      country.textContent = currency.country
      row.appendChild (country)
      const shortname = document.createElement ('td')
      shortname.textContent = currency.shortName
      row.appendChild (shortname)
      const currencyname = document.createElement ('td')
      currencyname.textContent = currency.name
      row.appendChild (currencyname)
      const midCNB = document.createElement ('td')
      midCNB.textContent = currency.cnbMid
      row.appendChild (midCNB)
      const currencybuy = document.createElement ('td')
      currencybuy.textContent = currency.currBuy
      row.appendChild (currencybuy)
      const currencysell = document.createElement ('td')
      currencysell.textContent = currency.currSell
      row.appendChild (currencysell)
      const currencymove = document.createElement ('td')
      currencymove.textContent = currency.move
      row.appendChild (currencymove)
      table.appendChild(row)
      
    })

    console.log(table)

  } else {
    console.log('error')
  }
}

request.send()
