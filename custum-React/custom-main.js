


function customrender(reactElement,container){
   const domElement=document.createElement(reactElement.type)
   domElement.setAttribute('href',reactElement.props.href)
   domElement.setAttribute('target',reactElement.props.target)
   domElement.innerHTML=reactElement.value
   container.appendChild(domElement)
   
}


const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
   value:'click me'
}




const maincontainer=document.getElementById('root')
customrender(reactElement,maincontainer)