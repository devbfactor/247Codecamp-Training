//DOM - Document Object Model
//console.log(window)

// *** SELECTORS *** //
//Single element Selectors
console.log(document.getElementById('my-form'))
console.log(document.querySelectorAll('.container'))


//Multiple element Selectors
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'));

//=====================================================
console.log('=========================================')

//Loop through items
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//=====================================================
console.log('=========================================')
//manipulate dom

// const ul = document.querySelector('.items');
// //ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Changed text content";
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h2>Hello</h2>'

//=====================================================
console.log('=========================================')
//events

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     //console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     //console.log(e);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-light');
//     // document.querySelector('.items')
//     // ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
// });


//=====================================================
console.log('=========================================')
//form script

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  // console.log(nameInput.value)

  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    //console.log('success')
    // Create a list item and Add the entered name and email
     const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // style the added item
    li.innerHTML = `<strong>${nameInput.value}</strong>: ${emailInput.value}`;

    // Append to ul #users
    userList.appendChild(li);

    // Clear fields after adding to list
    nameInput.value = '';
    emailInput.value = '';
  }
}