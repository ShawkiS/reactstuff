import { useEffect } from 'react'
import { MenuItemProps } from '../../types';
import { useMenuItem } from './menuProvider'
import { useIsActive } from './UseIsActive';


export default function MenuItem({
  children,
  id,
}: MenuItemProps) {

  const [setActive, addItem] = useMenuItem();
  const [isActive, style] = useIsActive(id);

  useEffect(() => {
    addItem(id, children);
  }, [])

  return (
    <a style={style as any}
         onClick={() => setActive(id, children)}>
       { children }
    </a>
  )
}
