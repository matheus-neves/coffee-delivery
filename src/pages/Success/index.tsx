import deliveryImage from '@assets/delivery-illustration.png';
import {
  IconWrapper,
  SuccessContainer,
  SuccessContent,
  SuccessHeader
} from '@pages/Success/styles';
import { useOrderContext } from '@src/contexts/OrderContext';

import { motion } from 'framer-motion';

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';

export function Success() {
  const { pallete } = useTheme();
  const { deliveryAddress, payment } = useOrderContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SuccessContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SuccessHeader>
        <h1>Wohooo! Your order has been confirmed!</h1>
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
                Deliver to{' '}
                <strong>
                  {deliveryAddress?.street}, {deliveryAddress?.number}
                </strong>
              </p>
              <p>
                {deliveryAddress?.district} - {deliveryAddress?.city},{' '}
                {deliveryAddress?.state}
              </p>
            </div>
          </li>
          <li>
            <IconWrapper color={pallete['yellow-500']}>
              <Timer weight="fill" color="#fff" />
            </IconWrapper>
            <div>
              <span>Expected delivery</span>
              <strong>20 min - 30 min</strong>
            </div>
          </li>
          <li>
            <IconWrapper color={pallete['yellow-700']}>
              <CurrencyDollar weight="fill" color="#fff" />
            </IconWrapper>
            <div>
              <span>Payment on delivery</span>
              <strong>{payment?.type}</strong>
            </div>
          </li>
        </ul>
        <motion.img
          src={deliveryImage}
          alt="Delivery Illustration"
          initial={{ translateX: -150, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            translateX: 0,
            opacity: 1,
            transition: { stiffness: 100, duration: 1, ease: 'easeOut' }
          }}
        />
      </SuccessContent>
    </SuccessContainer>
  );
}
