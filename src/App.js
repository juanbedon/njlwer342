import React, { Component } from 'react';
/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { input: '', items: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']};
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.items.map((tarea_por_hacer, index) => <li key={index}>{tarea_por_hacer}</li>)}
          </ul>
           <form onSubmit={this.onSubmit}>
             <input type="text" id="new-task" value={this.state.input} onChange={this.onChange} placeholder="Ingresa una tarea y oprime Enter"/>
           </form>
        </div>
      </div>
    )
  }

  onChange = (e) => {
    this.setState({input: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ input: '', items: [...this.state.items, this.state.input] });
  }

}


export default App;
