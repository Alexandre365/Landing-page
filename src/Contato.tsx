// @flow 
import * as React from 'react';
import './Contato.css'
type Props = {
    
};
export default  (props: Props) => {
    return (
        <section id="Contato" className="Contato">
            <div className="conteiner conteiner-Contato">
                <div className="HeaderContato">
                    <div className="txtContato txtTitulo">
                        <h2>Preço por cada carro</h2>
                        <p>Preços podem ser ajustados</p>
                    </div>
                </div>
                <div className='MainContato'>
                    <form action="#" className='Form'>
                        <div className='NomeEmail'>
                            <div className='Nome'>
                                <label htmlFor="">Nome</label>
                                <input type="text" name="" id="" placeholder='Usario' />
                            </div>
                            <div className='Email'>
                                <label htmlFor="">Email</label>
                                <input type="email" name="" id="" placeholder='Contato@email.com'/>
                            </div>    
                        </div>
                        <div className='Assunto'>
                            <label htmlFor="">Assunto</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className='Mensagem'>
                            <label htmlFor="">Sua Mensagem</label>
                            <textarea name="Mensagem" id="Mensagem" className='MensagemInput' ></textarea>
                        </div>
                        <div className='button'>
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};