# How to make a pop up register/Login Form 



```html
  <div class="form-container">
    
    <div class="btn-container">
      <button id="btn-1">Button 1</button>
      <button id="btn-2">Button 2</button>
    </div>
    
    <form action="" id="form-1">
      form 1
    </form>
    
    <form action="" id="form-2">
      form 2
    </form>
    
  </div>
```

```css
*,
*::after,
*::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
  height: 100vh;
  background-color: #aaa;
}

.form-container{
  background-color: pink;
  width: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

form{
  display: none;
  width: 100px;
  height: 100px;
  background-color: slateblue;
}

#form-1{
  display: block;
}
```

```javascript
$('#btn-1').on('click', function(){
  
  $('#form-1').fadeIn(1000)
  $('#form-2').fadeOut(1000)
  
})

$('#btn-2').on('click', function(){
  $('#form-1').fadeOut(1000)
  $('#form-2').fadeIn(1000)
})
```