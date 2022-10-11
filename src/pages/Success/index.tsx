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
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é so aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessContent>
        <ul>
          <li>
            <IconWrapper color={pallete['purple-500']}>
              <MapPin weight="fill" color="#fff" />
            </IconWrapper>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </li>
          <li>
            <IconWrapper color={pallete['yellow-500']}>
              <Timer weight="fill" color="#fff" />
            </IconWrapper>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </li>
          <li>
            <IconWrapper color={pallete['yellow-700']}>
              <CurrencyDollar weight="fill" color="#fff" />
            </IconWrapper>
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </li>
        </ul>
        <img src={deliveryImage} alt="Delivery Illustration" />
      </SuccessContent>
    </SuccessContainer>
  );
}
