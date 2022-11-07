import Logo from '@assets/logo.svg';
import {
  ActionsContainer,
  HeaderContainer,
  HeaderContent,
  SentinelBox
} from '@components/Header/styles';
import { LocationIndicator } from '@components/LocationIndicator';
import { CartLink } from '@src/components/CartLink';
import { useCartContext } from '@src/contexts/CartContext';
import { ShoppingCart } from 'phosphor-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

export function Header() {
  const { pallete } = useTheme();
  const { cartItems } = useCartContext();

  const headerRef = useRef<HTMLHeadingElement>(null);
  const sentinelEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        const targetInfo = entry.boundingClientRect;
        if (targetInfo.top < 0) {
          return headerRef?.current?.classList.add('shrink-shadow');
        }
        headerRef?.current?.classList.remove('shrink-shadow');
      },
      {
        threshold: 1
      }
    );

    if (sentinelEl.current) {
      observer.observe(sentinelEl.current);
    }

    return () => {
      if (sentinelEl.current) {
        observer.unobserve(sentinelEl.current);
      }
    };
  }, []);

  return (
    <>
      <SentinelBox ref={sentinelEl} />
      <HeaderContainer ref={headerRef}>
        <HeaderContent>
          <Link to="/">
            <img src={Logo} alt="Coffee Delivery" />
          </Link>
          <ActionsContainer>
            <LocationIndicator />
            <CartLink to={'/checkout'} bgcolor={pallete['yellow-100']}>
              <ShoppingCart
                weight="fill"
                color={pallete['yellow-700']}
                size={22}
              />
              <span>{cartItems.length}</span>
            </CartLink>
          </ActionsContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
