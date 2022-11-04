export default function App() {
    return React.createElement(
        "h1",
        null,
        "Hello Events"
    );
}

// react_connection
var rootNode = document.getElementById("reactRoot");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));