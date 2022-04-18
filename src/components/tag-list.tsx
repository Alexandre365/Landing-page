import { styled } from '@stitches/react';
type LiProps = {
    text: string;
}

export default (props: LiProps) => {
    const Li = styled('li', {
        listStyleType: 'none',
        fontSize:'20px',
        color:'',
        cursor: 'pointer',
      });

    return <Li>{props.text}</Li>
}

