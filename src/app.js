function AButton() {
    // event handler button click
    function handleClick() {
        alert("You clicked the button!");
    }

    return (
        <button
            className="button-30"
            onClick={handleClick}
        >
            Button
        </button>
    );
}

export default function App() {
    return (
        <div className="app" >
            <AButton />
        </div>
    );
}

// react_connection
const rootNode = document.getElementById("reactRoot");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

// NOTES 
// event handlers are usually defined inside your component(s)
// naming: start with the name 'handle' followed by the name of the event e.g. click, hover, focus
// 