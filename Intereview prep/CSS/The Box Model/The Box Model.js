/*
The Box Model
The box model boils down to the fact that every HTML element has a box around it.

4 layers:
Margin
Border
Padding
Content


we can change the size of the content with the CSS width and height properties.
We can add or remove padding witht he padding property.
we can set the border with the border property.
we can add or remove the margin with the margin property.


-------------------------------------------------------------------
Default box settings

elements that have a value of "block"

div{
    display: block
}

- the box fills up the available container space
- each new box appears on a new line/row
- the CSS properties width and height are respected
- the padding,margin, and border of the box will push other elements far away from the box

display: block is the default for elements(div,headers,p)


elements that have a display of "inline"

div{
    display:inline
}
- each box appears nbext to eachother on a single line until it fills up the available space
- the CSS properties width and height dont apply
- the padding,margin, and border of a box are applies, but they dont push other inline boxes away from the box

display: inline is the default for elements(span,a,img)


-------------------------------------------------------------------






*/
