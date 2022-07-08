//id dwara tisukoni vacham
let inputEle = document.getElementById("location-input")
// console.log(inputEle);
let tempEle = document.getElementById("temp-value")
// console.log(tempEle);
let locEle = document.getElementById("location")
// console.log(locEle);
let weatherdescEle = document.getElementById('weather-desc')
// console.log(weatherdescEle);
let btnEle = document.getElementById("btn");
// console.log(btnEle);


const apiKey = '8f4485f5f505ef4d2ad72e90b213a15f';
// console.log(apiKey);
//weather information manadagara ledu oka server lo vundi
//e server ki manam request pampali ante 
//button meda click chesinapudu api request velthundi
//button click chesinapudu event listner add cheyali
//below onclick event listner getelementbth ni btnele lo store chesukunam
//chesukoni dani meda event listner pass chesi function chesthunam

btnEle.onclick = function(){
//user em valu enter cheyaka pothe
    if(inputEle.value =="")
        alert("Please Enter some location")
    else{
//user value ni enter cheste adi oka variable lo store cheyali
        loc = inputEle.value
  //      console.log(loc);
//api request pampali url vundali
//q=$(loc) user input box lo e value isthado adi mention cheyali
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
//weather api ki request pampali (https request pampachu or fetch method dwara pampachu)
//https request pampinchadaniki js xmlhttp request object dwara pampachu)
fetch(url).then(res => res.json())
// conti -44 next line then vachina data ni json format (js object ) lo convert cheyali
// conti-45 malli pyna json method inkoka promise method isthundi
//fetch method oka promise obj ni return chesthundi dani manam access cheyali ante
//then ane method dwara access chestham 
//pro obj ediana return chesthadi ante then and catch
//promise success ayinapudu then run avuthundi success kakpothe catch method run
//fetch method oka promise ni return chesthundi ha promise result kavali ante then method dwara access chestham
//then method oka fucntion ni call chesthundi ha function ni diff types lo rayachu
.then(data => {
    //console.log(data);
        
//js object vasthundi andulo manaku kavalisina property use chestham
//js obj destructuring use chesanu below (ha obj lo ediana particular key sambhandichina value ni oka variable lo store chesukuntam )   
const{name} = data
           const{feels_like} = data.main
           //console.log(feels_like);
           const{description} = data.weather[0]
          //console.log(description);
           tempEle.innerText = Math.floor(feels_like-273);
           locEle.innerText = name;
           weatherdescEle.innerText= description
        })

//incase location wrong isthe response radu apudu catch method use cheyali lo chupichali
//catch promise result correct ga rani apudu 
.catch(()=>{
            alert("Enter valid location")
        })
//last lo input field ni clear cheyali " 'empty petam"
        inputEle.value = ""
    }
}
