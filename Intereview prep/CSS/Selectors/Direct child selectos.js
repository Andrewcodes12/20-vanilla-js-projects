/*
the > selects nodes that are direct children of the 1st element


<body>
  <div class="menu">
    <div class="is-active">
      Belka
    </div>
    <div>
      <div class="is-active">
        Strelka
      </div>
    </div>
  </div>

  <div class="is-active">
    Laika
  </div>
</body>


we wnt to style all elements with the "is active class" that are direct children of the menu class

.menu > .is-active{

}

THIS WILL JUST STYLE THE FIRST DIV UNDER MENU BECAUSE THAT IS THE DIRECT CHILD

*/
