import React, { ComponentType, useMemo } from 'react';
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
import { useDetails } from '../DetailsContext';

type ContactsObject = ReturnType<typeof useDetails>['studio']['contacts'];

type ContactsType = keyof ContactsObject;

const icons: {
  [key in ContactsType]: ComponentType<SvgIconProps>;
} = {
  phone: Phone,
  vk: Facebook,
  instagram: Instagram,
  email: EmailOutlined,
  site: Language,
};

export const Contacts = () => {
  const { isStudioLoading, studio } = useDetails();
  const list = useMemo(
    () =>
      Object.entries(studio.contacts).reduce<
        { Icon: ComponentType<SvgIconProps>; value: any }[]
      >(
        (acc, [name, value]) =>
          value ? [...acc, { Icon: icons[name as ContactsType], value }] : acc,
        []
      ),
    [studio.contacts]
  );

  return (
    <Block
      isLoading={isStudioLoading || !list.length}
      title="Контактная информация"
    >
      <List>
        {list.map(({ Icon, value }) => (
          <ListItem key={value}>
            <Icon />
            {value}
          </ListItem>
        ))}
      </List>
    </Block>
  );
};
