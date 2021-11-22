import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeInputId, removeById } from "../../redux/actions";
import { BulletPointNode } from "../../types";

export default function BulletPointViewer(props: { rootNode: BulletPointNode | undefined }) {
  const dispatch = useDispatch();

  const changeId = (id: number): void => {
    dispatch(changeInputId(id));
  }

  const remove = (id: number): void => {
    dispatch(removeById(id));
  }
  
  return (
    <> 
  {props.rootNode && <ul>
    {props.rootNode.children?.map(c => (
     <li>
        <p style={{color: c.color}}>{c.text} 
        <button onClick={() => changeId(c.id)}>+</button>
        <button onClick={() => remove(c.id)}>-</button>
        </p>
          {c.children && <BulletPointViewer rootNode={c} />}
      </li>
        )
    )}
    </ul>}
    </>
  )
}
