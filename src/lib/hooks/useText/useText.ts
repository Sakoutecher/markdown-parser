//Librairies
import { create } from 'zustand'

type useTextStoreType = {
  text: string
  setText: (newText: string) => void
}

export const useTextStore = create<useTextStoreType>((set) => ({
  text: '',
  setText: (newText: string) => {
    set({ text: newText })
  },
}))
