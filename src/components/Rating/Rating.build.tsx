import cn from "classnames";
import { IRatingProps } from "./Rating.config";
import { useEnhancedNode } from "@ws-ui/webform-editor";
import { FC } from "react";

const Rating: FC<IRatingProps> = ({
  icon,
  style,
  className,
  step = 5,
  classNames = [],
  fullColor = "rgb(255, 215, 0)",
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();
  return (
    <div ref={connect} style={style}>
      {[...Array(step)].map((_star, index) => {
        return (
          <span
            key={index}
            style={{ color: fullColor }}
            className={cn(
              "fa fd-component",
              "fd-icon",
              icon,
              classNames,
              className
            )}
          ></span>
        );
      })}
    </div>
  );
};

export default Rating;
