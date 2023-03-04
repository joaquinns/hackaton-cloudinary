import { useState } from 'react'
import { useEdit } from '../../hooks/useEdit'
import { SliderInput } from '../SliderInput'

interface CustomFilterProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomFilter = ({ onChange }: CustomFilterProps) => {
  const { state, handleChangeSize } = useEdit()
  const [customFilter, setCustomFilter] = useState(false)

  return (
    <div className='relative flex items-center justify-center'>
      <button
        className='relative px-4 py-2 bg-slate-900 rounded text-white'
        onClick={() => setCustomFilter(!customFilter)}
      >
        Custom filter
      </button>
      {customFilter && (
        <div className='z-40 bg-white absolute shadow top-0 right-[-14.3rem] flex flex-col p-4 justify-center items-center gap-x-2 gap-y-4 rounded w-40'>
          <SliderInput
            name='opacity'
            min='0'
            max='100'
            value={state.opacity}
            onChange={handleChangeSize}
          />
          <div className='flex gap-4 justify-center items-center'>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <label htmlFor='filter' className='font-bold text-sm'>
                Primary
              </label>
              <input
                name='filter'
                onChange={onChange}
                type='color'
                className='inputColor'
              />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <label htmlFor='secondary' className='font-bold text-sm'>
                Secondary
              </label>
              <input
                name='secondary'
                onChange={onChange}
                type='color'
                className='inputColor'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
