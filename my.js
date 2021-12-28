function testGS(){
var url = "https://script.google.com/macros/s/AKfycbxloPIyy6whKzduymK3OE1M4ZY76mIACSICNaiY8rhrIKDUO8_5kO2MyKQS5tLMM6A3pw/exec"

fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status
    });
}

function addGS(){
var url = "https://script.google.com/macros/s/AKfycbxloPIyy6whKzduymK3OE1M4ZY76mIACSICNaiY8rhrIKDUO8_5kO2MyKQS5tLMM6A3pw/exec"
    
    fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    body: JSON.stringify({"FullName":"Гончарук Юлия Викторовна","E-mail":"jgonchar27@gmail.com","Phone":796666666,"Answer1":"Да","Answer2":"Основной доход","Answer3":"Русский","Answer4":"Согласен","Answer5":"Да, готов, но меня это смущает, хочу больше информации","StatusReq":"Обработан"}) // body data type must match "Content-Type" header
    });
    }
document.getElementById("btn2").addEventListener("click",addGS);
document.getElementById("btn").addEventListener("click",testGS);
