import { useEdit } from '../../hooks/useEdit'
import { CustomFilter } from '../CustomFilter'
import { SliderInput } from '../SliderInput'

interface EditBoardProps {
  image: string | null
}

export const EditBoard = ({ image }: EditBoardProps) => {
  const { handleChangeSize, handleReset, state } = useEdit()

  return (
    <div className='w-full min-h-screen rounded shadow-md border border-1 border-gray-300'>
      <div className='flex w-full min-h-screen'>
        <div className='p-4 flex flex-col items-center justify-start gap-4 w-[250px]'>
          <div className='flex justify-center items-center gap-x-2'>
            <label htmlFor='w' className='font-bold'>
              w
            </label>
            <input
              className='w-20 p-2 rounded shadow border border-1 border-gray-50'
              type='number'
              name='w'
              min={1}
              onChange={(e) => handleChangeSize(e)}
            />
          </div>
          <div className='flex justify-center items-center gap-x-2'>
            <label htmlFor='h' className='font-bold'>
              h
            </label>
            <input
              className='w-20 p-2 rounded shadow border border-1 border-gray-50'
              name='h'
              type='number'
              min={1}
              onChange={(e) => handleChangeSize(e)}
            />
          </div>
          <div className='flex flex-col justify-center items-center gap-y-2'>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                name='quality'
                type='checkbox'
                checked={state.quality}
                className='sr-only peer'
                onChange={(e) => handleChangeSize(e)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className='ml-3 text-sm font-medium text-gray-900'>
                Auto fix quality
              </span>
            </label>
          </div>
          <SliderInput
            name='blur'
            onChange={handleChangeSize}
            min='0'
            max='999'
            value={state.blur}
          />
          <SliderInput
            name='rounded'
            onChange={handleChangeSize}
            min='0'
            max='100'
            value={state.rounded.toString()}
          />
          <SliderInput
            name='brightness'
            onChange={handleChangeSize}
            min='0'
            max='100'
            value={state.brightness}
          />
          <SliderInput
            name='light'
            onChange={handleChangeSize}
            min='0'
            max='100'
            value={state.light}
          />
          <SliderInput
            name='hue'
            onChange={handleChangeSize}
            min='0'
            max='100'
            value={state.hue.toString()}
          />
          <CustomFilter onChange={handleChangeSize} />
          <button
            onClick={handleReset}
            className='relative px-4 py-2 bg-red-500 hover:bg-red-600 ease-in-out duration-150 font-semibold rounded text-white'
          >
            Discard changes
          </button>
        </div>
        <div className='relative min-h-full w-full flex flex-1 justify-center items-center bg-slate-200'>
          <img
            src={image!}
            alt='image'
            className='overflow-hidden object-cover object-center'
          />
          <div className='py-3 px-8 absolute bottom-6 flex justify-center items-center gap-4'>
            <a
              href='/'
              className='py-3 px-8 bg-red-600 ease-in-out duration-150 hover:bg-red-500 rounded-full text-slate-100 text-xl font-bold text-center shadow-md'
            >
              Cancel
            </a>
            <a
              className='py-3 px-8 bg-blue-600 ease-in-out duration-150 hover:bg-blue-500 rounded-full text-slate-100 text-xl font-bold text-center shadow-md'
              href={image!}
              target='_blank'
              download
            >
              Donwload
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
