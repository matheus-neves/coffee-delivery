import { CustomInputContainer } from '@components/CustomInput/styles';
import { CustomInputTypes } from '@components/CustomInput/types';

export function CustomInput({
  optional,
  $maxWidth,
  register,
  name,
  ...rest
}: CustomInputTypes) {
  return (
    <CustomInputContainer optional={optional} $maxWidth={$maxWidth}>
      <input {...register(name)} {...rest} />
      {optional && <span>Optional</span>}
    </CustomInputContainer>
  );
}
