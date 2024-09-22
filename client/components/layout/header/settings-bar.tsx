'use client';

import { SettingsThemeBtn } from '@/components/layout/header/settings-theme-btn';
import { SettingsUserButton } from '@/components/layout/header/settings-user-button';

export const SettingsBar = () => {
  return (
    <nav className="flex-grow-0 flex gap-4">
      <SettingsThemeBtn />
      <SettingsUserButton />
    </nav>
  );
};
