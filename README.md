#Overview
Norgren Design site is a single page website, which switches views when a user navigates to another 'page'. The site is javascript heavy, utilizing both the jQuery js library and Angular JS framework.

##Dynamic Background

One of the fun challenges of this project was to build a dynamic background. Using flexbox css properties, I have created an array of figure elements, which are assigned a random class. That class assignment adds background images to the arrays. Reloading the page will alter their order. Switching between content sections currently will not, as the views are handled via javascript. This feature makes the background less distracting, yet attractive and dynamic.

##Build Overview

This page was built using javascript and DOM manipulation was handled using jQuery. As the site progresses, new functionalities and features have been added. For ease of maintenance, content for the about and company views are handled using Angular templates being passed json data. Form validation is also handled using Angular.

##About Module

The about view functionality has been built out as a module. The model for this content section relies on the last json object in the employee user array being set to default. This whole section can be turned off by removing contact calls from the nd.contact.js and ns.js files. There are last child element styles applied to this section, which could be an area for style troubleshooting. The model behind this module applies a conditional based on how many times the user has visited this page in particular. If a user has been to the page, a count object is passed to an array. If that array's length is greater than one, then the contactBtn build method is restricted from being invoked. 
