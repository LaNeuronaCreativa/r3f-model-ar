import { useLayoutEffect, useState, useRef } from 'react'
import { Affix, Stack, Button, Text } from '@mantine/core'
import { useCustomizations } from './Customizations.js'

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex, setAudioIndex, toggleMeasure, setToggleMeasure } = useCustomizations()

  setAudioIndex(0)

  const arButtonRef = useRef()

  const handleClick = (e) => {
    e.preventDefault()
    arButtonRef.current.click()
    console.log('clicked')
  }

  const [showHideButton, setShowHideButton] = useState(false)

  const runAnimation = () => {
    setAnimationIndex(0)
  }

  const measureState = () => {
    setToggleMeasure((current) => !current)
  }

  useLayoutEffect(() => {
    animations.length === 0 ? setShowHideButton(false) : setShowHideButton(true)
  }, [animations])

  return (
    <>
      <a href={'https://oobexr.com'} className="bottom__left">
        oobexr
      </a>
      <div className="top__left">Sistema Logistico —</div>
      <div className="top__right">— wurth</div>
      <div className="bottom__right">
        <Button onClick={handleClick} compact color={'dark'} variant={'outline'}>
          — view in ar
        </Button>
        <br />
        <br />
        <div>— pan with two fingers or right click</div>
      </div>
      <model-viewer
        id="model-viewer"
        /* src={`./models/${params}.glb`} */
        src=""
        ios-src={`./models/SL.usdz`}
        alt="Sistema Logistico"
        ar
        ar-scale="fixed"
        ar-mode="webxr"
        ar-placement="floor">
        <button ref={arButtonRef} slot="ar-button" id="ar-button" className="mv-ar-button">
          {' '}
          AR BUTTON
        </button>
      </model-viewer>

      <Affix position={{ right: 40, top: 90 }}>
        <Stack>
          {showHideButton && (
            <Button compact color={'dark'} variant={'outline'} onClick={runAnimation}>
              <Text color={'dark.9'}>— interact with Luigi</Text>
            </Button>
          )}
        </Stack>
      </Affix>
    </>
  )
}

export default Interface
