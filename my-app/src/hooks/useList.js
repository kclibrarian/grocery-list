import { useState } from "react";

function useList(init){
    const [list, setList] = useState(init);

    return {
        list,
        removeItem(item){
            const filteredList = list.filter(v => v.name !== item);
            setList(filteredList);
        },
        saveItem(item, newVal){
            const copyList = [...list];
            copyList[indexedDB].name = newVal;
        }
    }
}

export default useList;