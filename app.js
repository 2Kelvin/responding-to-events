function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;

  return React.createElement(
    "button",
    { className: "button-30", onClick: onClick },
    children
  );
}

function PlayButton(_ref2) {
  var songName = _ref2.songName;

  function handlePlayClick() {
    alert("Playing " + songName);
  }
  return React.createElement(
    Button,
    { onClick: handlePlayClick },
    "Play Song"
  );
}

function UploadButton() {
  return React.createElement(
    Button,
    { onClick: function onClick() {
        return alert("Uploading image");
      } },
    "Upload image"
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(PlayButton, { songName: "Replay by Iyaz" }),
    React.createElement(UploadButton, null)
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
// Often you’ll want the parent component to specify a child’s event handler
// it's common & good practice for components like Button above to just contain styling and NOT the behavior
// it receives its logic & behavior from parent components like PlayButton & UploadButton above (which will pass down the needed props to the Button)

// By convention, event handler props should start with on, followed by a capital letter (of the event name you want)
// the naming of the event handler prop received by your component is up to you!