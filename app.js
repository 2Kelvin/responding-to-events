function Button(_ref) {
  var children = _ref.children,
      _onClick = _ref.onClick;

  return React.createElement(
    "button",
    {
      className: "button-30",
      onClick: function onClick(e) {
        e.stopPropagation();
        _onClick();
      }
    },
    children
  );
}

function PlayMovie(_ref2) {
  var movieName = _ref2.movieName;

  function handleMovieClick() {
    alert("Playing " + movieName);
  }
  return React.createElement(
    Button,
    { onClick: handleMovieClick },
    "Play Movie"
  );
}

function Menu(_ref3) {
  var onPlaySong = _ref3.onPlaySong,
      onUpload = _ref3.onUpload,
      onMenuClick = _ref3.onMenuClick;

  return React.createElement(
    "div",
    { className: "menu", onClick: onMenuClick },
    React.createElement(
      Button,
      { onClick: onPlaySong },
      "Play Song"
    ),
    React.createElement(
      Button,
      { onClick: onUpload },
      "Upload Image"
    )
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(Menu, {
      onPlaySong: function onPlaySong() {
        return alert("Playing song");
      },
      onUpload: function onUpload() {
        return alert("Uploading your image");
      },
      onMenuClick: function onMenuClick() {
        return alert("You clicked our menu");
      }
    }),
    React.createElement(PlayMovie, { movieName: "It's a Wonderful Life" })
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
// Often you???ll want the parent component to specify a child???s event handler
// it's common & good practice for components like Button above to just contain styling and NOT the behavior
// it receives its logic & behavior from parent components like PlayButton & UploadButton above (which will pass down the needed props to the Button)

// By convention, event handler props should start with on, followed by a capital letter (of the event name you want)
// the naming of the event handler prop received by your component is up to you!

// when a component supports multiple interactions/events, name the event handler props as per the specific task each handler will do
// e.g. 'onPlaySong' or 'onUploadImage' event handlers on the Menu component above
// naming event props after specific tasks helps you reuse them in future if you want to on different app events

// events 'bubbles/ propagates up' the tree
// ...it starts where the event happened and then goes up the tree e.g. Menu component above
// ...when you click any Button inside Menu both event handlers for the Button & Menu are fired
// All events propagate in React except 'onScroll', which only works on the component/ JSX you attach it to

// STOPPING PROPAGATION
// event handlers receive an event object as their ONLY arguement
// the event object is called 'e' which stands for 'event'
// 'e' contains all the info about the event: access its properties to learn more about the event
// the event object, e lets you stop propagation/ bubbling up of events you doon't want reaching the parent component
// to achieve this, call 'e.stopPropagation()'
// once you stop propagation the event handler passed to the component goes right below it
// in this case you 'call' the event handler prop, see code above
// once you stop propagation, the parent's event handler(s) don't run whenever a child's event handler runs
// this means the child component only runs its own event logic independently, solo!

// e.stopPropagation() stops the event handlers of the component's parent from firing
// e.preventDefault() prevents the default browser behavior for the few events that have it
// ...like form's submit button which when clicked, refreshes the page

// event handlers are the best to use side effects on
// since they don't need to be pure like components, they are a great place to change something

// You can define your own event handler props with application-specific names
// Events propagate upwards
// Explicitly calling an event handler prop from a child handler is a good alternative to propagation.