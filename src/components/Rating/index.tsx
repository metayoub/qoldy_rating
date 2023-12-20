import config, { IRatingProps } from './Rating.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './Rating.build';
import Render from './Rating.render';

const Rating: T4DComponent<IRatingProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

Rating.craft = config.craft;
Rating.info = config.info;
Rating.defaultProps = config.defaultProps;

export default Rating;
