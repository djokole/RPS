$(document).ready(function() {

var choice1;
var val2;
var choice2;

	document.getElementById('results').style.visibility = 'hidden';
	document.getElementById('playdiv').style.visibility = 'hidden';

  $('#rock').on('click', function() {
  	document.getElementById('playdiv').style.visibility = 'visible';
  	$('#pcchoice').empty();
    $('#mychoice').empty();
    choice1 = 'ROCK';
    $('#mychoice').append(choice1);
  });

  $('#paper').on('click', function() {
  	document.getElementById('playdiv').style.visibility = 'visible';
  	$('#pcchoice').empty();
  	$('#mychoice').empty();
    choice1 = 'PAPER';
    $('#mychoice').append(choice1);
  });

  $('#scissors').on('click', function() {
  	document.getElementById('playdiv').style.visibility = 'visible';
    $('#pcchoice').empty();
    $('#mychoice').empty();
    choice1 = 'SCISSORS';
    $('#mychoice').append(choice1);
  });

  $('.chobut').on('click', getChoice2());

  function getChoice2() {	
  	val2 = Math.random();
  	if (val2 <= 0.333) {
  		choice2 = 'ROCK';
  	} else if (val2 >= 0.666) {
  		choice2 = 'SCISSORS';
  	} else {
  		choice2 = 'PAPER'
  	}
  };

  $('#playbt').on('click', function () {
  	getChoice2();
  	$('#pcchoice').empty();
  	$('#pcchoice').append(choice2)
  	$('#results').empty();
  	document.getElementById('results').style.visibility = 'visible';
  	let result;
  	if (choice1 == '') {alert('Choose your sign')};
  	if (choice1 == 'ROCK') {
  		if (choice2 == 'ROCK') {
  			result = "IT'S A TIE";}
  		else if (choice2 == 'PAPER') {
  			result = 'PC WON';}
  		else { result = 'YOU WON'}
  	}
	else if (choice1 == 'PAPER') {
  		if (choice2 == 'ROCK') {
  			result = "YOU WON";}
  		else if (choice2 == 'PAPER') {
  			result = "IT'S A TIE";}
  		else { result = 'PC WON'}
  	} 
  	else {
  		if (choice2 == 'ROCK') {
  			result = 'PC WON';}
  		else if (choice2 == 'PAPER') {
  			result = 'YOU WON';} 
  		else {result = "IT'S A TIE"}
	};
	$('#results').append(result);
	if (result == 'YOU WON') {
		$('#results').css('color', '#03a45e')}
	else if (result == 'PC WON') {
		$('#results').css('color', '#ee1c25')}
	else {
		$('#results').css('color', 'black')}
  	
  });


});