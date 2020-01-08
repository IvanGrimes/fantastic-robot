import React, { ReactText, useMemo } from 'react';
import { VkButton, EmailButton } from './ServiceButton.styles';

type ServiceVariant = 'vk' | 'email';

export type ServiceButtonProps = {
  variant: ServiceVariant;
  children: ReactText;
  onClick?: () => void;
};

const getButton = (variant: ServiceVariant) => {
  switch (variant) {
    case 'vk':
      return VkButton;
    case 'email':
    default:
      return EmailButton;
  }
};

export const ServiceButton = ({
  variant,
  onClick,
  children,
}: ServiceButtonProps) => {
  const ButtonComponent = useMemo(() => getButton(variant), [variant]);

  return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>;
};
