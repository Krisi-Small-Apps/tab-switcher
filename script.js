function openTab(evt, tabName) {
  var i, tabContent, tabButton;

  // Скриване на всички табове
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Изключване на активния клас от бутоните на табовете
  tabButton = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButton.length; i++) {
    tabButton[i].className = tabButton[i].className.replace(" active", "");
  }

  // Показване на съдържанието на избрания таб и добавяне на клас "active" на бутона
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
