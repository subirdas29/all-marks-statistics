import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box,
    Flex,
  } from '@chakra-ui/react'

const AllProjectsFeedBack = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Flex align="center" justify="center"><Button onClick={onOpen} mb='40px'>Projects FeedBacks</Button></Flex>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign='center'>All FeedBacks</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                " Project 1: Ui is good. Add 6 more sections <br/>
Project 2: Change the navbar and banner color combination. And add 4 more sections<br/>
Project 3: Work on the Ui. And add a footer and add 6 more sections. " --- (Mehidi)</Text>
<br/>
<Text>
                " Project 1: Ui is good. Add 6 more sections <br/>
Project 2: Change the navbar and banner color combination. And add 4 more sections<br/>
Project 3: Work on the Ui. And add a footer and add 6 more sections. " --- (Subir)</Text>
<br/>
<Text>
                " Project 1: Ui is good. Add 6 more sections <br/>
Project 2: Change the navbar and banner color combination. And add 4 more sections<br/>
Project 3: Work on the Ui. And add a footer and add 6 more sections. " --- (Masud)</Text>
<br/>
<Text>
                " Project 1: Ui is good. Add 6 more sections <br/>
Project 2: Change the navbar and banner color combination. And add 4 more sections<br/>
Project 3: Work on the Ui. And add a footer and add 6 more sections. " --- (MinhajMia)</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
};

export default AllProjectsFeedBack;