function comparisions() {
  let a = document.getElementById("firststring").value;
  let b = document.getElementById("secondstring").value;
  let c = document.getElementById("thirdstring").value;
  let d = document.getElementById("fourthstring").value;
  let name = document.getElementById("guest").value
  let biggest = '';
  if (a.length > b.length && a.length > c.length && a.length > d.length) {
    biggest += a;
  } else if (b.length > c.length && b.length > a.length && b.lenght > d.length) {
    biggest += b;
  } else if(c.length > a.length && c.length > b.length && c.length > d.length) {
      biggest +=c;
  }else{
  biggest += d;
  }
  
  document.getElementById("result").innerHTML = name+" , the biggest String among four is " +biggest;
}
