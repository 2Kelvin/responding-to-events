function AButton() {
    // event handler button click
    function handleClick() {
        alert("You clicked the button!");
    }

    return React.createElement(
        "button",
        {
            className: "button-30",
            onClick: handleClick
        },
        "Button"
    );
}

export default function App() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(AButton, null)
    );
}

// react_connection
var rootNode = document.getElementById("reactRoot");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));

// NOTES 
// event handlers are usually defined inside your component(s)
// naming: start with the name 'handle' followed by the name of the event e.g. click, hover, focus
//