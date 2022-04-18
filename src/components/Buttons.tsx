import { styled } from '@stitches/react';

 const Button = styled('button', {
    border:'none',
    backgroundColor:'#ECECEC',
    margin:'10px 0px',
    borderRadius:'10px',
    cursor:'pointer',
    
    variants: {
        Color:{
            violet:{
                backgroundColor:'#6C63FF',
                color:'white',
            },
            violet_white:{
                backgroundColor:'#7F77FF',
                color:'white',
            }
        },
        Width:{
            100:{
                width:'100%',
                height:'50px'
            },

        },
        Size:{
            Px18:{
                fontSize:'18px',
            },
            Px20:{
                fontSize:'20px',
            },
            Px24:{
                fontSize:'24px',
            },
            Px28:{
                fontSize:'28px',
            },
        },
        Bord:{
            Violet:{
                border:'3px solid #6C63FF',
            },
        }
    },
  });

export default Button