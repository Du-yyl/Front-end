import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import Welcome from '../components/Welcome'
import App from '../../../../src/App'
import Add from '../../../../src/components/Add'
import Lists from '../../../../src/components/Lists'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Welcome">
        <Welcome/>
      </ComponentPreview>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/Add">
        <Add/>
      </ComponentPreview>
      <ComponentPreview
        path="/Lists">
        <Lists/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
