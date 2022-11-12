import { CustomInputContainer } from '@components/CustomInput/styles';
import { CustomInputTypes } from '@components/CustomInput/types';

export function CustomInput({
  optional,
  $maxWidth,
  register,
  name,
  error,
  placeholder,
  ...rest
}: CustomInputTypes) {
  return (
    <CustomInputContainer
      optional={optional}
      $maxWidth={$maxWidth}
      error={error}
    >
      <input {...register(name)} {...rest} placeholder={error || placeholder} />
      {optional && <span>Optional</span>}
    </CustomInputContainer>
  );
}
