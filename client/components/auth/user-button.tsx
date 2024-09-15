'use client';

import { PersonIcon } from '@radix-ui/react-icons';
import { ExitIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { LogoutButton } from '@/components/auth/logout-button';

export const UserButton = () => {
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0">
        <Avatar className="w-11 h-11">
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback className="bg-transparent hover:bg-secondary hover:text-secondary-foreground">
            <PersonIcon />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <LogoutButton>
          <DropdownMenuItem className="text-md">
            <ExitIcon className="mr-4" />
            logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
