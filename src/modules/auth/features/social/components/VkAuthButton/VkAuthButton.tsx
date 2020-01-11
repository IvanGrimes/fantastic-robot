import React, { ReactText } from 'react';
import { ServiceButton } from '../../../../components';
import { openVkDialog } from '../../model/services';

export type VkAuthButtonProps = {
  children: ReactText;
};

export const VkAuthButton = ({ children }: VkAuthButtonProps) => (
  <ServiceButton variant="vk" onClick={openVkDialog}>
    {children}
  </ServiceButton>
);
