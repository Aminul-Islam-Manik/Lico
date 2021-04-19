//tab js here---------------------------------------------------------
function openTab(evt,tabName) {
    var i, tab_content, btn;
    tab_content = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_content.length; i++) {
      tab_content[i].style.display = "none";
    }
    btnTab = document.getElementsByClassName("btnTab");
    for (i = 0; i < btnTab.length; i++) {
      btnTab[i].className = btnTab[i].className.replace(" aactive", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " aactive";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


//bar-filler js here---------------------------------------------------
$(document).ready(function(){
        
  $('#bar1').barfiller({ barColor: '#DA062C' });
  $('#bar2').barfiller({ barColor: '#DA062C' });
  $('#bar3').barfiller({ barColor: '#DA062C' });
  $('#bar4').barfiller({ barColor: '#DA062C', duration: 3000 });
  $('#bar5').barfiller({ barColor: '#DA062C', duration: 3000 });
  $('#bar6').barfiller({ barColor: '#DA062C', duration: 3000 });
});

//--mixitup plugin-------------------------------
  var mixer = mixitup('.portfolio');

