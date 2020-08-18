
var getCount = function() {
    var number = prompt('How many kittens or cats would you like to order today?');
  
    while( number === '' || isNaN(number) ) {
      number = prompt('please enter the number of kittens or cats you would like to order today?');
    }

    console.log(typeof number);
    console.log('getCount():', Number(number));
    return Number(number);
  }
  var obtainChoice = function() {
    var choice = prompt('What kind would you like to adoapt? a cat or a kitten?').toLowerCase();
    var item;
  
    while(choice !== 'kitten' && choice !== 'cat') {
      choice = prompt('Please enter "cat" or "kitten"...');
    }
  
    if (choice === 'cat') {
      item = '<img src="images/cat.jpg">';
    } else if (choice === 'kitten') {
      item = '<img src="images/kitten.jpg">';
    }
  
    console.log('obtainChoice():', item);

    document.write(item);
    return item;
  }
  
  var showChoice = function() {
  
    for(var i = 0; i < total; i++) {
      result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }
  
    console.log('showChoice():', result)
    return result;
  }


  getCount();
  obtainChoice();
  showChoice();