import React, { useState, useEffect, createContext, useContext } from 'react';

const FolderDataContext = createContext();


const FolderDataProvider = ({ children }) => {
  const [folderData, setFolderData] = useState([]);
    const userId = "6581c22f67184ef3425c6b08";


  useEffect(() => {
    const getAllFoldersByUser = async () => {
      const api = `http://localhost:3000/folders/user/${userId}`;
      const response = await fetch(api);
      const data = await response.json();
      setFolderData(data);
    };

    getAllFoldersByUser();
  }, []);

  return (
    <FolderDataContext.Provider value={{ folderData, setFolderData }}>
      {children}
    </FolderDataContext.Provider>
  );
};

// Custom hook to use the context
const useFolderData = () => {
  return useContext(FolderDataContext);
};


export { FolderDataProvider, useFolderData };