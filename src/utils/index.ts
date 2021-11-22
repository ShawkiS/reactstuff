import { BulletPointNode } from "../types";


export const removeById=(arr: BulletPointNode [], id: number)=>{
    arr?.forEach((i, index)=>{
        if(i.id==id){
            arr.splice(index, 1);
        } else {
            removeById(i.children|| [], id)
        }
    })
    return arr[0];
}

export const addById=(arr: BulletPointNode [], id: number, children: BulletPointNode[])=>{
    arr?.forEach(i=>{
        if(i.id==id){
           i.children = [...(i.children || []), ...children];
        } else {
            addById(i.children|| [], id, children)
        }
    })
    return arr[0];
}