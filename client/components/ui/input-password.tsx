import { Input, InputProps } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

interface IProps extends InputProps {}

export const InputPassword = (props: IProps) => {
  const { ...inputProps } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible = () => setVisible(!visible);

  return (
    <div className="relative">
      <Input
        {...inputProps}
        type={visible ? 'text' : 'password'}
        className={cn('relative pr-9', inputProps.className)}
      />
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 p-1 cursor-pointer"
        onClick={handleVisible}
        asChild={true}
      >
        {visible ? <EyeOpenIcon /> : <EyeClosedIcon />}
      </Button>
    </div>
  );
};
