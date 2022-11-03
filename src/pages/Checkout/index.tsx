import {
  BoxSelectCard,
  CartList,
  CheckoutContainerForm,
  Divider,
  Form,
  Paper,
  PaperHeader,
  TotalLabel,
  TotalList,
  TotalValue
} from '@pages/Checkout/styles';
import { CardRadio } from '@src/components/CardRadio';
import { CartItem } from '@src/components/CartItem';
import { CustomInput } from '@src/components/CustomInput';
import { useCartContext } from '@src/contexts/CartContext';
import { formatNumber } from '@src/utils/formatNumber';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { IFormInput } from './types';

export function Checkout() {
  const { pallete } = useTheme();

  const { cartItems, total: totalCart } = useCartContext();

  const cartIsEmpty = cartItems.length === 0;

  const shipment = totalCart ? 10 : 0;

  const formattedShipment = formatNumber({
    value: shipment
  });

  const total = shipment + totalCart;

  const formattedTotalCart = formatNumber({
    value: totalCart
  });

  const formattedTotal = formatNumber({
    value: total
  });

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  if (cartIsEmpty) {
    return (
      <CheckoutContainerForm>
        <p>Carrinho vazio</p>
      </CheckoutContainerForm>
    );
  }

  return (
    <CheckoutContainerForm onSubmit={handleSubmit(onSubmit)}>
      <section>
        <h2>Complete seu pedido</h2>
        <Paper>
          <PaperHeader>
            <MapPinLine
              weight="regular"
              color={pallete['yellow-700']}
              size={22}
            />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </PaperHeader>
          <Form>
            <CustomInput
              placeholder="Zip code"
              name="zipCode"
              register={register}
            />
            <CustomInput
              placeholder="Street"
              name="street"
              register={register}
            />
            <div>
              <CustomInput
                placeholder="Number"
                name="number"
                register={register}
              />
              <CustomInput
                placeholder="Complement"
                name="complement"
                optional
                $maxWidth={34.8}
                register={register}
              />
            </div>
            <div>
              <CustomInput
                placeholder="District"
                name="district"
                register={register}
              />
              <CustomInput
                placeholder="City"
                name="city"
                $maxWidth={27.6}
                register={register}
              />
              <CustomInput
                placeholder="State"
                name="state"
                $maxWidth={6}
                register={register}
              />
            </div>
          </Form>
        </Paper>

        <Paper>
          <div>
            <PaperHeader>
              <CurrencyDollar
                weight="regular"
                color={pallete['purple-500']}
                size={22}
              />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaperHeader>

            <BoxSelectCard>
              <CardRadio
                label="Credit card"
                id="payment-credit"
                name="payment"
                value="payment-credit"
                Icon={
                  <CreditCard
                    weight="regular"
                    color={pallete['purple-500']}
                    size={16}
                  />
                }
                register={register}
              />
              <CardRadio
                label="Debit card"
                id="payment-debit"
                name="payment"
                value="payment-debit"
                Icon={
                  <Bank
                    weight="regular"
                    color={pallete['purple-500']}
                    size={16}
                  />
                }
                register={register}
              />
              <CardRadio
                label="Cash"
                id="payment-cash"
                name="payment"
                value="payment-cash"
                Icon={
                  <Money
                    weight="regular"
                    color={pallete['purple-500']}
                    size={16}
                  />
                }
                register={register}
              />
            </BoxSelectCard>
          </div>
        </Paper>
      </section>

      <section>
        <h2>Cafés selecionados</h2>
        <Paper borderRadius="6px 44px">
          <CartList>
            {cartItems.map(item => (
              <>
                <CartItem
                  key={item.id}
                  id={item.id}
                  quantity={item.quantity}
                  src={item.src}
                  title={item.title}
                  price={item.formattedPrice}
                />
                <Divider />
              </>
            ))}
          </CartList>

          <TotalList>
            <li>
              <TotalLabel>Total de itens</TotalLabel>
              <TotalValue>{formattedTotalCart}</TotalValue>
            </li>
            <li>
              <TotalLabel>Shipment</TotalLabel>
              <TotalValue>{formattedShipment}</TotalValue>
            </li>
            <li>
              <strong>Total</strong>
              <strong>{formattedTotal}</strong>
            </li>
          </TotalList>

          <button type="submit">Confirmar pedido</button>
        </Paper>
      </section>
    </CheckoutContainerForm>
  );
}
