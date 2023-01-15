
import {createElement} from 'react';
import ReactDOM from 'react-dom/client'

//% import {createElement as createObj } from 'react';

//~* 'heading' obj is called as props
const heading = createElement(
    "h1",
    {
        id:"title",
        key:123
    },
    "Using parcel for bundler"
)

//~* It is called as props
const heading2 = createElement(
    "h2",
    {
        id:"title",
        name:"name_h2",
        key:"second_h2"
    },
    "Welcome to React js app"
)
//* What happend when React.createElement is run ?
//~%  JSX => React.createElement => Object => HTML(DOM)
const container = createElement(
    "div",
    {
        id:"container"
    },
    [createElement("ul",{key:12},[
        createElement("li", {key:1}, "About Us"),
        createElement("li", {key:2}, "Home"),
        createElement("li", {key:3}, "Support")
    ]
)]
)

//* React element i.e JSX
const heading3 = (
    <h1 id="heading" key="heading">
       This is the namastye page
    </h1>
)

const Title = () => (
    <h1 id="title" key="title">
        Namaste React .....
    </h1>
)

//* React Component
//% - Functional 
//% Name of the component start with the CAPITAL LETTER


//% Composing component
const HeaderComponent = () => {
    return (
        <div>
            <Title />
            {Title()}
            <h3>Namstye react functional component</h3>
            {heading3}
        </div>
    )
};

const FooterComponent = () => {
    return (
        <div>
            <p>@facebook</p>
        </div>
    )
};
//~% Using JSX CREATE THE H1 TAG
const root = ReactDOM.createRoot(document.getElementById('root'))
//async defecr
//^ Following are the way you can passed to the render
//root.render(<HeaderComponent />)
//root.render(container)


//% I can call as functin call
root.render(HeaderComponent())
