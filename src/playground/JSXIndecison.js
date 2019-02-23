
const app = {
  title: 'Indecision',
  subtitle: 'Decide better!',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderPage();
  }
}

const deleteSubmit = () => {
  //app.options.length =  0;
  app.options = [];
  renderPage();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app');


const renderPage = () => {
  const template = (
    <div>

      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p> }
      <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>
      
      {/* Random Choice Selection Button */}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
     
      {/* delete all button */}
      <button onClick={deleteSubmit}>Delete all</button>

      {/* list */}
      {(app.options.length > 0) && 
        <ol>
          {app.options.map((option, index) => <li key={index}>{option}</li>)}
        </ol>
      }
      
      {/* add input & button */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>

    </div>
  );
  ReactDOM.render(template, appRoot);
}  

renderPage();