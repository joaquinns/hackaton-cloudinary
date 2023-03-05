import { Backgroundsvg } from './components/Backgroundsvg'
import { EditBoard } from './components/EditBoard'
import { Layout } from './components/Layout'
import { UploadIcon } from './components/UploadIcon'
import { useEditBoard } from './hooks/useEditBoard'

function App() {
  const { newImage, getInputProps, getRootProps, style, iconColor } =
    useEditBoard()

  return (
    <Layout>
      <div className='container mx-auto px-4 py-8 lg:px-0 min-h-screen z-50'>
        <div className='flex justify-center items-center min-h-screen'>
          <div className='flex flex-1 min-h-screen justify-center items-center'>
            {newImage ? (
              <>
                <EditBoard image={newImage} />
              </>
            ) : (
              <div className='flex flex-col lg:flex-row gap-4 items-center justify-center w-full h-full lg:w-1/2'>
                <div className='flex flex-col justify-center items-center w-full'>
                  <h2 className='text-5xl text-center text-gray-700 font-semibold my-8 p-2 bg-[#f5deb3] rounded'>
                    Edit your images!
                  </h2>
                  <img
                    src='https://res.cloudinary.com/compape/image/upload/e_blur/e_brightness:0/e_fill_light:0/e_saturation:0/c_fill,h_250,w_250/qsnek4fuddgebtenhqk2?_a=ATCqVAA0'
                    className='w-[200px] h-[200px]'
                    alt='image'
                  />
                </div>
                <Backgroundsvg />
                <label
                  {...getRootProps({
                    style
                  })}
                  htmlFor='dropzone-file'
                  className='flex flex-col items-center justify-center w-full h-64 p-4 rounded-lg cursor-pointer border border-1 border-gray-300 700 hover:bg-gray-200 shadow-md'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <UploadIcon classColor={iconColor()} />
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-bold'>
                        Click to upload an image
                      </span>{' '}
                      or drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      PNG, JPG, WEBP or JPEG.
                    </p>
                  </div>
                  <input
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    id='dropzone-file'
                    type='file'
                    className='hidden'
                    {...getInputProps}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
