#Overview
Norgren Design site is a single page website, which switches views when a user navigates to another 'page'. The site is javascript heavy, utilizing both the jQuery js library and Angular JS framework.

One of the fun challenges of this project was to build a dynamic background. Using flexbox css properties, I have created an array of figure elements, which are assigned a random class. That class assignment adds background images to the arrays. Reloading the page will alter their order. Switching between content sections currently will not, as the views are handled via javascript. This feature makes the background less distracting, yet attractive and dynamic.

###A note regarding Angular and jQuery overlap

This page was initially built using javascript and DOM manipulation was handled using jQuery. As steps are completed on the site, new functionalities and requests have come in. For ease of maintenance, content for several pages are handled using Angular templates being passed json data. Form validation is also handled using Angular. At the current site size, there isn't any overlap.
