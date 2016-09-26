$(document).ready(function(){ 

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];     


//----------
//planets.reverse(); 
//for (var i=0;i<planets.length;i++){ 
  $.each (planets, function(i,planetspecific) { //taking out each planet from planets and naming it planetspecific
   $('<option/>').val(planets[i][1]) //creating option and value by grabbing array element
   .html(planets[i][0])
   .appendTo('#planet_value');
});
$( "button" ).click(function() {
  var planet_name = $('#planet_value option:selected ').text();
  var planet_weight = $('#weight_value').val();
  var planet_gravity = $('#planet_value').val();
  var weight_calculation = planet_weight * planet_gravity; 
 $("#userValue").html(("you are on" + planet_name + " " + "you weigh" + weight_calculation)); 
//document.getElementById('weight_calculation').innerHTML = "you are on" + planet_Value + " " + weight_calculation; 
});
});



//}
//var userweight = $("#weight_value").val();
//var planetname = $("#planet_value").text();

 

//for(var i = 0; i < planets.length; i++){ //
  //var opt = planets[i]; //variable for the option menu with i as planet value
  //var el= document.createElement("option"); //var element for the option 
  //el.value=planets[i].gravity;
  //el.innerHTML = planets[i].planet;
//select.appendChild(el);
//}

//function calculate()
//{
  //var select = document.getElementById('planet_value');
  //var options = select.options;
  //var selectedOption = options[select.selectedIndex]; // 0 1 2 number of array
  //var planetWeight = select.value;
  //var planetName = selectedOption.innerHTML;
  //var userWeight = document.getElementById("weight_value").value;
  //var totalWeight = planetWeight*userWeight; //result

//Math.round(totalWeight);

//document.getElementById('userValue').innerHTML = "you are on" + planetName + " " + totalWeight;  

//}

//function reverseString(str) {
  //  return str.split('').reverse().join('');
//}
//var astro= reverseString('Astro Weight Calculator');
//document.getElementById ('reverse').innerHTML = astro;


