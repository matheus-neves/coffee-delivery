import coffeeIllustrationImg from '@assets/coffee-illustration.png';
import {
  CoffeeActionsContainer,
  CoffeeContainer,
  CoffeeContent,
  CoffeeFooter,
  CoffeeHeader,
  CoffeeList,
  CoffeePrice,
  CoffeeSection,
  FeatureList,
  IconContainer,
  IntroContainer,
  IntroHeader
} from '@pages/Home/styles';
import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  ShoppingCartSimple,
  Timer
} from 'phosphor-react';
import { useTheme } from 'styled-components';

import traditionalCoffee from '@assets/coffees/traditional.png';
import { CartLink } from '@src/components/CartLink';

export function Home() {
  const { pallete } = useTheme();

  return (
    <main>
      <IntroContainer>
        <div>
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
                Simple and secure purchase
              </IconContainer>
            </li>
            <li>
              <IconContainer bgColor={pallete['black-400']}>
                <Package size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              Packaging keeps the coffee intact
            </li>
            <li>
              <IconContainer bgColor={pallete['yellow-500']}>
                <Timer size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              Fast and tracked delivery
            </li>
            <li>
              <IconContainer bgColor={pallete['purple-500']}>
                <Coffee size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              Coffee arrives fresh to you
            </li>
          </FeatureList>
        </div>
        <img src={coffeeIllustrationImg} alt="Coffee Illustration" />
      </IntroContainer>

      <CoffeeSection>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          <CoffeeContainer>
            <CoffeeHeader>
              <img src={traditionalCoffee} alt="" />
              <div>
                <strong>Tradicional</strong>
                <strong>Tradicional</strong>
              </div>
            </CoffeeHeader>
            <CoffeeContent>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </CoffeeContent>
            <CoffeeFooter>
              <CoffeePrice>
                R$ <strong>9,90</strong>
              </CoffeePrice>
              <CoffeeActionsContainer>
                <div>
                  <button>
                    <Minus
                      size={14}
                      weight="bold"
                      color={pallete['purple-500']}
                    />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus
                      size={14}
                      weight="bold"
                      color={pallete['purple-500']}
                    />
                  </button>
                </div>
                <CartLink to={'#'} bgColor={pallete['purple-700']}>
                  <ShoppingCartSimple
                    weight="fill"
                    color={pallete['gray-200']}
                    size={22}
                  />
                </CartLink>
              </CoffeeActionsContainer>
            </CoffeeFooter>
          </CoffeeContainer>
        </CoffeeList>
      </CoffeeSection>
    </main>
  );
}
