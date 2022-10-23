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

import { CoffeeState } from '@pages/Home/types';
import { api } from '@src/services/api';
import { formatNumber } from '@src/utils/formatNumber';
import { useEffect, useState } from 'react';

export function Home() {
  const { pallete } = useTheme();
  const [coffees, setCoffees] = useState<CoffeeState[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<CoffeeState[]>('coffees');
      const formattedData = data.map(coffee => ({
        ...coffee,
        formattedPrice: formatNumber({
          value: coffee.price
        })
      }));
      setCoffees(formattedData);
    })();
  }, []);

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
          {coffees.map(coffee => (
            <CoffeeCard
              id={coffee.id}
              key={coffee.id}
              description={coffee.description}
              src={coffee.src}
              price={coffee.price}
              formattedPrice={coffee.formattedPrice}
              tags={coffee.tags}
              title={coffee.title}
            />
          ))}
        </CoffeeList>
      </CoffeeSection>
    </main>
  );
}
