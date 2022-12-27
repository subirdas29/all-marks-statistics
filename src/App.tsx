import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Statistics from "./Components/Statistics"
import Home from "./Components/Home/Home"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home></Home>
  </ChakraProvider>
)
