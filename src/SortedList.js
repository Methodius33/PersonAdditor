import { useMemo } from "react"

const SortedList = ({List, sortRule, list, ...otherProps})=>{
    const sortedList = useMemo(()=>{
        if (sortRule === null){
            return list
        }
        return [...list].sort((a,b)=>{
            if (a[sortRule]>b[sortRule]) return 1
            if (a[sortRule]<b[sortRule]) return -1
            return 0
        })
    }, [list, sortRule])
    return(
        <List
            list = {sortedList}
            {...otherProps}
        />
    )
}
export default SortedList