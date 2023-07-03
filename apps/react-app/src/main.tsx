import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'

const Foo = lazy(() => import('./Foo'))

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Foo />
      </Suspense>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)