import cartEmptyImg from '@assets/cart-empty.png';
import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { EmptyCartContainer } from './styles';

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <img src={cartEmptyImg} alt="" />
      <strong>Your cart is currently empty!</strong>

      <Link to="/">
        <ArrowLeft size={18} weight={'bold'} /> Back to the products
      </Link>
    </EmptyCartContainer>
  );
}
