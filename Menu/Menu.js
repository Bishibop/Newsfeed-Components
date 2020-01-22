/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function openMenu() {
  menu.classList.toggle('menu--open');
  gsap.fromTo(
    menu,
    { x: -350},
    { duration: 2, x: 0 }
  );
}

function closeMenu() {
  gsap.fromTo(menu, {x: 0}, {
    duration: 2,
    x: -350,
    onComplete: () => { menu.classList.toggle('menu--open'); }
  });
}

function buildMenu(menuArray) {
  let menu = document.createElement('div');
  menu.classList.add('menu');

  let menuItemsList = document.createElement('ul');

  menuArray.forEach(menuText => {
    let menuElement = document.createElement('li');
    menuElement.textContent = menuText;
    menuItemsList.appendChild(menuElement);
  });

  menu.appendChild(menuItemsList);

  // Toggles the menu
  let menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', event => {
    if (menu.classList.contains('menu--open')) {
      closeMenu();
    } else {
      openMenu();
    }
    event.stopPropagation();
  });

  // Catches the click on the menu so that the menue won't close if you click
  // on it
  menu.addEventListener('click', event => {
    event.stopPropagation();
  });

  return menu;
};

let menu = buildMenu(menuItems);
document.querySelector('.header').appendChild(menu);

document.querySelector('body').addEventListener('click', event => {
  if (menu.classList.contains('menu--open')) {
    closeMenu();
  }
});

