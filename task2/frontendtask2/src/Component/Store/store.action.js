import { errorhandle, Loading, NotesData, successNote } from "./store.types"
import axios from "axios"



// fetch all the data from the API ------------------------------------------------------------
export const GetNoteData=()=>async(dispatch)=>{
      dispatch({
        type:Loading
      })
    try {
        let res=await axios.get("https://angry-rose-cocoon.cyclic.app/notes")
        // console.log(res)
        dispatch({
            type:NotesData,
            payload:res.data.data
        })
    } catch (error) {
        dispatch({
            type:errorhandle
        })
    }
}



// Delete the data from the api------------------------------------------------------------
export const DeleteNote=(id)=>async(dispatch)=>{
    dispatch({
      type:Loading
    })
  try {
      let res=await axios.delete(`https://angry-rose-cocoon.cyclic.app/notes/${id}`)
      console.log(res)
      dispatch({
        type:successNote,
       
    })
       
  } catch (error) {
      dispatch({
          type:errorhandle
      })
  }
}


// Post the data from the api------------------------------------------------------------
export const PostNote=(creds)=>async(dispatch)=>{
    dispatch({
      type:Loading
    })
  try {
      let res=await axios.post(`https://angry-rose-cocoon.cyclic.app/notes`,creds)
      
      dispatch({
        type:successNote,
       
    })
       
  } catch (error) {
      dispatch({
          type:errorhandle
      })
  }
}
