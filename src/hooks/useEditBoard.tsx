import { Cloudinary } from '@cloudinary/url-gen'
import {
  brightness,
  fillLight,
  hue,
  improve,
  saturation,
  tint
} from '@cloudinary/url-gen/actions/adjust'
import { format, quality } from '@cloudinary/url-gen/actions/delivery'
import { blur, grayscale } from '@cloudinary/url-gen/actions/effect'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'
import { auto } from '@cloudinary/url-gen/qualifiers/quality'
import { useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { API_KEY, CLOUD_NAME, UPLOAD_PRESET, UPLOAD_URL } from '../config'
import { useEdit } from './useEdit'

export const useEditBoard = () => {
  const { state, dispatch } = useEdit()
  const [publicId, setPublicId] = useState('')
  const [newImage, setNewImage] = useState<null | string>(null)

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'compape'
    }
  })

  const focusedStyle = {
    transition: 'border .24s ease-in-out',
    borderWidth: 2,
    borderRadius: 2,
    borderStyle: 'dashed',
    borderColor: '#2196f3'
  }

  const acceptStyle = {
    transition: 'border .24s ease-in-out',
    borderWidth: 2,
    borderRadius: 2,
    borderStyle: 'dashed',
    borderColor: '#00e676'
  }

  const rejectStyle = {
    transition: 'border .24s ease-in-out',
    borderWidth: 2,
    borderRadius: 2,
    borderStyle: 'dashed',
    borderColor: '#ff1744'
  }

  const iconColor = () => {
    if (isDragAccept) return 'text-green-400'
    if (isDragReject) return 'text-red-400'
  }

  const onDrop = (files: any) => {
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
        const height = image.height
        const width = image.width
        setPublicId(image.public_id)
        dispatch({
          type: 'EDIT',
          height,
          width
        })
      })
  }

  const { getInputProps, getRootProps, isDragAccept, isDragReject, isFocused } =
    useDropzone({
      accept: {
        'image/*': ['.png', '.jpg', '.webp', '.jpeg']
      },
      maxFiles: 1,
      onDrop
    })

  const style = useMemo(
    () => ({
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isFocused, isDragAccept, isDragReject]
  )

  useEffect(() => {
    const modifiedImage = cld.image(publicId)
    if (state.blur) {
      modifiedImage.effect(blur(Number(state.blur)))
    }

    if (state.quality) {
      modifiedImage.adjust(improve())
    }

    if (state.hue) {
      modifiedImage.adjust(hue(Number(state.hue ?? 0)))
    }

    if (state.brightness) {
      modifiedImage.adjust(brightness().level(state.brightness))
    }

    if (state.light) {
      modifiedImage.adjust(fillLight().blend(Number(state.light) || 0))
    }

    if (state.saturation) {
      modifiedImage.adjust(saturation().level(state.light || 1))
    }

    if (state.filter) {
      let filtered = `${state.opacity}:${state.filter}`
      if (state.secondary) {
        filtered += `:0p:${state.secondary}:100p`
      }

      modifiedImage
        .delivery(format(auto()))
        .delivery(quality(auto()))
        .effect(grayscale())
        .adjust(tint(filtered))
    }

    if (state.rounded) {
      modifiedImage.roundCorners(byRadius(Number(state.rounded)))
    }

    modifiedImage.resize(
      fill()
        .width(Number(state.w) || 450)
        .height(Number(state.h) || 450)
    )

    setNewImage(modifiedImage.toURL())
  }, [publicId, state])

  return {
    newImage,
    dispatch,
    iconColor,
    style,
    getInputProps,
    getRootProps
  }
}
