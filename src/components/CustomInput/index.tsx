import { CustomInputContainer } from '@components/CustomInput/styles';
import { CustomInputTypes } from '@components/CustomInput/types';

export function CustomInput({ optional, ...rest }: CustomInputTypes) {
  return (
    <CustomInputContainer optional={optional}>
      <input {...rest} />
      {optional && <span>Optional</span>}
    </CustomInputContainer>
  );
}
