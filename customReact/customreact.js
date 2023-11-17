function reactRender(reactElement,mainContainer){
    /*
    const element = document.createElement(reactElement.tagName)
    element.innerHTML = reactElement.children
    element.setAttribute("href",reactElement.props.href)
    element.setAttribute("target",reactElement.props.target)
    */
    const element = document.createElement(reactElement.tagName)
    element.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if(prop === "children") continue // sometimes children may present on props also

       element.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(element)
} 
const mainContainer = document.getElementById("root")
 
const reactElement = {
    "tagName":"a",
    "props":{
        "href":"https://google.com",
        "target":"_blank"
    },
    "children":"Google"
}

reactRender(reactElement,mainContainer)
 