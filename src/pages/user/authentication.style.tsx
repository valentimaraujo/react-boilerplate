import tw from 'tailwind-styled-components';

const Container = tw.div`
  flex
  items-center
  justify-center
  flex-col
  w-full
  bg-indigo-600
  py-20
`;

const Title = tw.p`
  flex
  items-center
  justify-center
`;

const Button = tw.button`
  py-4
  px-20
  bg-red-600
  rounded-lg
`;

export { Container, Title, Button };
