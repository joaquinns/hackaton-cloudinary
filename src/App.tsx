import { useDropzone } from 'react-dropzone'
import { EditBoard } from './components/EditBoard'
import { Layout } from './components/Layout'
import { UploadIcon } from './components/UploadIcon'
import { useEditBoard } from './hooks/useEditBoard'

function App() {
  const { newImage, onDrop } = useEditBoard()
  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    maxFiles: 1
  })

  return (
    <Layout>
      <div className='container mx-auto px-4 lg:px-0 min-h-screen'>
        <h2 className='text-6xl text-center text-slate-900'>compa</h2>

        <div className='flex justify-center items-center min-h-screen'>
          <div className='flex flex-1 min-h-screen justify-center'>
            {newImage ? (
              <>
                <EditBoard image={newImage} />
              </>
            ) : (
              <div
                className='flex items-center justify-center w-full lg:w-1/2'
                {...getRootProps()}
              >
                <label
                  htmlFor='dropzone-file'
                  className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <UploadIcon />
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
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
