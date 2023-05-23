import { ReactElement } from 'react'

const App = (): ReactElement => {
  return (
    <div className='w-screen h-screen bg-zinc-300 flex flex-col justify-center items-center font-jetbrains'>
      <h1 className='uppercase text-2xl mb-8'>Markdown Parser</h1>
      <div className='w-4/5 h-3/4 flex justify-between items-center gap-6'>
        <textarea className='bg-zinc-400 w-3/6 h-full outline-none rounded resize-none py-2 px-4'></textarea>
        <div className='bg-zinc-400 w-3/6 h-full rounded'></div>
      </div>
    </div>
  )
}

export default App
