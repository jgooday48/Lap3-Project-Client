import React, { useState, useEffect, createContext, useContext } from 'react';

const FolderDataContext = createContext();


const FolderDataProvider = ({ children }) => {
  const [folderData, setFolderData] = useState([]);
  // const userId = "6581c22f67184ef3425c6b08";
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const userId = userInfo._id;

  console.log("userId: ", userId)


  useEffect(() => {
    const getAllFoldersByUser = async () => {
      const api = `https://reddy-server-33.onrender.com/folders/user/${userId}`;
      const response = await fetch(api);
      const data = await response.json();
      setFolderData(data);
    };

    getAllFoldersByUser();
  }, []);

  return (
    <FolderDataContext.Provider value={{ folderData, setFolderData, userId }}>
      {children}
    </FolderDataContext.Provider>
  );
};

// Custom hook to use the context
const useFolderData = () => {
  return useContext(FolderDataContext);
};


export { FolderDataProvider, useFolderData };
