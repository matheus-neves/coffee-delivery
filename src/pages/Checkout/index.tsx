import {
  BoxSelectCard,
  CartList,
  CheckoutContainerForm,
  Divider,
  FormFieldset,
  Paper,
  PaperHeader
} from '@pages/Checkout/styles';
import { CardRadio } from '@src/components/CardRadio';
import { CartItem } from '@src/components/CartItem';
import { CustomInput } from '@src/components/CustomInput';
import { useCartContext } from '@src/contexts/CartContext';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { zodResolver } from '@hookform/resolvers/zod';
import { EmptyCart } from '@src/components/EmptyCart';
import { useUserLocationContext } from '@src/contexts/UserLocationContext';
import { TotalList } from './components/TotalList';
import { validationSchema, ValidationSchema } from './Form/schema';
import { IFormInput } from './types';

export function Checkout() {
  const { pallete } = useTheme();

  const { location } = useUserLocationContext();

  const { cartItems, total: totalCart } = useCartContext();
  const cartIsEmpty = cartItems?.length === 0;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      city: location?.data?.city,
      district: location?.data?.county,
      street: location?.data?.street,
      zipCode: location?.data?.postcode,
      number: location?.data?.number,
      state: location?.data?.stateCode
    }
  });

  const onSubmit: SubmitHandler<ValidationSchema> = data => {
    console.log('data: ', data);
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
        <h2>Finish your order</h2>
        <Paper>
          <PaperHeader>
            <MapPinLine
              weight="regular"
              color={pallete['yellow-700']}
              size={22}
            />
            <div>
              <h3>Delivery address</h3>
              <p>Inform the address where you want to receive your order</p>
            </div>
          </PaperHeader>
          <FormFieldset>
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
          </FormFieldset>
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
                <h3>Payment</h3>
                <p>
                  Payment is made on delivery. Choose the way you want to pay
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
        <h2>Selected coffees</h2>
        <Paper borderRadius="6px 44px">
          <CartList>
            {cartItems.map(item => (
              <>
                <CartItem
                  key={item.title}
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

          <TotalList totalCart={totalCart} />

          <button type="submit">Confirm order</button>
        </Paper>
      </section>
    </CheckoutContainerForm>
  );
}
