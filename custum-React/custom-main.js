


function customrender(reactElement,container){
//    const domElement=document.createElement(reactElement.type)
//    domElement.setAttribute('href',reactElement.props.href)
//    domElement.setAttribute('target',reactElement.props.target)
//    domElement.innerHTML=reactElement.value
//    container.appendChild(domElement)

const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.value
for (const prop in reactElement.props) {
    if(prop==reactElement.value) continue;
    domElement.setAttribute(prop,reactElement.props[prop])
    
    }
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