import React, { useState } from 'react'

const Select = () => {
    const [select, setSelect] = useState("")

    const handleSelect = (e)=>{
       const getvalue = e.target.value
       setSelect(getvalue)
    }
  return (
    <div>
        <select name="select" onChange={handleSelect}>
            <option value="">Choose Country</option>
            <option value="1">Argentina</option>
            <option value="2">Franch</option>
            <option value="3">Bangladesh</option>
            <option value="4">India</option>
            <option value="5">Finland</option>
            <option value="6">Canada</option>
            <option value="7">America</option>
        </select>

   { select==="1" && <h1>Argentina</h1>}
   { select==="2" && <h1>Franch</h1>}
   { select==="3" && <h1>Bangladesh</h1>}
   { select==="4" && <h1>India</h1>}
   { select==="5" && <h1>Finland</h1>}
   { select==="6" && <h1>Canada</h1>}
   { select==="7" && <h1>America</h1>}

    </div>
  )
}

export default Select