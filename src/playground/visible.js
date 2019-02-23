let visibility = false;

const detailsToggle = () => {
    // visibility is flipped
    visibility = !visibility;
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
            <button onClick={detailsToggle}>
                {visibility? 'hide details': 'show details'}
            </button>
            {(visibility) && <p>Details are being shown</p>}
        </div>
    );

    ReactDOM.render(template,appRoot)
}

//Step 3: call renderPage function
renderPage();