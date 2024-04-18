var x=Number(prompt("enter the first number"));
var y=Number(prompt("enter the second number"));
var operator=prompt("enter the operation");
switch (operator) {
    case '+':
      var result=x + y
        alert('the answer=' + result)
        break
    case '-':
        var result=x - y
        alert('the answer=' + result)
        break
    case '*':
       var result=x * y
       alert('the answer=' + result)
        break
    case '/':
        var result=x / y
        alert('the answer=' + result)
        break
        default: 
        alert('error,please refresh the page and try again')
}