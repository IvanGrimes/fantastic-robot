import React, {
  MouseEventHandler,
  ReactNode,
  ReactNodeArray,
  useCallback,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import { DeepPartial } from 'redux';
import { mergeDeepRight } from 'ramda';
import { useSpring } from 'react-spring';
import throttle from 'lodash/throttle';
import { useSelector } from 'react-redux';
import { Paper, FilterWrapper } from './useStudioListFilterPopover.styles';
import { getIsHeaderVisible } from '../../../ui/model/selectors';

type UseStudioListFilterPopoverInput = ReactNode | ReactNodeArray;

type State = {
  isVisible: boolean;
  bottom: number;
  left: number;
};

type HandleToggleFilter = MouseEventHandler<HTMLButtonElement>;

export const useStudioListFilterPopover = (
  children: UseStudioListFilterPopoverInput
): [boolean, HandleToggleFilter, JSX.Element] => {
  const [state, setState] = useReducer<
    (prevState: State, nextState: DeepPartial<State>) => State
  >((prevState, nextState) => mergeDeepRight(prevState, nextState as State), {
    isVisible: false,
    bottom: 0,
    left: 0,
  });
  const isHeaderVisible = useSelector(getIsHeaderVisible);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const mountTargetRef = useRef<HTMLElement | null>(null);
  const handleToggleFilter: HandleToggleFilter = useCallback(
    ev => {
      const mountTarget = ev.currentTarget;
      const { bottom, left } = mountTarget.getBoundingClientRect();

      mountTargetRef.current = mountTarget;

      return setState({
        isVisible: !state.isVisible,
        bottom: isHeaderVisible ? bottom : bottom + 66,
        left,
      });
    },
    [isHeaderVisible, state.isVisible]
  );
  const handleCloseFilters = useCallback(
    () => setState({ isVisible: false }),
    []
  );
  const handleResize = useCallback(
    throttle(() => {
      const mountTarget = mountTargetRef.current;

      if (mountTarget) {
        const { left, bottom } = mountTarget.getBoundingClientRect();

        setState({ left, bottom: isHeaderVisible ? bottom : bottom + 66 });
      }
    }, 60),
    []
  );
  const handleClickOutside = useCallback(
    ev => {
      const target = targetRef.current;
      const mountTarget = mountTargetRef.current;

      if (
        mountTarget &&
        target &&
        !mountTarget.contains(ev.target) &&
        !target.contains(ev.target)
      ) {
        handleCloseFilters();
      }
    },
    [handleCloseFilters]
  );
  const targetSpring = useSpring({
    opacity: state.isVisible ? 1 : 0,
  });

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleClickOutside, handleResize, state.isVisible]);

  return [
    state.isVisible,
    handleToggleFilter,
    <FilterWrapper
      style={targetSpring}
      isVisible={state.isVisible}
      top={state.bottom}
      left={state.left}
      ref={targetRef}
    >
      <Paper>{children}</Paper>
    </FilterWrapper>,
  ];
};
