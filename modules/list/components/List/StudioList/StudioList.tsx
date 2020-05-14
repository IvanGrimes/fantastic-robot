import { FunctionComponent } from 'react';
import { StudioListServiceProps } from '../../../internal';
import { renderService } from '../../../../../model';
import { StudioListLoading } from './StudioListLoading';
import { StudioListFail } from './StudioListFail';
import { StudioListSuccess } from './StudioListSuccess';

export const StudioList: FunctionComponent<{
  service: StudioListServiceProps;
}> = ({ service }) =>
  renderService(service, {
    Loading: StudioListLoading,
    Fail: StudioListFail,
    Success: StudioListSuccess,
  });
