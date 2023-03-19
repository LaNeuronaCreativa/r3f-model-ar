import { createContext, useState, useContext } from 'react'

const CustomizationsContext = createContext({})

export const CustomizationsProvider = (props) => {
  const [animationIndex, setAnimationIndex] = useState(3)
  const [audioIndex, setAudioIndex] = useState(null)
  const [animations, setAnimations] = useState([])
  const [toggleMeasure, setToggleMeasure] = useState(false)
  const [modelName, setModelName] = useState(null)

  return (
    <CustomizationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
        toggleMeasure,
        setToggleMeasure,
        modelName,
        setModelName,
        audioIndex,
        setAudioIndex
      }}>
      {props.children}
    </CustomizationsContext.Provider>
  )
}

export const useCustomizations = () => {
  const context = useContext(CustomizationsContext)
  return context
}
