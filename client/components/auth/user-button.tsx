'use client';

import { AvatarIcon } from '@radix-ui/react-icons';
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0">
        <Avatar>
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback className="bg-gray-100">
            <AvatarIcon className="h-8 w-8" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
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
