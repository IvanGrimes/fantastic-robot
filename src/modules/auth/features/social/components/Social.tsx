import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { routes } from '@utils/routes';
import { connect } from 'react-redux';
import { vkAsync } from '../model/actions';

export type SocialProps = typeof mapDispatch;

const mapDispatch = {
  vk: vkAsync.request,
};

const _SocialContainer = ({ vk }: SocialProps) => {
  const { route } = useRouter();

  useEffect(() => {
    if (route === routes.vk) {
      vk();
    }
  }, [route, vk]);

  return <div />;
};

export const SocialContainer = connect(
  null,
  mapDispatch
)(_SocialContainer);
