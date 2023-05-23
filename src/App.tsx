//Librairies
import { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

//Components
import { GithubButton } from '#/GithubButton'
import { TextArea } from '#/TextArea'

//Hooks
import { useTextStore } from './lib/hooks/useText'

const App = (): ReactElement => {
  const text = useTextStore((state) => state.text)

  return (
    <div className='w-screen h-screen bg-zinc-300 flex flex-col justify-center items-center font-jetbrains relative'>
      <h1 className='uppercase text-2xl mb-8'>Markdown Parser</h1>
      <div className='w-4/5 h-3/4 flex justify-between items-center gap-6'>
        <TextArea />
        <ReactMarkdown
          className='bg-zinc-400 w-3/6 h-full rounded py-2 px-4'
          children={text}
          remarkPlugins={[remarkGfm]}
        />
      </div>
      <GithubButton />
    </div>
  )
}

export default App
