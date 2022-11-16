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

import { zodResolver } from '@hookform/resolvers/zod';
import { EmptyCart } from '@src/components/EmptyCart';
import { ValidationSchema, validationSchema } from './Form/schema';

export function Checkout() {
  const { pallete } = useTheme();

  const { cartItems, total: totalCart } = useCartContext();

  const cartIsEmpty = cartItems?.length === 0;

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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: zodResolver(validationSchema)
  });

  console.log(errors);

  const onSubmit: SubmitHandler<ValidationSchema> = data => {
    console.log(data);
  };

  if (cartIsEmpty) {
    return (
      <CheckoutContainerForm>
        <EmptyCart />
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
              maxLength={10}
              name="zipCode"
              register={register}
              error={errors.zipCode?.message}
            />
            <CustomInput
              placeholder="Street"
              maxLength={50}
              name="street"
              register={register}
              error={errors.street?.message}
            />
            <div>
              <CustomInput
                placeholder="Number"
                maxLength={20}
                name="number"
                register={register}
                error={errors.number?.message}
              />
              <CustomInput
                placeholder="Complement"
                maxLength={20}
                name="complement"
                optional
                $maxWidth={34.8}
                register={register}
                error={errors.complement?.message}
              />
            </div>
            <div>
              <CustomInput
                placeholder="District"
                maxLength={20}
                name="district"
                register={register}
                error={errors.district?.message}
              />
              <CustomInput
                placeholder="City"
                maxLength={15}
                name="city"
                $maxWidth={27.6}
                register={register}
                error={errors.city?.message}
              />
              <CustomInput
                placeholder="State"
                maxLength={5}
                name="state"
                $maxWidth={6}
                register={register}
                error={errors.state?.message}
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
                error={errors.payment?.message}
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
                error={errors.payment?.message}
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
                error={errors.payment?.message}
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
