// Containers
import FormContextContainer from './form';
import ValuesContextContainer from './values';

export default function LoginContextContainer ({ children }:any) {
  return (
    <ValuesContextContainer>
      <FormContextContainer>
        {children}
      </FormContextContainer>
    </ValuesContextContainer>
  )
}
