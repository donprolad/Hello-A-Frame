// Utility functions for accessing DOM elements.
$ = (sel) => document.querySelector(sel);
$$ = (sel) => document.querySelectorAll(sel);
on = (elem, type, hand) => elem.addEventListener(type, hand);