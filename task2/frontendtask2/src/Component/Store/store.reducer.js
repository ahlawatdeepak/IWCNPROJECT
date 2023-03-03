import { errorhandle, Loading, NotesData, successNote } from "./store.types"


const initalState={
    NotesData:[],
    loading:false,
    error:false,
    dataSuccess:false
}



export const Reducer=(state=initalState,{type,payload})=>{
     
    switch (type) {
          
        case Loading:{
            return{
                ...state,
                loading:true,
            }
        }

        case errorhandle:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }

        case NotesData:{
            return{
                ...state,
                loading:false,
                error:false,
                NotesData:payload
            }
        }
      case successNote :{
        return{
            ...state,
            dataSuccess:!state.dataSuccess
        }
      }
        default :{
            return state
        }
    }
}