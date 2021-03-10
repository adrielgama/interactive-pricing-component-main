function discountAmount() {
  checked = document.getElementById("myCheck").checked;

  if (checked == true) {
    sliderValueAnnually();
  } else {
    sliderValue();
  }
}

function sliderValue() {
  var rangeValue = document.getElementById("myRange").value;
  var setPrice = document.getElementById("qtdPrice");

  if (rangeValue == 1) {
    setPrice.innerHTML = "$8.00";
  } else if (rangeValue == 2) {
    setPrice.innerHTML = "$12.00";
  } else if (rangeValue == 3) {
    setPrice.innerHTML = "$16.00";
  } else if (rangeValue == 4) {
    setPrice.innerHTML = "$24.00";
  } else {
    setPrice.innerHTML = "$36.00";
  }
}

function sliderValueAnnually() {
  var rangeValue = document.getElementById("myRange").value;
  var price = document.getElementById("qtdPrice");

  if (rangeValue == 1) {
    price.innerHTML = "$6.00";
  } else if (rangeValue == 2) {
    price.innerHTML = "$9.00";
  } else if (rangeValue == 3) {
    price.innerHTML = "$12.00";
  } else if (rangeValue == 4) {
    price.innerHTML = "$18.00";
  } else {
    price.innerHTML = "$27.00";
  }
}

function setPageView() {
  var rangeValue = document.getElementById("myRange").value;
  var setView = document.getElementById("qtdPageview");

  if (rangeValue == 1) {
    setView.innerHTML = "10k";
  } else if (rangeValue == 2) {
    setView.innerHTML = "50k";
  } else if (rangeValue == 3) {
    setView.innerHTML = "100k";
  } else if (rangeValue == 4) {
    setView.innerHTML = "500k";
  } else {
    setView.innerHTML = "1M";
  }
}
