// Modules
import UiContextContainer from './ui-context';
import TokenContextContainer from './token-context';
import DialogContextContainer from './dialog-context';

export default function MainContext ({ children }:any) {
  return (
    <TokenContextContainer>
      <UiContextContainer>
        <DialogContextContainer>
          {children}
        </DialogContextContainer>
      </UiContextContainer>
    </TokenContextContainer>
  )
}
