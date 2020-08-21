document.getElementById("PluralButton").onclick = function(){
    let StringValue = document.getElementById('String_Value').value;
    let NumberValue = Number(document.getElementById('Number_Value').value);
    document.getElementById("demo").innerHTML = Pluralize(NumberValue,StringValue);
    } 

  const Pluralize = (count, noun, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;
