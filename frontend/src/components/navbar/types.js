//@flow
import type {Element} from 'react';

export type Props = {
  title: String,
  leftComponent: Element,
  leftComponentAction: () => void,
  rightComponent: Element,
  rightComponentAction: () => void
};
