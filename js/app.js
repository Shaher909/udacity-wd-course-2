/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navigationItems = [];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function getSections() {
  const sectionsNodeList = document.querySelectorAll("section");
  navigationItems.push(...sectionsNodeList);
  console.log(navigationItems);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNavigationMenu(menuItems) {
  // Get the navigation bar element based on its ID
  const navBar = document.getElementById("navbar__list");

  // Create a document fragment to hold the menu items (in order to avoid multiple reflows)
  const menuItemsFragment = document.createDocumentFragment();

  // Loop through the menu items and create a list item and link for each one
  for (const item of menuItems) {
    const newListItem = document.createElement("li");
    const newListItemLink = document.createElement("a");

    // Set the href attribute of the link to the ID of the section and its text
    newListItemLink.href = `#${item.id}`;
    newListItemLink.textContent = item.getAttribute("data-nav");

    // Append the link to the list item and the list item to the document fragment
    newListItem.appendChild(newListItemLink);
    menuItemsFragment.appendChild(newListItem);
  }

  // Append the document fragment to the navigation bar
  navBar.appendChild(menuItemsFragment);
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {}

// Scroll to anchor ID using scrollTO event
function scrollToSection() {}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
getSections();
buildNavigationMenu(navigationItems);

// Scroll to section on link click

// Set sections as active
