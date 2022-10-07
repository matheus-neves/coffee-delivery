import { CustomInputContainer } from '@components/CustomInput/styles';
import { CustomInputTypes } from '@components/CustomInput/types';

export function CustomInput({ optional, maxwidth, ...rest }: CustomInputTypes) {
  return (
    <CustomInputContainer optional={optional} maxwidth={maxwidth}>
      <input {...rest} />
      {optional && <span>Optional</span>}
    </CustomInputContainer>
  );
}
