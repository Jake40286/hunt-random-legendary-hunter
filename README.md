# Hunt Showdown Random Hunter Selector

This project is a web-based random hunter selector for the video game Hunt Showdown. It allows the user to select eligible hunters from a provided list, and then randomly selects one of those hunters upon request.

## Features

- Display a list of all the legendary hunters in Hunt Showdown.
- Allow the user to select hunters that will be eligible for random selection.
- Display a button that, when clicked, randomly selects one of the eligible hunters and displays it on the screen.
- Remember the user's selection of eligible hunters across page reloads using localStorage.

## How it Works

When the page loads, it displays two boxes. The left box contains a list of all the legendary hunters in Hunt Showdown. The user can click on any of the hunters in this box to move them to the right box, which represents the eligible hunters for random selection.

There is also a button on the page labeled "Roll a Random Hunter". When clicked, this button will randomly select one of the hunters in the right box (if there are any) and display their name underneath the button.

The selection of eligible hunters is stored in the user's browser using the localStorage Web API. This allows the selection to persist across page reloads. When the page is reloaded, it will load the selection from localStorage and display the selected hunters in the right box.

## How to Use

To use this project, simply open the HTML file in your web browser. Select the hunters you want to be eligible for random selection by clicking on their names in the left box. Once you've made your selection, click the "Roll a Random Hunter" button to select a random hunter from your selection.

## Technologies Used

This project is written in HTML, CSS, and JavaScript. It uses the localStorage Web API to store the user's selection of eligible hunters.
