import { Header } from '@src/components/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './styles';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
