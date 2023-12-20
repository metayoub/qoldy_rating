import cn from "classnames";
import { FC, MouseEventHandler } from "react";

interface ISimpleRatingProps extends webforms.ComponentProps {
  onMouseEnterCallBack: (value: number) => void;
  onMouseLeaveCallBack: MouseEventHandler<HTMLSpanElement>;
  onClickCallback: (value: number) => void;
  hover: number | undefined;
  value: number;
  step?: number;
  stepper: number;
  icon?: string;
  direction?: string;
  fullColor?: string;
  emptyColor?: string;
}

const SimpleRating: FC<ISimpleRatingProps> = ({
  hover,
  className,
  value,
  step,
  stepper,
  onMouseLeaveCallBack,
  onMouseEnterCallBack,
  onClickCallback,
  icon,
  classNames = [],
  direction = "ltr",
  style,
  fullColor,
  emptyColor,
}) => {
  return (
    <div style={style} className={cn("inline-flex")} dir={direction}>
      {[...Array(step)].map((_star, index) => {
        const currentRating = index * stepper;
        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={value}
              onClick={() => onClickCallback(currentRating + stepper)}
            />
            <span
              style={{
                color:
                  (hover || value) >= index * stepper + 1
                    ? fullColor
                    : emptyColor,
              }}
              onMouseEnter={() => onMouseEnterCallBack(currentRating)}
              onMouseLeave={onMouseLeaveCallBack}
              className={cn(
                "fa fd-component",
                "fd-icon",
                "rating",
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

export default SimpleRating;
