import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import wallpaperImage from '../src/assets/wallpaper.png';
import HeroFirst from './sections/HeroFirst';
import Mjolnir from '../public/Mjolnir'; // Make sure Mjolnir component is correctly imported
import { SheetProvider } from '@theatre/r3f'

export default function App() {
  return (
    <main className="container mx-auto h-screen bg-black relative">
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${wallpaperImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
      <Canvas className='w-full h-screen' style={{ position: 'relative', zIndex: 1 }}>
        <ambientLight intensity={-10} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.25}>
            <SheetProvider> {/* Assuming SheetProvider is defined elsewhere */}
              <Mjolnir />
            </SheetProvider>
            <Scroll>
              <HeroFirst/>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <Environment preset='sunset' />
        <ContactShadows position={[0, -3, 0]} opacity={1} scale={10} blur={1} far={10} resolution={256} />
      </Canvas>
    </main>
  )
}
