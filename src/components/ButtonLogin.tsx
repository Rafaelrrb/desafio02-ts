import { Button } from "@chakra-ui/react"

interface IButtonLogin{
  login: ()=>void
}

export function ButtonLogin({login}: IButtonLogin){
  return(
  <Button
    onClick={login}
    colorScheme="teal"
    size="sm"
    width="100%"
    marginTop="5px"
  >
    Button
  </Button>
  )
}