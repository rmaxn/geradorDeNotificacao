import './App.css';

function gerarNotificacao() {
  let bloco = document.querySelector('#bloco').value
  let apto = document.querySelector('#apto').value
  let motivo = document.querySelector('#motivo').value
  let tipo = document.querySelector('#tipo').value
  let data = document.querySelector('#date').value
    .split('-').reverse().join('/')
  let hour = (document.querySelector('#hour').value
    .split(':').join('h') + 'm')
  return console.log(bloco, apto, motivo, tipo, data, hour)
}

function App() {
  return (
    <div className="formulario">
      <form>
        <label htmlFor="bloco">Bloco:
        <input name="bloco" id="bloco" placeholder="Bloco"></input>
        </label>
        <label htmlFor="apto">Apto:
        <input id="apto" placeholder="Apartamento"></input>
        </label>
        <label htmlFor="motivo">Motivo:
        <select id="motivo">
          <option>Objeto na Janela</option>
          <option>Barulho</option>
        </select>
        </label>
        <label htmlFor="tipo">Tipo:
        <select id="tipo">
          <option>Advertência</option>
          <option>Multa</option>
        </select>
        </label>
        <label htmlFor="data">Data:
        <input type="date" id="date"/>
        </label>
        <label htmlFor="hour">Hora:
        <input type="time" id="hour"/>
        </label>
      </form>
      <button id="gerar" onClick= { () => gerarNotificacao() }>Gerar Notificação</button>
    </div>
  );
}

export default App;
