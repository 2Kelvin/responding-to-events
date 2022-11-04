function AButton() {
    return (
        <button className="button-30">
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