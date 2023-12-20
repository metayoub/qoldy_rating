import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import RatingSettings, { BasicSettings } from './Rating.settings';
import { FaRegStar } from 'react-icons/fa';

export default {
  craft: {
    displayName: 'Rating',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(RatingSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'Rating',
    exposed: true,
    icon: FaRegStar,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['number'],
    },
  },
  defaultProps: {
    icon: 'fa-star',
    direction: 'ltr',
    fullColor: 'rgb(255, 215, 0)',
    emptyColor: 'rgb(243, 243, 243)',
  },
} as T4DComponentConfig<IRatingProps>;

export interface IRatingProps extends webforms.ComponentProps {
  start?: number;
  stop?: number;
  step?: number;
  readOnly?: boolean;
  halfFillMode?: boolean;
  style?: React.CSSProperties;
  icon?: string;
  direction?: string;
  fullColor?: string;
  emptyColor?: string;
}
