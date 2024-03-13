import React, { useState } from 'react';
import { Box, Heading, Text, VStack, IconButton } from '@chakra-ui/react';
import { MdCloudUpload } from 'react-icons/md';

const FileUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Display the selected image
      setSelectedFile(file);
      onFileSelect(file); // Pass the selected file object to the parent component
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      // Display the dropped image
      setSelectedFile(file);
      onFileSelect(file); // Pass the selected file object to the parent component
    }
  };

  return (
    <VStack spacing={4} align="center">
 
      <Box
        w="90%"
        h="300px"
        border="2px"
        borderColor="gray.300"
        borderRadius="md"
        position="relative"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        p={'20px'}
      >
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <VStack>
            <Text>Drag & Drop or Click to Upload</Text>
            <IconButton
              icon={<MdCloudUpload />}
              width={"150px"}
              h={"150px"}
              aria-label="Upload File"
              onClick={() => document.getElementById('fileInput').click()}
            />
          </VStack>
        )}
      </Box>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </VStack>
  );
};

export default FileUpload;
