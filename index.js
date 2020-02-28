window.addEventListener('load', function Handler(){ //create event listener which run when page is load

  let doc = document.querySelector('body'); //declare parent node
  doc.style.backgroundImage = "url('photo_2020-02-26_11-11-55.jpg')";
  doc.style.backgroundSize = 'cover';
  let input1 = document.createElement('input'); //create first input and set attributes
  input1.type = 'text';
  input1.id = 'input1';
  doc.appendChild(input1);//add firts input on our node


  let input2 = document.createElement('input');//create second inpud and set attributes
  input2.type = 'text';
  input2.id = 'input2';
  doc.appendChild(input2);//add second input in our node

  let errorMessage1 = document.createElement('div');//create error div for first input and set attributes
  errorMessage1.style.background = 'pink';
  errorMessage1.innerHTML = ('it is not a number');
  errorMessage1.id = 'errorMessage1'
  errorMessage1.classList.add('error-message');//create class for error messages and add this error in it

  let errorMessage2 = document.createElement('div');//create error div for second input and set attributes
  errorMessage2.style.background = 'pink';
  errorMessage2.innerHTML = ('it is not a number');
  errorMessage2.id = 'errorMessage2'
  errorMessage2.classList.add('error-message');//create class for error messages and add this error in it

  let result = document.createElement('div');//create result div and set attributes
  result.id = 'result';
  result.style.background = 'pink';

  let button = document.createElement('button');//create button
  button.id = 'button';
  button.innerHTML = 'just push me!!!!!';
  doc.appendChild(button);//add button in our node
  //create event listener for button which run when it is clicked
  let buttonListner = document.querySelector('#button');
  buttonListner.addEventListener('click', function buttonHandler (){
    //create a finction which check if num contains only numbers
    function isNum(num){
      return !isNaN(parseInt(num)) && isFinite(num);
    }

    if(document.querySelector('#result')){
      result.parentNode.removeChild((result));//delete result div if it is already on page
    }
    //delete first error div if it has been already on page and input is not consist letters anymore
    if((isNum(input2.value)===false && isNum(input1.value)===true) || (isNum(input2.value)===true && isNum(input1.value)===true)){
      if(document.querySelector('#errorMessage1') === errorMessage1){
        errorMessage1.parentNode.removeChild(document.querySelector('#errorMessage1'));
      }
    }
    //add first error after first input if it contains letters
    else{
      doc.insertBefore(errorMessage1, input2);
    }
    //delete second error div if it has been already on page and input is not consist letters anymore
    if((isNum(input2.value)===true && isNum(input1.value)===false)||(isNum(input2.value)===true && isNum(input1.value)===true)){
      if(document.querySelector('#errorMessage2') === errorMessage2){
        errorMessage2.parentNode.removeChild(document.querySelector('#errorMessage2'));
      }
    }
    //add second error after second input if it contains letters
    else{
      doc.insertBefore(errorMessage2, button);
    }
    //calculate input values if they are not consist letters
    if (isNum(input1.value) && isNum(input2.value)){
      //errorMessage2.parentNode.removeChild(document.querySelector('.error-message'));
      document.querySelector('#result');
      result.innerHTML = parseFloat(input1.value) + parseFloat(input2.value);//add result in div
      doc.appendChild(result);//add result div to node and displays it on page
    }
    //just check if isNumm works correctly
    console.log(isNum(input1.value));
    console.log(isNum(input2.value));

  });

});
