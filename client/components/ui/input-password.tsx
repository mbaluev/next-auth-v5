import { Input, InputProps } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/core/utils/cn';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { forwardRef, useState } from 'react';

const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { ...inputProps } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible = () => setVisible(!visible);

  return (
    <div className="relative">
      <Input
        {...inputProps}
        ref={ref}
        type={visible ? 'text' : 'password'}
        className={cn('relative pr-9', inputProps.className)}
      />
      <Button size="adornment" variant="ghost" onClick={handleVisible} asChild={true}>
        {visible ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </Button>
    </div>
  );
});

InputPassword.displayName = 'InputPassword';
export { InputPassword };
