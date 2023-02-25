import { useEdit } from '../../hooks/useEdit'

interface EditBoardProps {
  image: string | null
}

export const EditBoard = ({ image }: EditBoardProps) => {
  const { handleChangeSize } = useEdit()

  return (
    <div className='w-full min-h-screen bg-gray-300'>
      <div className='w-full p-4 flex gap-4'>
        <div className='flex justify-center items-center gap-x-2'>
          <label htmlFor='w'>W</label>
          <input type='number' name='w' onChange={(e) => handleChangeSize(e)} />
        </div>
        <div className='flex justify-center items-center gap-x-2'>
          <label htmlFor='h'>H</label>
          <input name='h' type='number' onChange={(e) => handleChangeSize(e)} />
        </div>
      </div>
      <div className='min-h-full w-full flex justify-center items-center'>
        <img src={image!} alt='image' />
      </div>
    </div>
  )
}
