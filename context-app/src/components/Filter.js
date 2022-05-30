import React, {useState, useEffect} from 'react'

/*
This component is written with certain constraints in mind. 
The "unfilteredList" should take the form of an array of objects.
These objects should take the form of key-value pairs, where the values 
consist of textual content that can be used as the basis for filtering. 
The "onChange" call-back method should be called whenever the filter
is updated, resulting in the creation of a new filtered array of objects.
*/

export default function Filter({
  label,
  unfilteredList,
  onChange
}) {

 const [filterText, setFilterText] = useState("")

  useEffect(() => {
    if (!filterText) {
      onChange(unfilteredList)
    } else {
      const testFilteredList = unfilteredList.filter((object) => {
        const keys = Object.keys(object) || []

        return keys.reduce((acc, item) => {

          if (object[item] 
            && typeof object[item] === "string"
            && -1 !== object[item].toLowerCase().search(filterText.toLowerCase())) 
          {
            return 1
            
          } else {
            return acc
          }
        }, 0)
      })

      onChange(testFilteredList)
    }
  }, [filterText])

  return (
    <>
      <span>{`${label}: `}</span>
      <input
        value={filterText}
        onChange={(element) => setFilterText(element.target.value)}
      />
    </>
  )
}