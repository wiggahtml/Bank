function hide() { 
  
  let elem = document.getElementById('okno');
 
  let style = getComputedStyle(elem);
      if (style.display !== 'block') {
          document.getElementById('okno').style.display= 'block';
  }else if (style.display=== 'block') {
          document.getElementById('okno').style.display= 'none';
  }
}


function hide_transfer() { 
  
  let ele = document.getElementById('perekaz');

  let style = getComputedStyle(ele);
      if (style.display !== 'block') {
          document.getElementById('perekaz').style.display= 'block';
  }else if (style.display=== 'block') {
          document.getElementById('perekaz').style.display= 'none';
  }
}

function perekaz() {
    var minusbalance = parseFloat(document.getElementById('suma-perekazu').value);
  var spanElement = document.getElementById('balance');
  var balance = parseFloat(spanElement.textContent);
 if (minusbalance > balance) {
   alert("Ви не мо");
   document.getElementById('perekaz').style.display = 'none';
}  else {
  
  balance -= minusbalance;
  spanElement.textContent = balance;
  document.getElementById('perekaz').style.display = 'none';
  alert("переказ здійснено успішно");


   }
}



function popovniti() {
  var plusbalance = parseFloat(document.getElementById('input').value);
  var spanElement = document.getElementById('balance');
    if (plusbalance >= 0 && plusbalance <=100000) {
        let balance = parseFloat(spanElement.textContent);
        balance += plusbalance;
        spanElement.textContent = balance;
        document.getElementById('okno').style.display = 'none';
    } else if (plusbalance >= 100000) { 
alert("Ви не такий багатий щоб поповняти на "+plusbalance)


    }else{
    alert("Будь ласка, введіть коректне число");
  }
}
function profile() {
  let stylesprofile = document.getElementById('profile-okno');
  let style = getComputedStyle(stylesprofile);
  if (style.display !== 'flex') {
          document.getElementById('profile-okno').style.display= 'flex';
  }else if (style.display=== 'flex') {
          document.getElementById('profile-okno').style.display= 'none';
  }
}

function exitprofile() { 
   let stylesprofile = document.getElementById('profile-okno');
  let style = getComputedStyle(stylesprofile);
   if (style.display=== 'flex') {
          document.getElementById('profile-okno').style.display= 'none';
  }
}

function obmin() {
  var grn = document.getElementById('grn')
  var spanElement = document.getElementById('balance');
  var balance = parseFloat(spanElement.textContent);
  if (grn.textContent == "₴") {
    if (balance < 37) {
    
    } else {
      var balanceDol = balance / 37;
      spanElement.textContent = balanceDol.toFixed(2);
      grn.textContent = "$";
    }
  } else if (grn.textContent == "$") { 
    var balanceGrn = balance * 37;
    spanElement.textContent = balanceGrn.toFixed(2);
    grn.textContent = "₴";
  } 
}