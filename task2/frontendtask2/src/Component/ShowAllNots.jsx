import { Card, CardBody, CardFooter, CardHeader,Icon, Heading, SimpleGrid, Text, Button } from "@chakra-ui/react"
import {DeleteIcon} from "@chakra-ui/icons"
import { useDispatch } from "react-redux"
import { DeleteNote } from "./Store/store.action"


export const ShowAllNotes=({props,handleDelete})=>{

    return(
        <>

{/* SHow all card in Grid Format  ------------------------------ */}
<SimpleGrid  columns={[1, 3, 4]} spacing='40px'  w="95%" m="auto" >

{/* Map through all the props and return the div----------------------------------------- */}
     {props && props.map((el)=>{ 

        // Convert timeStamp to string --------------------------------------------------------------------
        let date=el.createdAt;
        let resDate=new Date(date).toLocaleString()
        // console.log(resDate)
        return(
            
             
         <Card textAlign="left" mt="50px" key={el._id} color="black" bg="rgb(198, 171, 141)">
            <CardHeader>
                <Heading size='md'>{el.title}</Heading>
            </CardHeader>

            <CardBody>
                  <Text  fontSize='md'>{el.note}</Text>
                 
                  <Text mt="30px">{resDate}</Text>
            </CardBody>

            <CardFooter >
                
                {/* Onclick a callback function is exicuted with  el.id  ----------------------------------------------------- */}
                <Button onClick={()=>handleDelete(el._id)} bgColor="rgb(198, 171, 141)"><Icon w={6} h={6} ml="7%" as={DeleteIcon}/></Button>
                 
            </CardFooter>
         </Card>
     
     )}
     
     )}
        
</SimpleGrid> 
        </>
    )
}