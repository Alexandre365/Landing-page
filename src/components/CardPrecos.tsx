import { styled } from '@stitches/react';

const CardPreco = styled('div', {
    margin:'10px 10px',
    padding:'0px 20px',
    borderRadius:'10px',
    boxShadow:'6px 8px 5px 0px rgba(0,0,0,0.12)',
    variants: {
        col:{
            white:{
                backgroundColor:'#F2F2F2',
            },
            violet: {
                backgroundColor:'#6C63FF',
                '& div, p, h3, li': {
                    color:'white',
                }
            }
        },
    }
})

export default CardPreco