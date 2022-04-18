// @flow 
import { styled } from '@stitches/react';
import * as React from 'react';
type Props = {
    Title: string
    txt: string
    src: string
};


const CardSeguros = styled('div',{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'10px 0px',
    '& div':{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        width:'100%',
        padding:'0px 10px',
    },
    '& img':{
        width:'100px',
        height:'100px',
        padding:'0px 10px',
    },
    '& p':{
        width:'100%',
    }
})
export default (props: Props) => {
    const link = `./img/${props.src}`
    return (
        <CardSeguros className='CardSeguro'>
            <img src={link} alt="" />
            <div>
                <h3>{props.Title}</h3>
                <p>{props.txt}</p>
            </div>
        </CardSeguros>
    );
};