function requestPage(e,t){let a=new XMLHttpRequest;a.open("GET",e,!0),a.onreadystatechange=function(){if(4===a.readyState)return 200===a.status&&(t(JSON.parse(a.response)),!0)},a.setRequestHeader("ajaxRequestServer","true"),a.send()}function RebootEventLink(a){const e=document.querySelectorAll("#navigationHeader .Hlink");e.forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),requestPage("../page/"+(newpage=t.getAttribute("href")),e=>{a.classList.forEach(e=>{a.classList.remove(e)}),a.classList.add(t.getAttribute("attr_class")),a.innerHTML=e,window.history.pushState({direction:newpage},t.getAttribute("attr_class"),window.location.origin+"/__code/GestionnaireProjet/app/page/"+newpage)})})})}window.addEventListener("load",function(){const a=document.querySelector("#header"),i=document.querySelector("#page-content");window.location==window.location.origin+"/__code/GestionnaireProjet/app/index.php"||window.location==window.location.origin+"/__code/GestionnaireProjet/app/"?(window.history.pushState({direction:"accueil.php"},"accueil",window.location.origin+"/__code/GestionnaireProjet/app/page/accueil.php"),requestPage("../page/accueil.php?getHeader=true",e=>{a.innerHTML=e[0],i.classList.forEach(e=>{i.classList.remove(e)}),i.classList.add("accueil"),i.innerHTML=e[1],RebootEventLink(i)})):RebootEventLink(i),window.onpopstate=t=>{null==t.state?requestPage("../page/accueil.php",e=>{a.innerHTML=e[0],i.classList.forEach(e=>{i.classList.remove(e)}),i.classList.add("accueil"),i.innerHTML=e[1]}):requestPage("../page/"+t.state.direction,e=>{i.classList.forEach(e=>{i.classList.remove(e)}),"accueil.php"==t.state.direction?classPage="accueil":"list.php"==t.state.direction?classPage="view-list":"search.php"==t.state.direction&&(classPage="searchPage"),i.classList.add(classPage),i.innerHTML=e})}});