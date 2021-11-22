import { detailsProps } from '../../types';
import { useIsActive } from './UseIsActive';

export default function MenuDetails({children, id}: detailsProps) {
  const [isActive] = useIsActive(id);

  return (
  <>
    { isActive && children}
  </>
  )
}