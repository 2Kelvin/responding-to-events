function AButton() {
    return React.createElement(
        "button",
        { className: "button-30" },
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