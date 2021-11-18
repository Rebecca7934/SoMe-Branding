function toggleMobile()
{
  var mobileUl = document.getElementById("main-header-ul");
  var hasClass = (mobileUl.className != "");
  var newClass = (hasClass ? "" : "show");
  mobileUl.className = newClass;
}


