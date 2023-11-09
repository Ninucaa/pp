const h1Element = document.getElementsByTagName(qualifiedName'h1')[0];
const pElement = document.getElementsByTagName(qualifiedName'p')[0];
h1Element.addEventListener(type:'onmouseover' listener: function){
    if(pElement.style.display=='none'){
        pElement.style.display='block';
    }
    else{
        pElement.style.display='none';
    }
    }