import './bootstrap.min.css';
function items(params) {
    return (
      <div>{params}</div>
    );
}
function list() {
  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action list-group-item-primary">{items("The First item")}</li>
        <li class="list-group-item list-group-item-action list-group-item-secondary">{items("A second item")}</li>
        <li class="list-group-item list-group-item-action list-group-item-success">{items("A third item")}</li>
        <li class="list-group-item list-group-item-action list-group-item-danger">{items("A fourth item")}</li>
        <li class="list-group-item list-group-item-action list-group-item-warning">{items("And a fifth one")}</li>
      </ul>
    </div>
  );
}
function App() {
  return (
    <div className='container'>
      <div className='card m-5'>
        <div className='card-header'>
          Activity 1
        </div>
        <div className='card-body'>
          <p className='card-title'>Define a component to create an unordered HTML list. List values are passed as parameters.</p>
          <div className='mt-3'>{list()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
