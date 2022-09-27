import Logo from '@assets/logo.svg';
import {
  ActionsContainer,
  HeaderContainer,
  LocationIndicator
} from '@components/Header/styles';
import { CartLink } from '@src/components/CartLink';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

export function Header() {
  const { pallete } = useTheme();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Coffee Delivery" />
      </Link>
      <ActionsContainer>
        <LocationIndicator>
          <MapPin weight="fill" color={pallete['purple-500']} />
          <span>Porto Alegre, RS</span>
        </LocationIndicator>
        <CartLink to={'/'} bgColor={pallete['yellow-100']}>
          <ShoppingCart weight="fill" color={pallete['yellow-700']} size={22} />
          <span>3</span>
        </CartLink>
      </ActionsContainer>
    </HeaderContainer>
  );
}
