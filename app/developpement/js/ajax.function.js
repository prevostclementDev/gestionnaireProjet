window.addEventListener('load',function(){

    const header = document.querySelector('#header');
    const pageContent = document.querySelector('#page-content');

    if ( window.location == window.location.origin + "/__code/GestionnaireProjet/app/index.php" ||
        window.location == window.location.origin + "/__code/GestionnaireProjet/app/"
    ) {

        window.history.pushState({direction : "accueil.php"}, "accueil", window.location.origin + "/__code/GestionnaireProjet/app/page/accueil.php");

        requestPage("../page/accueil.php?getHeader=true", (response) => {

            header.innerHTML = response[0]
    
            pageContent.classList.forEach(elementClass => {
    
                pageContent.classList.remove(elementClass);
    
            })
    
            pageContent.classList.add('accueil')
    
            pageContent.innerHTML = response[1]

            RebootEventLink(pageContent)

        })

    } else {

        RebootEventLink(pageContent)

    }

    window.onpopstate = (event) => {

        if (event.state == null) {

            requestPage("../page/accueil.php", (response) => {

                header.innerHTML = response[0]
        
                pageContent.classList.forEach(elementClass => {
        
                    pageContent.classList.remove(elementClass);
        
                })
        
                pageContent.classList.add('accueil')
        
                pageContent.innerHTML = response[1]
    
            })

        } else {

            requestPage("../page/"+event.state.direction, (response) => {

                pageContent.classList.forEach(elementClass => {
            
                    pageContent.classList.remove(elementClass);
            
                })

                if ( event.state.direction == "accueil.php" ) {

                    classPage = "accueil"

                } else if ( event.state.direction == "list.php" ) {

                    classPage = "view-list"

                } else if ( event.state.direction == "search.php") {

                    classPage = "searchPage"
                }
            
                pageContent.classList.add(classPage);
                
                pageContent.innerHTML = response
            
            })

        } 
        
    }

})

function requestPage(uri,callback) {

    let xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        uri,
        true
    );

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){

            if (xhr.status === 200) {

                callback(JSON.parse(xhr.response))

                return true;

            } else {

                return false;

            }

        }
    }

    xhr.setRequestHeader("ajaxRequestServer","true")

    xhr.send();

}

function RebootEventLink(containerContent) {

    const AllLinkHeader = document.querySelectorAll("#navigationHeader .Hlink");

    AllLinkHeader.forEach(el => {

        el.addEventListener('click', function(e){

            e.preventDefault()

            newpage = el.getAttribute("href")

            requestPage("../page/"+newpage, (response) => {

                containerContent.classList.forEach(elementClass => {

                    containerContent.classList.remove(elementClass);

                })

                containerContent.classList.add(el.getAttribute('attr_class'));
                
                containerContent.innerHTML = response

                window.history.pushState({direction : newpage}, el.getAttribute('attr_class'), window.location.origin + "/__code/GestionnaireProjet/app/page/" + newpage);

            })

        })

    })

}
