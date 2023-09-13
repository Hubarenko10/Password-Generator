import { CopyBtn, PassBox, PassInput } from './PasswordAreaStyled';
import toast, { Toaster } from 'react-hot-toast';
export const Password = ({ password }) => {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(password);
    if(password === ""){
        toast.error('You need to generate password', {
            duration: 4000,
            position: 'top-center',
            
          });
    }else{ toast.success('Copied', {
        duration: 4000,
        position: 'top-center',
        icon: '👏',
      });}
   
  }
  
  return (
    <>
      <PassBox>
        <form>
          <PassInput
            type="text"
            placeholder="P4$5W0rD!"
            disabled
            value={password}
          />
        </form>
        <CopyBtn onClick={copyToClipBoard} />
        <Toaster/>
      </PassBox>
    </>
  );
};
