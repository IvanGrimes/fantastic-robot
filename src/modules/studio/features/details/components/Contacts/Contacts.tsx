import React, { ComponentType, useMemo } from 'react';
import { Nullable } from '@utils/Nullable';
import {
  Phone,
  Facebook,
  Instagram,
  EmailOutlined,
  Language,
} from '@material-ui/icons';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Block } from '../Block';
import { List, ListItem } from './Contacts.styles';

type ContactsObject = Omit<ContactsProps, 'isLoading'>;

type ContactsType = keyof ContactsObject;

export type ContactsProps = {
  isLoading: boolean;
  site: Nullable<string>;
  instagram: Nullable<string>;
  email: Nullable<string>;
  phone: string;
  vk: Nullable<string>;
};

const icons: {
  [key in ContactsType]: ComponentType<SvgIconProps>;
} = {
  phone: Phone,
  vk: Facebook,
  instagram: Instagram,
  email: EmailOutlined,
  site: Language,
};

export const Contacts = ({ isLoading, ...props }: ContactsProps) => {
  const list = useMemo(
    () =>
      Object.entries(props).reduce<
        { Icon: ComponentType<SvgIconProps>; value: any }[]
      >(
        (acc, [name, value]) =>
          value ? [...acc, { Icon: icons[name as ContactsType], value }] : acc,
        []
      ),
    [props]
  );

  return (
    <Block isLoading={isLoading} title="Контактная информация">
      <List>
        {list.map(({ Icon, value }) => (
          <ListItem>
            <Icon />
            {value}
          </ListItem>
        ))}
      </List>
    </Block>
  );
};
