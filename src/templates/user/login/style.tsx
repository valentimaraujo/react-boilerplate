import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  items-center
  justify-center
  flex-col
  w-full
  h-screen
  bg-gray-200
  py-20
`;

export const FormContainer = tw.form`
  w-96
  rounded-lg
  bg-white
  p-10
  shadow-lg
`;

export const InputContainer = tw.div`
  flex
  flex-col
`;

export const Button = tw.button`
  btn
  bg-blue-600
  hover:bg-blue-900
  flex-1
  text-white
  uppercase
  font-medium
`;
