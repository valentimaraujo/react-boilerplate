import * as S from './styles';

const Main = ({
  title = 'Start your next react project in seconds',
  description = 'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
}) => (
  <S.Wrapper>
    <S.Logo src="/img/cover.png" alt="Imagem de capa React Boilerplate" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);

export default Main;
