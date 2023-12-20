import React from 'react'
import { useFolderData } from '../../context/FolderDataContext'
import { FolderSideBar } from '../../components'

const FolderPage = () => {
    const { folderData } = useFolderData()
    
  return (
<FolderSideBar data={folderData} />
  )
}

export default FolderPage