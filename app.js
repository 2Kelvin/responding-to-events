function Button(_ref) {
    var children = _ref.children,
        message = _ref.message;

    return React.createElement(
        "button",
        {
            className: "button-30",
            onClick: function onClick() {
                return alert(message);
            }
        },
        children
    );
}

export default function App() {
    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(
            Button,
            { message: "Playing your song" },
            "Play Song"
        ),
        React.createElement(
            Button,
            { message: "Uploading your image" },
            "Upload Image"
        )
    );
}

// react_connection
var rootNode = document.getElementById("reactRoot");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));

// NOTES 
// event handlers are usually defined INSIDE your component(s)
// naming: start with the name 'handle' followed by the name of the event e.g. click, hover, focus
// event handlers passed in as props MUST be 'passed' not 'called'

// you could also add inline event listeners
// ...it's just adding the button click logic directly in the onClick function (without having to define a function name & passing it in as a prop)
// to be more concise, use an arrow function for the inline event handler(s)
// inline event handlers are convinient for short functions

// functions passed to event handlers as props should be passed NOT called
// passing the function tells react to wait till an event occurs e.g. button is clicked for it to call the function
// calling the function calls it when rendering occurs without an event even triggering it wgich is not what you want
// using the inline format, make sure to add the function/ arrow function syntax to the event handler to prevent it from firing when the component renders
// basically pass a function to an event handler to prevent it from firing every time the component renders
// ...and only ensure it fires when an event occurs

// since an event handler is defined inside a component, it has access to all its props