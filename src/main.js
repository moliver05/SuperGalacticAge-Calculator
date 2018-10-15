import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { galaxyCal } from './galaxyCal';
// import { galaxyCal } from '../src/galaxyCal.js'

$(document).ready(function() {
$("form#ageForm").submit(function(event){
event.preventDefault();
let age = parseInt($("#userInput").val());
let newAge = new galaxyCal(age);
console.log(age);

$("#mercuryAge").text(newAge.ConvertMercuryAge());
$("#marsAge").text(newAge.ConvertMarsAge());
$("#venusAge").text(newAge.ConvertVenusAge());
$("#jupiterAge").text(newAge.ConvertJupiterAge());
$("#jupiterAgeLeft").text(newAge.JupiterAgeLimit());
$("#marsAgeLeft").text(newAge.MarsAgeLimit());
$("#venusAgeLeft").text(newAge.VenusAgeLimit());
$("#mercuryAgeLeft").text(newAge.MercuryAgeLimit());


});
});
