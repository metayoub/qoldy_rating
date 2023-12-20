import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';

const commonSettings: TSetting[] = [
  {
    key: 'general',
    label: 'General',
    type: ESetting.GROUP,
    isSubgroup: true,
    components: [
      {
        key: 'icon',
        label: 'Icon',
        type: ESetting.ICON_PICKER,
        defaultValue: 'fa-star',
      },
      {
        key: 'readOnly',
        label: 'Read Only',
        type: ESetting.CHECKBOX,
      },
      {
        key: 'emptyColor',
        label: 'Empty Color',
        type: ESetting.COLOR_PICKER,
      },
      {
        key: 'fullColor',
        label: 'Full Color',
        type: ESetting.COLOR_PICKER,
      },
    ],
  },
  {
    key: 'values',
    label: 'Values',
    type: ESetting.GROUP,
    isSubgroup: true,
    components: [
      {
        key: 'start',
        label: 'Start',
        type: ESetting.NUMBER_FIELD,
        defaultValue: 0,
      },
      {
        key: 'stop',
        label: 'Stop',
        type: ESetting.NUMBER_FIELD,
        defaultValue: 5,
      },
      {
        key: 'step',
        label: 'Step',
        type: ESetting.NUMBER_FIELD,
        defaultValue: 5,
        min: 1,
        max: 10,
      },
    ],
  },
  {
    key: 'advanced',
    label: 'Advanced',
    type: ESetting.GROUP,
    isSubgroup: true,
    components: [
      {
        label: 'Direction',
        type: ESetting.RADIOGROUP,
        defaultValue: 'ltr',
        key: 'direction',
        multiple: false,
        options: [
          {
            value: 'rtl',
            tooltip: 'Righ to Left',
            icon: FaLongArrowAltLeft,
          },
          {
            value: 'ltr',
            tooltip: 'Left to Right',
            icon: FaLongArrowAltRight,
          },
        ],
      },
      {
        key: 'halfFillMode',
        label: 'Half Fill Mode',
        type: ESetting.CHECKBOX,
      },
    ],
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...load(DEFAULT_SETTINGS).filter('borderRadius', 'borders', 'background', 'dimensions', 'color'),
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('borderRadius', 'borders'),
];

export default Settings;
