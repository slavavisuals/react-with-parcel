import { styled } from '@stitches/react';

const Button = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

const Test = () => {
  return (
    <>
      <div>Test Component121</div>
      <Button>my button</Button>
    </>
  );
};

export default Test;
