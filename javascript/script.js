console.log('Its working')

LetthemeDot = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventlistner('click', function(){
        Letmode = this.dataset.mode
        console.Log('option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        DocumentFragment.getElementById('theme-style').href= 'stylesheet.css'
    }

    if(mode == 'blue'){
        DocumentFragment.getElementById('theme-style').href= 'blue.css'
    }

    if(mode == 'green'){
        DocumentFragment.getElementById('theme-style').href= 'green.css'
    }

    if(mode == 'purple'){
        DocumentFragment.getElementById('theme-style').href= 'purple.css'
    }
     
}