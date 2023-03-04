interface SliderInputProps {
  label?: string
  name?: string
  value?: string
  min?: string
  max?: string
  defaultValue?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SliderInput = ({
  name,
  value,
  min,
  max,
  defaultValue,
  onChange
}: SliderInputProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-2'>
      <label htmlFor='blur' className='block mb-2 font-medium'>
        {name}
      </label>
      <input
        name={name}
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
      ></input>
    </div>
  )
}
