const cityName=document.getElementById('name');
const units=document.getElementById('units');
document.querySelector('.search').addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(cityName.value=='')
    alert('Please add a city');
    else
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&units='+units.value+'&appid=1d345110923b58f9a5ab7aff3a243f5b',function(data){
    console.log(data);
    let unit='C';
    if(units.value=='imperial')unit='F';
    document.querySelector('.city').innerHTML='';
    document.querySelector('.icon').setAttribute('src','#');
    document.querySelector('.temperature').innerHTML='';
    document.querySelector('.weather').innerHTML='';
    document.querySelector('.city').append(data.name) ;
    document.querySelector('.icon').setAttribute('src',"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    document.querySelector('.temperature').append(data.main.temp+' °'+unit);
    document.querySelector('.weather').append(data.weather[0].main);
    document.querySelector('.map').setAttribute('src',"https://www.google.com/maps/embed/v1/place?key=AIzaSyAcyJN5WCTXuyYnpXuYg1xW8Hg6xRDNEmc&q=,"+data.name+"+"+data.sys.country);
    
});
}
