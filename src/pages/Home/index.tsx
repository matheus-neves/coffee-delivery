import coffeeIllustrationImg from '@assets/coffee-illustration.png';
import { motion } from 'framer-motion';

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
import { CoffeeCard } from '@src/components/CoffeeCard';
import { api } from '@src/services/api';
import { formatNumber } from '@src/utils/formatNumber';
import { useEffect, useState } from 'react';
import { coffeeContainer, featureItem, featureListVariant } from './animations';

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
          <IntroHeader
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'circOut' }}
          >
            <h1>Find the perfect coffee for any time of day</h1>
            <p>
              With Coffee Delivery you get your coffee wherever you are, anytime
            </p>
          </IntroHeader>

          <FeatureList
            variants={featureListVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={featureItem}>
              <IconContainer bgcolor={pallete['yellow-700']}>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={pallete['gray-100']}
                />
                Simple and secure purchase
              </IconContainer>
            </motion.li>
            <motion.li variants={featureItem}>
              <IconContainer bgcolor={pallete['black-400']}>
                <Package size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              Packaging keeps the coffee intact
            </motion.li>
            <motion.li variants={featureItem}>
              <IconContainer bgcolor={pallete['yellow-500']}>
                <Timer size={32} weight="fill" color={pallete['gray-100']} />
              </IconContainer>
              Fast and tracked delivery
            </motion.li>
            <motion.li variants={featureItem}>
              <IconContainer bgcolor={pallete['purple-500']}>
                <CoffeIcon
                  size={32}
                  weight="fill"
                  color={pallete['gray-100']}
                />
              </IconContainer>
              Coffee arrives fresh to you
            </motion.li>
          </FeatureList>
        </div>
        <motion.img
          src={coffeeIllustrationImg}
          alt="Coffee Illustration"
          initial={{ translateX: 100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: 200,
            delay: 1.5
          }}
        />
      </IntroContainer>
      {coffees.length > 0 && (
        <CoffeeSection
          variants={coffeeContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Our coffees</h2>
          <CoffeeList
            variants={coffeeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coffees.map(coffee => (
              <CoffeeCard
                id={coffee.id}
                description={coffee.description}
                src={coffee.src}
                price={coffee.price}
                formattedPrice={coffee.formattedPrice}
                tags={coffee.tags}
                title={coffee.title}
                key={coffee.id}
              />
            ))}
          </CoffeeList>
        </CoffeeSection>
      )}
    </main>
  );
}
