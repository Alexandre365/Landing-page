import { useState } from 'react';
import Select from './components/select';
import './Modelos.css';

type event = {
    target:any;
}

export default function () {
  const [Nome, setNome] = useState('E-208 GT');
  const [Potencia, setPotência] = useState(136);
  const [Torque, setTorque] = useState(26.5);
  const [VelocidadeMaxima, setVelocidadeMaxima] = useState(150);
  const [Aceleracao, setAceleracao] = useState(8.3);
  const [Autonomia, setAutonomia] = useState(340);

  const SelectChange = (e: { target: { value: string; }; }) => {
    if (e.target.value == 'Model01') {
      setNome('E-208 GT');
      setPotência(136);
      setTorque(26.5);
      setVelocidadeMaxima(150);
      setAceleracao(8.3);
      setAutonomia(340);
    } else if (e.target.value == 'Model02') {
      setNome('Model S Plaid');
      setPotência(1034);
      setTorque(95);
      setVelocidadeMaxima(322);
      setAceleracao(2);
      setAutonomia(627);
    } else {
      setNome('Taycan turbo S');
      setPotência(761);
      setTorque(107);
      setVelocidadeMaxima(260);
      setAceleracao(2.8);
      setAutonomia(388);
    }
  };

  return (
    <section id="Modelos" className="Modelos">
      <div className="conteiner conteiner-Modelos">
        <div className="HeaderModelos">
          <div className="txtModelos txtTitulo">
            <h2>Preço por cada carro</h2>
            <p>Preços podem ser ajustados</p>
          </div>
          <div className="Select" id="Select">
            <Select name="Model" id="Model" Color="ColorBlack" onChange={SelectChange}>
              <option value="Model01">Model 1</option>
              <option value="Model02">Model 2</option>
              <option value="Model03">Model 3</option>
            </Select>
          </div>
        </div>
        <div className="DadosModelos">
          <div className="CardsModelos">
            <div className="Card Card_Titulo">
              <h3>Nome</h3>
              <p>{Nome}</p>
            </div>
            <div className="Card">
              <h3>Potência</h3>
              <p>
                {Potencia}
                {' '}
                cv
              </p>
              <div className="progress">
                <p>2000 cv</p>
                <progress id="file" value={100 * (Potencia / 2000)} max="100"> 32% </progress>
              </div>
            </div>
            <div className="Card">
              <h3>Torque</h3>
              <p>
                {Torque}
                {' '}
                kgfm
              </p>
              <div className="progress">
                <p>200 kgfm</p>
                <progress id="file" value={100 * (Torque / 200)} max="100"> 32% </progress>
              </div>
            </div>
            <div className="Card">
              <h3>Velocidade máxima</h3>
              <p>
                {VelocidadeMaxima}
                {' '}
                km/h
              </p>
              <div className="progress">
                <p>480 km/h</p>
                <progress id="file" value={100 * (VelocidadeMaxima / 480)} max="100"> 32% </progress>
              </div>
            </div>
            <div className="Card">
              <h3>Aceleração</h3>
              <p>
                {Aceleracao}
                s
              </p>
              <div className="progress">
                <p>1s</p>
                <progress id="file" value={100 - ((Aceleracao / 10) * 100)} max="100"> 32% </progress>
              </div>
            </div>
            <div className="Card">
              <h3>Autonomia</h3>
              <p>
                {Autonomia}
                {' '}
                km
              </p>
              <div className="progress">
                <p>1000 km</p>
                <progress id="file" value={100 * (Autonomia / 1000)} max="100"> 32% </progress>
              </div>
            </div>
          </div>
          <div className="imgModelos">
            <img src="./img/Eco Car_Isometric 1.png" alt="Car electric" />
          </div>
        </div>
      </div>
    </section>
  );
}
