type Props = {
  title: string;
};

const Home = ({ title = 'EvoDev - Evolutive Development!' }: Props) => {
  return <h1>Style Compoment - {title}</h1>;
};

export default Home;
