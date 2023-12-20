import { FC } from "react";
import cn from "classnames";

interface IStarProps extends webforms.ComponentProps {
  starRatedColor?: string;
  starEmptyColor?: string;
  isFraction?: boolean;
  isActive?: boolean;
  fillId: string;
}

const Star: FC<IStarProps> = ({
  starRatedColor,
  starEmptyColor,
  fillId,
  isFraction,
  isActive = false,
  classNames = [],
  className,
}) => {
  const fill = isFraction
    ? `url(#${fillId})`
    : isActive
    ? starRatedColor
    : starEmptyColor;

  return (
    <div className={cn(classNames, className)}>
      <svg
        viewBox="0 0 51 48"
        className=""
        style={{
          width: "32px",
          height: "32px",
          transition: "transform .2s ease-in-out",
        }}
      >
        <path
          className="star"
          style={{
            fill: fill,
            transition: "fill .2s ease-in-out",
          }}
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
        />
      </svg>
    </div>
  );
};

export default Star;
