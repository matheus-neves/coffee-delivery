import deliveryImage from '@assets/delivery-illustration.png';
import {
  IconWrapper,
  SuccessContainer,
  SuccessContent,
  SuccessHeader
} from '@pages/Success/styles';

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Success() {
  const { pallete } = useTheme();

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Your order has been confirmed!</h1>
        <p>Now just wait for the coffee to come to you soon</p>
      </SuccessHeader>
      <SuccessContent>
        <ul>
          <li>
            <IconWrapper color={pallete['purple-500']}>
              <MapPin weight="fill" color="#fff" />
            </IconWrapper>
            <div>
              <p>
                Delivery at <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </li>
          <li>
            <IconWrapper color={pallete['yellow-500']}>
              <Timer weight="fill" color="#fff" />
            </IconWrapper>
            <div>
              <span>Delivery forecast</span>
              <strong>20 min - 30 min</strong>
            </div>
          </li>
          <li>
            <IconWrapper color={pallete['yellow-700']}>
              <CurrencyDollar weight="fill" color="#fff" />
            </IconWrapper>
            <div>
              <span>Payment on delivery</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </li>
        </ul>
        <img src={deliveryImage} alt="Delivery Illustration" />
      </SuccessContent>
    </SuccessContainer>
  );
}
