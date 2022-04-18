// @flow 
import * as React from 'react'
import CardSeguro from './components/CardSeguro';
import './Seguro.css'
type Props = {
    
};
export default (props: Props) => {
	return (
		<section className='Seguro'>
			<div className='conteiner conteinerSeguro'>
				<div className='HeaderSeguros'>
					<div className=" txtTitulo">
						<h2>Seguro de Carros</h2>
						<p>Todos os carros e planos, são assegurados pela seguradora.</p>
					</div>
				</div>
				<div className='mainSeguro'>
					<CardSeguro Title='Plano saude' txt='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.' src='delesign-health-insurance 1.png'/>
					<CardSeguro Title='Seguro Acidente' txt='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.' src='delesign-car-insurance 1.png'/>
					<CardSeguro Title='Plano cobre 100%' txt='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.' src='Financial_insurance_SVG 1.png'/>
				</div>
			</div>
		</section>
	)
}