import React, {useState, useEffect} from 'react'

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

        return keys.map((item) => {
          if (object[item] && -1 !== object[item].toLowerCase().search(filterText.toLowerCase())) {
            return 1
          }
        })
          .filter(item => !!item)
          .length
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