'use strict';




function HomePage(){
     const [tabledata,setTableData]=React.useState()
     const [loading,setLoading]=React.useState(false)

      const handleEdit=(id,field,value)=>{
          console.log(id,field,value)
        //   let newData=[...tabledata]
        //  newData[id][field]=value
         ChangeData(id,field,value)
        //   setTableData(newData)
      }




     React.useEffect(()=>{
        setLoading(true)
        FetchData()
        .then(res=>{
            setTableData(res)
            setLoading(false)
        })
        .catch(err=>console.log(err))
     },[])




     return (
         <div>
                
               <h1 className="home">Home Page</h1>
               <table>

                <caption>
                    <h3>You can edit here</h3>

                    {loading ? <h1>Data Loading...</h1> : ""} 
                </caption>
             <thead>
               <tr>
                    <th>Sr. no.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead> 
            <tbody>
                    {tabledata && tabledata.map((item,index)=> 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td contentEditable="true"  onBlur={(e)=>handleEdit(item.id,"name",e.target.innerText)} >{item.name}</td>
                            <td contentEditable="true"  onBlur={(e)=>handleEdit(item.id,"age",e.target.innerText)}>{item.age}</td>
                            <td contentEditable="true"  onBlur={(e)=>handleEdit(item.id,"email",e.target.innerText)}>{item.email}</td>
                       </tr>
                    
                    )}
                
                </tbody>    
          </table>
         </div>
     )
}





async function FetchData(){
    
    try {
        let res=await fetch("https://jsonserver1-fd0s.onrender.com/users")
        let data=await res.json()
        console.log(data)
        return data
    } catch (error) {
       console.assert(error)
    }
}



const ChangeData=async (id,field,value)=>{
    console.log(id,field,value)
     
    return await fetch(`https://jsonserver1-fd0s.onrender.com/users/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(field=="name" ? {name:value} : field=="age" ? {age:value} : {email:value})
    })
    .then(res=> console.log(res))
}
