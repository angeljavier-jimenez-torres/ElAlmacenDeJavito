/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App></App>, document.getElementById("app"));

// Obtén el elemento body
var body = document.body;

// Obtén el botón de cambio de modo
var button = document.getElementById('dark-mode-button');

// Agrega un evento de clic al botón
button.addEventListener('click', function() {
    // Si el body tiene la clase 'dark-mode', remuévela; de lo contrario, agrégala
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
});

