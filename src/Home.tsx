import Buttons from './components/Buttons'
import './Home.css'

export default () =>{
	return <section className="Home">
		<div className='conteiner'>
			<div className='Txt'>
				<h1>Alugue seu Primeiro Carro 100% Elétrico com apenas um clique</h1>
				<p>Alugue com cartão de crédito, sem juros, sem taxa, a chave em suas mão em 30 min.</p>
				<Buttons Color="violet" Width='100' Size='Px20'>Alugue seu carros</Buttons>
			</div>
			<div id='ft-Car'>
				<img src="./img/undraw_electric_car_b-7-hl 1.png" alt="" />
			</div>
		</div>
	</section>
}