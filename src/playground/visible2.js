let sentence = undefined;

const showDetails = () => {
    // sentence variable is changed;
    sentence = 'I should only be visible after ShowDetails button is clicked'
    //<p> is re-rendered
    renderPage();
};

const hideDetails = () => {
    // sentence variable is changed;
    sentence = undefined;
    //<p> is re-rendered
    renderPage();
};

//step 1: get the app root
const appRoot = document.getElementById('app');

//step 2: render the app template within a app render function and run the react.dom function
const renderPage = () => {
    const template = (
        <div>
            <h1> Visibility Toggle</h1>
            {(sentence === undefined) && <button hidden={false} onClick={showDetails}>Show Details</button>}
            {(sentence) && <button hidden={false} onClick={hideDetails}>Hide Details</button>}
            <p>{sentence}</p>
        </div>
    );

    ReactDOM.render(template,appRoot)
}

//Step 3: call renderPage function
renderPage();