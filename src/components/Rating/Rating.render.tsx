import { useRenderer, useSources } from '@ws-ui/webform-editor';
import { FC, useEffect, useState } from 'react';
import { IRatingProps } from './Rating.config';
import SimpleRating from './Components/SimpleRating';
import FractionRating from './Components/FractionRating';

const Rating: FC<IRatingProps> = ({
  icon,
  direction,
  style,
  className,
  classNames = [],
  start,
  stop,
  step = 5,
  readOnly,
  halfFillMode,
  fullColor = 'rgb(255, 215, 0)',
  emptyColor = 'rgb(243, 243, 243)',
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState(() => 0);
  const [hover, setHover] = useState<number | undefined>(() => undefined);

  const stepper = ((start || 0) + (stop || 5)) / (step || 1);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<number>();
      setValue(v || 0);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect}>
      {!halfFillMode ? (
        <SimpleRating
          fullColor={fullColor}
          emptyColor={emptyColor}
          style={style}
          onMouseEnterCallBack={(value: number) => {
            !readOnly && setHover(value + 1);
          }}
          onMouseLeaveCallBack={() => !readOnly && setHover(undefined)}
          onClickCallback={(value: number) => {
            !readOnly && ds.setValue<number>(null, value);
          }}
          hover={hover}
          value={value}
          step={step}
          stepper={stepper}
          classNames={classNames}
          className={className}
          icon={icon}
          direction={direction}
        />
      ) : (
        <FractionRating
          fullColor={fullColor}
          emptyColor={emptyColor}
          style={style}
          onClickCallback={(value: number) => {
            !readOnly && ds.setValue<number>(null, value);
          }}
          onMouseEvent={(value: number | undefined) => {
            !readOnly && setHover(value);
          }}
          readOnly={readOnly}
          hover={hover}
          value={value}
          step={step}
          stepper={stepper}
          classNames={classNames}
          className={className}
          icon={icon}
          min={start}
          max={stop}
          direction={direction}
        />
      )}
    </div>
  );
};

export default Rating;
