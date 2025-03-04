import { FC } from 'react';
import classNames from 'classnames';

export interface IconProps {
  iconId: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: FC<IconProps> = ({ iconId, className, style }) => (
  <svg
    className={classNames('icon', className)}
    style={style}
    aria-hidden='true'
  >
    <use xlinkHref={`#icon-${iconId}`} />
  </svg>
);
