const baseUrl="/__site/__fromscratch/GestionnaireProjet/app/";function requestPage(e,t){let a=new XMLHttpRequest;a.open("GET",e,!0),a.onreadystatechange=function(){if(4===a.readyState)return 200===a.status&&(t(JSON.parse(a.response)),!0)},a.setRequestHeader("ajaxRequestServer","true"),a.send()}function RebootEventLink(a){const e=document.querySelectorAll("#navigationHeader .Hlink");e.forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),(newpage=t.getAttribute("href")).includes("-")?(linkExplode=newpage.split("-"),document.title="Gestionnaire projets | "+linkExplode[0]+" "+linkExplode[1]):document.title="Gestionnaire projets | "+newpage,requestPage("../app/"+newpage,e=>{a.classList.forEach(e=>{a.classList.remove(e)}),null!=(active=document.querySelector("#navigationHeader .Hlink.active"))&&active.classList.remove("active"),t.classList.add("active"),a.classList.add(t.getAttribute("attr_class")),a.innerHTML=e,projetCall(a),window.history.pushState({direction:newpage},t.getAttribute("attr_class"),window.location.origin+baseUrl+newpage)})})})}function projetCall(a){const e=document.querySelectorAll(".projet a");0<e.length&&(console.log(e),e.forEach(t=>{t.onclick=e=>{e.preventDefault(),requestPage("../app/projet/"+(slug=t.getAttribute("href")),e=>{a.classList.forEach(e=>{a.classList.remove(e)}),a.classList.add("projectPage"),a.innerHTML=e,document.title="Gestionnaire projets | projet",window.history.pushState({direction:"projet/"+slug},"projet/"+slug,window.location.origin+baseUrl+"projet/"+slug)})}}))}window.addEventListener("load",function(){const i=document.querySelector("#header"),s=document.querySelector("#page-content");window.location==window.location.origin+baseUrl+"accueil"||window.location==window.location.origin+baseUrl||window.location==window.location.origin+baseUrl+"index.php"?(window.history.pushState({direction:"accueil"},"accueil",window.location.origin+baseUrl+"accueil"),requestPage("../app/page/accueil.php?getHeader=true",e=>{i.innerHTML=e[0],s.classList.forEach(e=>{s.classList.remove(e)}),document.querySelector("[attr_class=accueil]").classList.add("active"),s.classList.add("accueil"),s.innerHTML=e[1],RebootEventLink(s),projetCall(s)})):RebootEventLink(s),projetCall(s),window.onpopstate=e=>{var t,a;null==e.state?requestPage("../app/page/accueil.php?getHeader=true",e=>{i.innerHTML=e[0],s.classList.forEach(e=>{s.classList.remove(e)}),document.querySelector("[attr_class=accueil]").classList.add("active"),s.classList.add("accueil"),s.innerHTML=e[1],projetCall(s)}):(t=/projets-([a-zA-Z]+)/g,a=/projet\/([a-zA-Z-]+)/g,"accueil"==e.state.direction?(classPage="accueil",type="noneA",ajaxCall=classPage,document.title="Gestionnaire projets | accueil"):-1!=e.state.direction.search(t)?(classPage="view-list",type=e.state.direction.split("-")[1],ajaxCall=e.state.direction,document.title="Gestionnaire projets | projets "+type):"search"==e.state.direction?(classPage="searchPage",type="noneS",ajaxCall="search",document.title="Gestionnaire projets | search"):-1!=e.state.direction.search(a)&&(classPage="projectPage",type="now",ajaxCall=e.state.direction,document.title="Gestionnaire projets | projet"),requestPage("../app/"+ajaxCall,e=>{s.classList.forEach(e=>{s.classList.remove(e)}),document.querySelector("#navigationHeader .Hlink.active").classList.remove("active"),document.querySelector("[attr_type="+type+"]").classList.add("active"),s.classList.add(classPage),s.innerHTML=e,projetCall(s)}))}});