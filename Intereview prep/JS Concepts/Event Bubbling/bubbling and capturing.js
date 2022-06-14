/*

This handler is assigned to <div>, but also runs if you click any nested tag like <em> or <code>:

<div onclick="alert('The handler!')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>

----------------------------------------------------------------------------
Bubbling

The bubbling principle is simple

when an event happens on an element, it first runs the handlers on it, then on its parents,
then all the way up on other ancestors.


<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

A click on the inner <p> first runs onclick:

1. On that <p>.
2. Then on the outer <div>.
3. Then on the outer <form>.
4. And so on upwards till the document object.

So if we click on <p>, then we’ll see 3 alerts: p → div → form.


its called bubbling because events bubble from the inner element up through parents.


--------------------------------------------------------------------
event.target


event.target - is the target element that initiated the event, it doesnt change through the bubbling process
this- is the current element, the one that has a currently running handler on it

if we have a handler on form.onclick, then it casn catch all clicks inside the form.
No matter where the click happened it bubbles up to <form> and runs the handler

this (=event.currentTarget) is the <form> element, because the handler runs on it.
event.target is the actual element inside the form that was clicked.

--------------------------------------------------------------------
Stopping bubbling
a bubbling event goes from the target element straight up. normally it goes upwards til <html>
then onto the document object.

event.stopPropagation()







*/
