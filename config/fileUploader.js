import { useState, useContext } from "react"
import FirebaseContext from "/firebase/context"

export default function ImgUploader() {
  const [imgName, setImgName] = useState("")
  const [uploadingImg, setUploadingImg] = useState(false)
  const [uploadingProgress, setUploadingProgress] = useState(0)
  const [imgUrl, setImgUrl] = useState("")

  const { firebase } = useContext(FirebaseContext)

  const handleUploadStart = () => {
    setUploadingProgress(0)
    setUploadingImg(true)
  }

  const handleProgress = (progress) => {
    setUploadingProgress(progress)
  }

  const handleUploadError = (error) => {
    setUploadingImg(error)
    console.log(error)
  }

  const handleUploadSuccess = (name) => {
    setUploadingProgress(100)
    setUploadingImg(false)
    setImgName(name)
    firebase.storage
      .ref("products")
      .child(name)
      .getDownloadURL()
      .then((url) => {
        setImgUrl(url)
      })
  }

  return {
    imgUrl,
    handleUploadStart,
    handleProgress,
    handleUploadError,
    handleUploadSuccess,
  }
}
