import { Box, Button, Card, CardBody, FormControl, FormLabel, Heading,Icon, Input, Spinner, Text, Textarea } from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DeleteNote, GetNoteData, PostNote } from "./Store/store.action"
import { ShowAllNotes } from "./ShowAllNots"


export const HomePage=()=>{
    // Create a state for handle the input field  
    const [text,setText]=useState({title:"",note:""})
   const {NotesData,loading,error,dataSuccess}=useSelector(store=>store.list)
   const dispatch=useDispatch()
   
     
// onload the page the data is fetch here --------------------------------------
     useEffect(()=>{
          dispatch(GetNoteData())
     },[dataSuccess])


    //  handle input field here--------------------------
      const handleChange=(e)=>{
          const {name,value}=e.target
          
          setText({
            ...text,
            [name]:value
          })

      }

    //   on click on the submit button data post the api -------------------
      const handleSubmit=()=>{

            dispatch(PostNote(text))
            setText({title:"",note:""})   
      }



    //   handle Delete function here ------------------------------------------------
     const handleDelete=(id)=>{
        dispatch(DeleteNote(id)) 
     }

 console.log(NotesData,dataSuccess)

    return(
        <>
        {/* Navbar  ------------------------------------------------------------- */}
             <Card bgColor="black" textAlign="left">
                <CardBody>

                    <Box display="flex" w="130px" alignItems="center" justifyContent="space-around">
                     <Icon h={6} w={6} color="white" as={HamburgerIcon}/>
                     <Heading size="lg" color="white">Notes</Heading>
                    </Box>
               </CardBody>
             </Card>

             {/* Take the note field -------------- */}
             
             {/* The title and note field input handle here ---------------------------------------------------------- */}
             <FormControl borderRadius="7px"  color="black" w="50%" m="auto" mt="30px"  bg="rgb(198, 171, 141)">
                <Input onChange={handleChange} value={text.title} name="title" placeholder='enter Title' />
             </FormControl>
             <Textarea onChange={handleChange} value={text.note} name="note"  color="black" w="50%" m="auto"   bg="rgb(198, 171, 141)" placeholder='Take a note...' />
             <Button onClick={handleSubmit} isDisabled={loading} m="auto" mt="20px" display="block" bg="rgb(198, 171, 141)" >Submit</Button>
           
           {/* if data is loading or data is deleted the show loading ------------------------------------------------ */}
              {loading ? <Spinner mt="10px" thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/> : ""}

              {/* Show all the data function call here ------------------------------------------------------------------------- */}
             {NotesData && <ShowAllNotes handleDelete={handleDelete} props={NotesData}/>}

        </>
    )
}