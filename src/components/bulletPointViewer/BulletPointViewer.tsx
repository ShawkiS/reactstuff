import { BulletPointNode } from "../types";

export default function BulletPointViewer(props: { rootNode: BulletPointNode }) {
  return (
    <ul>
    {props.rootNode.children.map(c => (
     <li>
       <p style={{color: c.color}}>{c.text}</p>
          {c.children.length > 0 && <BulletPointViewer rootNode={c} />}
      </li>
        )
    )}
    </ul>
  )
}
