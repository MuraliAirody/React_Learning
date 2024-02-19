const rootElement = document.querySelector("#root");

const reactElement = {
  type: "div",
  props: {
    name: "Alice",
  },
  children: [
    {
      type: "div",
      props: null,
      children: [
        {
          type: "h1",
          props: null,
          children: ["Welcome, ", "Alice", "!"],
        },
        {
          type: "p",
          props: null,
          children: ["This is a personalized greeting message component."],
        },
      ],
    },
  ],
};


function renderReactElements(reactElement){
    const parentElement = document.createElement(reactElement.type)
    
    for(prop in reactElement.props){
        if(prop === 'children') continue
        parentElement.setAttribute(prop,reactElement.props[prop])
    }

    if(reactElement.children){
        reactElement.children.forEach((child)=>{
           if(typeof child==='string'){
            parentElement.appendChild(document.createTextNode(child))
           }else{
            const childElement = renderReactElements(child)
            parentElement.appendChild(childElement)
           }
        })
    }
    return parentElement;
}
const renderedElement =  renderReactElements(reactElement)

console.log(renderedElement);

rootElement.appendChild(renderedElement)