import { Cloudinary } from '@cloudinary/url-gen'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { useEffect, useState } from 'react'
import { API_KEY, CLOUD_NAME, UPLOAD_PRESET, UPLOAD_URL } from '../config'
import { useEdit } from './useEdit'

export const useEditBoard = () => {
  const { state } = useEdit()
  const [publicId, setPublicId] = useState('')
  const [newImage, setNewImage] = useState<null | string>(null)

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'compape'
    }
  })

  const onDrop = (files: any) => {
    console.log(files, 'files')
    const [file] = files
    console.log(file)
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', UPLOAD_PRESET)
    data.append('cloud_name', CLOUD_NAME)
    data.append('timestamp', (Date.now() / 1000).toString())
    data.append('api_key', API_KEY)
    fetch(UPLOAD_URL, {
      method: 'post',
      body: data
    })
      .then((data) => data.json())
      .then((image) => {
        console.log(image)
        setPublicId(image.public_id)
      })
  }

  useEffect(() => {
    const modifiedImage = cld.image(publicId).resize(
      fill()
        .width(Number(state.w) || 200)
        .height(Number(state.h) || 200)
    )

    setNewImage(modifiedImage.toURL())
  }, [publicId, state])

  return { newImage, onDrop }
}
