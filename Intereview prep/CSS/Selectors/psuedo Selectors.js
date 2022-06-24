/*


Psuedo Classes

A psuedo class specifies a special state of the selected elements.

- if we want to style all anchor tages only when the mouse is hovering

a:hover{

}

active: applies to elements like buttons when activated by a person, like when they "push down" on the button

checked: applies to radio inputs, checkbox inputs, and options in drop downs when the user has toggled it into an "on" state

disabled: applies to any disabled element, like a disabled button or input

first-child: applies to the first element among a group of sibling elements

focus: applies to elements that have the current focus, like inputs and buttons

hover: applies to elements that currently have the pointing device (cursor) directly over it
(it is problematic on touchscreens because it may never match the element because there is no persistent pointing device)

invalid: applies to any form element in an invalid state due to client-side form validation

last-child: applies to the last element among a group of sibling elements

not(selector): represents elements that do not match the provided selector

required: applies to form elements that are required

valid: applies to any form element in a valid state

visited: applies to anchor tags of which the user has already been to the URL that the href points to

-------------------------------------------------------------------
Psuedo Selectors

p::before{

}

p::after{

}

The after selector creats the child as the last child of the selected element.
the before selector creates the child as the first child of the selected element.

*/
