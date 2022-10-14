import { Environment } from "@react-three/drei"

const EnvironmentComponent = () => {
  return (
    <group>
      <Environment
        // preset="dawn"
        // background={true}
        files="quarry_04_4k.hdr"
        // files="adamsbridge.hdr"
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-0.5, 1, -0.5]} intensity={0.5} />
      <directionalLight position={[-1, 1, 1]} intensity={0.2} />

      <directionalLight
        castShadow
        intensity={0.01}
        args={["#ffffff"]}
        position={[0, 100, -100]}
      />
    </group>
  )
}
export default EnvironmentComponent
