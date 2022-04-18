import React, { useState } from 'react'

import './Precos.css'
import Button from './components/Buttons'
import Select from './components/select'
import CardPreco from './components/CardPrecos'

type event = {
    target:any;
}
export default () =>{

	const [Preco, IntroPreco] = useState(50)
    
	const SelectChange = (e: event) => {
		//alert(e.target.value)
		if (e.target.value == 'Model01') {
			IntroPreco(50)
		}else if(e.target.value == 'Model02'){
			IntroPreco(90)
		}else{
			IntroPreco(140)
		}
	}
    
	return <section id="Prec" className="Prec">
		<div className='conteiner conteiner-flexbox'>
			<div className='HeaderPrecos'>
				<div className='txtPrecos txtTitulo'>
					<h2>Preço por cada carro</h2>
					<p>Preços podem ser ajustados</p>
				</div>
				<div className='Select' id='Select'>
					<Select name="Model" id="Model" onChange={SelectChange}>
						<option value="Model01">Model 1</option>
						<option value="Model02">Model 2</option>
						<option value="Model03">Model 3</option>
					</Select>
				</div>
			</div>
			<div className='Flexbox'>
				<CardPreco col='white'>
					<div className='Card-Container'>
						<p>Intro</p>
						<div className='Preco'>
							<h3>R${Preco}</h3>
							<p>&nbsp;/ 1h</p>
						</div>
						<div>
							<div className='txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
							<div>
								<ul className='List-'>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
								</ul>
							</div>
						</div>
						<Button Width='100' Bord='Violet' Size='Px18'>Quero esse</Button>
					</div>
				</CardPreco>
				<CardPreco col='white'>
					<div className='Card-Container'>
						<p>Base</p>
						<div className='Preco'>
							<h3>R${Preco + 50}</h3>
							<p>&nbsp;/ 12h</p>
						</div>
						<div>
							<div className='txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
							<div>
								<ul className='List-'>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
								</ul>
							</div>
						</div>
						<Button Width='100' Bord='Violet' Size='Px18'>Quero esse</Button>
					</div>
				</CardPreco>
				<CardPreco col='violet'>
					<div className='Card-Container'>
						<p>Popular</p>
						<div className='Preco'>
							<h3>R${Preco +100}</h3>
							<p>&nbsp;/ 24h</p>
						</div>
						<div>
							<div className='txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
							<div>
								<ul className='List-'>
									<li ><img src='./img/check-circle.svg'></img>Lorem Ipsum is</li>
									<li ><img src='./img/check-circle.svg'></img>Lorem Ipsum is</li>
									<li ><img src='./img/check-circle.svg'></img>Lorem Ipsum is</li>
								</ul>
							</div>
						</div>
						<Button Width='100' Color='violet_white' Size='Px18'>Quero esse</Button>
					</div>
				</CardPreco>
				<CardPreco col='white'>
					<div className='Card-Container'>
						<p>Ultrapremio</p>
						<div className='Preco'>
							<h3>R${Preco + 150}</h3>
							<p>&nbsp;/ 1 Semana</p>
						</div>
						<div>
							<div className='txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
							<div>
								<ul className='List-'>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
									<li ><img src='./img/check-circle.png'></img>Lorem Ipsum is</li>
								</ul>
							</div>
						</div>
						<Button Width='100' Bord='Violet' Size='Px18'>Quero esse</Button>
					</div>
				</CardPreco>
			</div>
		</div>
	</section>
}