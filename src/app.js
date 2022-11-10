function Button({ children, onClick }) {
  return (
    <button className="button-30" onClick={onClick}>
      {children}
    </button>
  );
}

function PlayMovie({ movieName }) {
  function handleMovieClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handleMovieClick}>Play Movie</Button>;
}

function Menu({ onPlaySong, onUpload, onMenuClick }) {
  return (
    <div
      className="menu"
      onClick={(e) => {
        e.stopPropagation();
        onMenuClick();
      }}
    >
      <Button onClick={onPlaySong}>Play Song</Button>
      <Button onClick={onUpload}>Upload Image</Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Menu
        onPlaySong={() => alert("Playing song")}
        onUpload={() => alert("Uploading")}
        onMenuClick={() => alert("You clicked our menu")}
      />
      <PlayMovie movieName="It's a Wonderful Life" />
    </div>
  );
}
// react_connection
const rootNode = document.getElementById("reactRoot");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

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
// thenn in this case you 'call' the event handler prop, see code above
