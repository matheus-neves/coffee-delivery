import coffeeIllustrationImg from '@assets/coffee-illustration.png';

import { CoffeeCard } from '@src/components/CoffeeCard';

import {
  CoffeeList,
  CoffeeSection,
  FeatureList,
  IconContainer,
  IntroContainer,
  IntroHeader
} from '@pages/Home/styles';
import {
  Coffee as CoffeIcon,
  Package,
  ShoppingCart,
  Timer
} from 'phosphor-react';
import { useTheme } from 'styled-components';

import traditionalCoffee from '@assets/coffees/traditional.png';

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
              <IconContainer bgcolor={pallete['yellow-700']}>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={pallete['gray-100']}
                />
                Simple and secure purchase
              </IconContainer>
            </li>
            <li>
              <IconContainer bgcolor={pallete['black-400']}>
                <Package size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              Packaging keeps the coffee intact
            </li>
            <li>
              <IconContainer bgcolor={pallete['yellow-500']}>
                <Timer size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              Fast and tracked delivery
            </li>
            <li>
              <IconContainer bgcolor={pallete['purple-500']}>
                <CoffeIcon
                  size={32}
                  weight="fill"
                  color={pallete['gray-100']}
                />
              </IconContainer>
              Coffee arrives fresh to you
            </li>
          </FeatureList>
        </div>
        <img src={coffeeIllustrationImg} alt="Coffee Illustration" />
      </IntroContainer>

      <CoffeeSection>
        <h2>Our coffees</h2>
        <CoffeeList>
          <CoffeeCard
            description="O tradicional café feito com água quente e grãos moídos"
            image={traditionalCoffee}
            price={9.9}
            tags={['Traditional', 'teste']}
            title="Expresso Tradicional"
          />
          <CoffeeCard
            description="O tradicional café feito com água quente e grãos moídos"
            image={traditionalCoffee}
            price={9.9}
            tags={['Traditional', 'teste']}
            title="Expresso Tradicional"
          />
          <CoffeeCard
            description="O tradicional café feito com água quente e grãos moídos"
            image={traditionalCoffee}
            price={9.9}
            tags={['Traditional', 'teste']}
            title="Expresso Tradicional"
          />
          <CoffeeCard
            description="O tradicional café feito com água quente e grãos moídos"
            image={traditionalCoffee}
            price={9.9}
            tags={['Traditional', 'teste']}
            title="Expresso Tradicional"
          />
          <CoffeeCard
            description="O tradicional café feito com água quente e grãos moídos"
            image={traditionalCoffee}
            price={9.9}
            tags={['Traditional', 'teste']}
            title="Expresso Tradicional"
          />
        </CoffeeList>
      </CoffeeSection>
    </main>
  );
}
