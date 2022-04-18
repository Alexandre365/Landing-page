import { styled } from '@stitches/react';

const Select = styled('select', {
    width:'100%',
    padding:'8px',
    border:'none',
    borderRadius:'10px',
    variants:{
        Color:{
            ColorBlack:{
                backgroundColor:'#212A39',
            }
        }
    }
})

export default Select