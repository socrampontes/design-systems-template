import { ChakraProvider , Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import  {Card}  from "./components/card";
import { wrap } from "framer-motion";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };
  

  return (
    <>
      <ChakraProvider >
        <Flex wrap={'wrap'} gap={6} justify={"center"}>
        {users.map((users,id)=>{
          return(

            <Card key={id} users={users.name}/>
          )
        })}
        </Flex >
      </ChakraProvider>
    </>
  );
}
