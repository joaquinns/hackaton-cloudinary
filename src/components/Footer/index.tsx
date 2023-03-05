import { GithubIcon } from '../Icons/GithubIcon'

export const Footer = () => {
  return (
    <footer className='bg-zinc-900 px-4 py-8 flex justify-around items-center text-slate-100 font-bold'>
      <a
        href='https://github.com/joaquinns/hackaton-cloudinary'
        target='_blank'
        className='flex gap-4 justify-center items-center text-white'
      >
        <GithubIcon />
        Source code
      </a>
      <a
        href='https://cloudinary.com/'
        target='_blank'
        className='text-sm flex flex-col gap-4 justify-center items-center text-white'
      >
        Powered by
        <img
          src='https://cloudinary-res.cloudinary.com/image/upload/c_scale,dpr_2.0,q_auto,w_230,h_230/cloudinary_logo_for_white_bg.svg'
          alt='cloudinary'
          className='w-[150px]'
        />
      </a>
    </footer>
  )
}
