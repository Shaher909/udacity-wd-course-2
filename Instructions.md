# What's are we building?

You will be building a multi-section landing page

- Danymic navigation menu
- The section actively being viewed should be differentiated in some way
- When a user clicks on a navigation item, the item should scroll you to the appropriate section rather than giving you the default jump.

## Questions to think about

What’s the ideal workflow? build menu -> activ scroll -> set as active
How many files do I need? 1
Do I modify the HTML first or the CSS? HTML first
How many JavaScript functions do I need? 3 functions (build navigation, set active section, scroll)
Should my function be this many lines of code?
Is readability or performance more important?

## Approach

- Break your project down into small pieces of work and strategize your approach to each one. With these bite-sized amounts, it'll be easier to debug and fix any issues that appear.

Step 1 - define the menu markup
The Markup is as follow (`li` elements needs to be populated via JS):

```
<header class="page__header">
    <nav class="navbar__menu">
        <ul id="navbar__list">
            <li><a class="menu__link">test</a></li>
            <li><a class="menu__link">test</a></li>
        </ul>
    </nav>
</header>
```

Step 2 - create helper functions

- Go through the sections and store them into an array - OK
- Scroll to section based on clikc - OK

Step 3 - create a function to build the navigation menu - OK

- Create the markup based on the array - OK

Step 4 - create a function to scroll to the section - OK

- Add event listerer to the menu links (click) and call the scroll function - OK

Step 5 - highlight the active section
Layout already available:

```
your-active-class
```

### Steps:

- Start by linking your app.js.
- Build out your HTML and at least 4 content sections
- Build the navigation menu.
- Add functionality to distinguish the section in view.
- Add the functionality to scroll to sections.
- REFACTOR -https://eslint.org/play/
- Add additional sections to your HTML document.
- Test the performance.
- Add an active state to your navigation items when a section is in the viewport
- Additional:
  -- Hide fixed navigation bar while not scrolling (it should still be present on page load).
  -- Hint: setTimeout can be used to check when the user is no longer scrolling.
  -- Add a scroll to the top button on the page that’s only visible when the user scrolls below the -- fold of the page.
  -- Update/change the design/content.
  -- Make sections collapsible.
- Responsive landing page
- Comments (include proper comments)
- README

### Project Rubric:

https://learn.udacity.com/nanodegrees/nd0011/parts/cd0428/lessons/ls1853/concepts/ls1853-project-rubric
