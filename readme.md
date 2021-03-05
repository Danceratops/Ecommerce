# What is React.js?
React.Js is a javascript library for building interfaces. React.Js was created by Facebook and today is maintained by a community of individual developers and companies.
React can be used for single page web apps or mobile applications.
React is great at rapidly fetching ever changing data. 
Complex React applications require other applications for things like state management, routing and interactio with an API.

# Why react.JS

## Simple and Lightweight
React.js deals only with the interface of an application unlike other frameworks such as Amber and Angular.
Any javascript developer can pick up React and learn the basics after a couple of days of practice.
React allows for a component based structure.

### Why Components?
Components are like lego pieces.
They are resuable and small.
This allows for consistent interfaces.
Allows for a more maintainable code base.

## Faster Render on the Virtual DOM
When creating a web application with a high level of user interaction you need to consider performance issues.
Updating the DOM is a big bottleneck to performance.
React attempts to fix this problem with the virtual DOM

### What is the virtual DOM and how does it work?
The virtual DOM is stored in memory.
Any changes are first made in the virtual DOM.
An effeicient algorithm then compares the virtual DOM to the DOM and determines what needs to change and the best way to do it.
This allows for minimum read and write time.