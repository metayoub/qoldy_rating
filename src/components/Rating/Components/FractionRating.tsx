import cn from "classnames";
import { FC, CSSProperties, MouseEvent } from "react";

interface IFractionRatingProps extends webforms.ComponentProps {
  value: number;
  onClickCallback: (value: number) => void;
  onMouseEvent: (value: number | undefined) => void;
  step?: number;
  hover: number | undefined;
  stepper: number;
  icon?: string;
  min?: number;
  max?: number;
  readOnly?: boolean;
  direction?: string;
  fullColor?: string;
  emptyColor?: string;
}

const FractionRating: FC<IFractionRatingProps> = ({
  className,
  onClickCallback,
  onMouseEvent,
  max = 5,
  readOnly,
  step,
  value,
  hover,
  stepper,
  classNames = [],
  icon,
  direction = "ltr",
  style,
  fullColor,
  emptyColor,
}) => {
  const calculateDisplayValue = (index: number, event: MouseEvent) => {
    const percentage = calculateHoverPercentage(event);
    const fraction = Math.ceil((percentage % 1) * stepper) / stepper;

    const precision = 10 ** 3;
    const displayValue =
      (index +
        (Math.floor(percentage) +
          Math.floor(fraction * precision) / precision)) *
      stepper;
    return displayValue > 0
      ? displayValue > max
        ? max
        : displayValue
      : 1 / stepper;
  };

  const calculateHoverPercentage = (event: MouseEvent) => {
    /*const clientX =
      event.nativeEvent.type.indexOf("touch") > -1
        ? event.nativeEvent.type.indexOf("touchend") > -1
          ? event.changedTouches[0].clientX
          : event.touches[0].clientX
        : event.clientX;*/
    const clientX = event.clientX;

    const targetRect = event.currentTarget.getBoundingClientRect();
    const delta =
      direction === "rtl"
        ? targetRect.right - clientX
        : clientX - targetRect.left;

    // Returning 0 if the delta is negative solves the flickering issue
    return delta < 0 ? 0 : delta / targetRect.width;
  };

  const ratingParentStyle: CSSProperties = {
    cursor: readOnly ? "default" : "pointer",
    display: "flex",
    position: "relative",
  };
  return (
    <div style={style} className={cn("inline-flex")} dir={direction}>
      {[...Array(step)].map((_star, index) => {
        return (
          <label
            key={index}
            style={ratingParentStyle}
            onClick={(event) => {
              const result = calculateDisplayValue(index, event);
              onClickCallback(result);
            }}
            onMouseMove={(event) => {
              const result = calculateDisplayValue(index, event);
              onMouseEvent(result);
            }}
            onMouseLeave={() => {
              onMouseEvent(undefined);
            }}
            /*onTouchMove={(event) => {
              const result = calculateDisplayValue(index, event);
              onMouseEvent(result);
            }}
            onTouchEnd={() => {
              onMouseEvent(undefined);
              // const result = calculateDisplayValue(index, event);
              // onClickCallback(result);
            }}*/
          >
            <span
              style={{ color: emptyColor }}
              className={cn(
                "fa fd-component",
                "fd-icon",
                {
                  invisible: (hover || value) >= (index + 1) * stepper,
                },
                icon,
                classNames,
                className
              )}
            ></span>
            <span
              style={{
                color: fullColor,
                width:
                  (hover || value) >= (index + 1) * stepper
                    ? "100%"
                    : (index + 1) * stepper - (hover || value) < stepper
                    ? readOnly
                      ? `${((value / stepper) % 1) * 100}%`
                      : "50%"
                    : "0%",
              }}
              className={cn(
                "fa fd-component",
                "fd-icon",
                "rating",
                "overflow-hidden",
                "absolute",
                icon,
                classNames,
                className
              )}
            ></span>
          </label>
        );
      })}
    </div>
  );
};

export default FractionRating;
