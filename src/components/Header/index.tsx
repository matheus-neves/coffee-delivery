import Logo from '@assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import {
  ActionsContainer,
  CardButton,
  HeaderContainer,
  LocationIndicator
} from './styles';

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
        <CardButton>
          <ShoppingCart weight="fill" color={pallete['yellow-700']} size={22} />
          <span>3</span>
        </CardButton>
      </ActionsContainer>
    </HeaderContainer>
  );
}
