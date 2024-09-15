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
import { Button } from '@/components/ui/button';

export const UserButton = () => {
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Avatar>
            <AvatarImage src={user?.image || ''} />
            <AvatarFallback className="bg-transparent hover:bg-secondary hover:text-secondary-foreground">
              <PersonIcon />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="mr-4" />
            logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
