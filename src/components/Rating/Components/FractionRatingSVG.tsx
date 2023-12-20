import cn from "classnames";
import { FC } from "react";
import Star from "./Star";

interface IFractionRatingProps extends webforms.ComponentProps {
  value: number;
  onClickCallback: (value: number) => void;
  step?: number;
  stepper: number;
  icon?: string;
  min?: number;
  max?: number;
}

const FractionRating: FC<IFractionRatingProps> = ({
  className,
  onClickCallback,
  value,
  step,
  stepper,
  classNames = [],
  min,
  max,
}) => {
  const starRatedColor = "rgb(224, 51, 230)";
  const starEmptyColor = "rgb(66, 8, 68)";
  const fillId = `fillRandom${Math.random().toFixed(15).slice(2)}`;

  const fraction = () => {
    const offset = (value / stepper).toFixed(2).split(".")[1].slice(0, 2);
    return offset;
  };

  return (
    <label className="flex">
      <input
        type="range"
        id="volume"
        name="volume"
        min={min}
        max={max}
        step={stepper / 4}
        value={value}
        onChange={(_event) => onClickCallback(parseInt(_event.target?.value))}
      />
      <svg
        className="star-grad"
        style={{
          position: "absolute",
          zIndex: 0,
          width: "0",
          height: "0",
          visibility: "hidden",
        }}
      >
        <defs>
          <linearGradient id={fillId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              className="stop-color-first"
              style={{
                stopColor: starRatedColor,
                stopOpacity: 1,
              }}
            />
            <stop
              offset={`${fraction()}%`}
              className="stop-color-first"
              style={{
                stopColor: starRatedColor,
                stopOpacity: 1,
              }}
            />
            <stop
              offset={`${fraction()}%`}
              className="stop-color-final"
              style={{
                stopColor: starEmptyColor,
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              className="stop-color-final"
              style={{
                stopColor: starEmptyColor,
                stopOpacity: 1,
              }}
            />
          </linearGradient>
        </defs>
      </svg>
      {[...Array(step)].map((_star, index) => {
        const itr = (index + 1) * stepper;
        return value >= itr ? (
          <Star
            fillId={"fillId"}
            isActive
            starRatedColor={starRatedColor}
            starEmptyColor={starEmptyColor}
            key={index}
            className={cn(classNames, className)}
          />
        ) : itr - value < stepper ? (
          <Star
            fillId={fillId}
            key={index}
            isFraction={true}
            className={cn(classNames, className)}
          />
        ) : (
          <Star
            fillId={fillId}
            starRatedColor={starRatedColor}
            starEmptyColor={starEmptyColor}
            key={index}
            className={cn(classNames, className)}
          />
        );
      })}
    </label>
  );
};

export default FractionRating;
