var myList = [];
var save = "";
function addItem(){
  var searchArray = myList.indexOf(document.getElementById("newItem").value);
  if (searchArray == -1) {
    myList.push(document.getElementById("newItem").value);
    console.log(myList);
  }
  var input = document.getElementById("newItem").value;
  var list = document.getElementById("listDisplay");
  var item = document.createElement("li");
  var btnClose = document.createElement("button");
  btnClose.classList.add("btn");
  btnClose.classList.add("btn-danger");
  btnClose.classList.add("btn-xs");
  var iconClose = document.createElement("span");
  iconClose.classList.add("glyphicon");
  iconClose.classList.add("glyphicon-remove");
  btnClose.appendChild(iconClose);
  var itemName = document.createTextNode(input);
  btnClose.addEventListener("click", removeParentListItem);

  item.appendChild(itemName);
  item.appendChild(btnClose);

  list.appendChild(item);
  document.getElementById("newItem").value = "";
}

function removeParentListItem(){
  var mom = this.parentNode;
  var grandma = mom.parentNode;
  grandma.removeChild(mom);
  var itemRemove = mom.firstChild.textContent;
  var itemIndex = myList.indexOf(itemRemove);
  myList.splice(itemIndex,1);
}

function saveList(){
  save = myList.toString();
  setCookie("storeList",save,1)
}

function clearList(){
  document.getElementById("listDisplay").innerHTML = "";
  var nothing = "";
  setCookie("storeList",nothing);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
