import { useHelper, Environment, ContactShadows } from '@react-three/drei'

export default function Lights() {
  return (
    <>
      <Environment
        files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/paul_lobe_haus_1k.hdr'}
        /* files={'./hdr/rad.hdr'} */
        /* preset='warehouse' */
        resolution={512}
        blur={0}
        background={false}></Environment>
    </>
  )
}
