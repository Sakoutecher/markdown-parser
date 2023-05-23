//Hooks
import { useTextStore } from '../../hooks/useText'

export const TextArea = () => {
  const text = useTextStore((state) => state.text)
  const setText = useTextStore((state) => state.setText)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className='bg-zinc-400 w-3/6 h-full outline-none rounded resize-none py-2 px-4'
    ></textarea>
  )
}
