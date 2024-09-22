'use client';

import { useCurrentUser } from '@/core/auth/hooks/use-current-user';
import { SettingsThemeBtn } from '@/components/layout/header/settings-theme-btn';
import { SettingsUserButton } from '@/components/layout/header/settings-user-button';

export const SettingsBar = () => {
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <nav className="flex-grow-0 flex gap-4">
      <SettingsThemeBtn />
      <SettingsUserButton />
    </nav>
  );
};
