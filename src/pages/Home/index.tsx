import coffeeIllustrationImg from '@assets/coffee-illustration.png';
import {
  FeatureList,
  IconContainer,
  IntroContainer,
  IntroHeader
} from '@pages/Home/styles';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Home() {
  const { pallete } = useTheme();

  return (
    <main>
      <IntroContainer>
        <div>
          {/* <h1>Encontre o café perfeito para qualquer hora do dia</h1> */}
          {/* <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p> */}
          <IntroHeader>
            <h1>Find the perfect coffee for any time of day</h1>
            <p>
              With Coffee Delivery you get your coffee wherever you are, anytime
            </p>
          </IntroHeader>

          <FeatureList>
            <li>
              <IconContainer bgColor={pallete['yellow-700']}>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={pallete['gray-100']}
                />
                {/* Compra simples e segura */}
                Simple and secure purchase
              </IconContainer>
            </li>
            <li>
              <IconContainer bgColor={pallete['black-400']}>
                <Package size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              {/* Embalagem mantém o café intacto */}
              Packaging keeps the coffee intact
            </li>
            <li>
              <IconContainer bgColor={pallete['yellow-500']}>
                <Timer size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              {/* Entrega rápida e rastreada */}
              Fast and tracked delivery
            </li>
            <li>
              <IconContainer bgColor={pallete['purple-500']}>
                <Coffee size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              {/* café chega fresquinho até você */}
              Coffee arrives fresh to you
            </li>
          </FeatureList>
        </div>
        <img src={coffeeIllustrationImg} alt="Coffee Illustration" />
      </IntroContainer>
    </main>
  );
}
