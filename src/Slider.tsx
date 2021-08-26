import React from 'react'
import { AppContext } from './context'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

const { PUBLIC_URL } = process.env

const Slider = () => {
  const { state } = React.useContext(AppContext)
  const { before, after, converting } = state

  return converting ? (
    <div className="loader"></div>
  ) : (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <label>Original</label>
        <label>Converted</label>
      </div>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={before || `${PUBLIC_URL}/test_hackathon.png`}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after || `${PUBLIC_URL}/result_hackathon.png`}
          />
        }
        onlyHandleDraggable={true}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a
          href={after || `${PUBLIC_URL}/result_hackathon.png`}
          download="indeed_converted"
        >
          <button>Download</button>
        </a>
      </div>
    </>
  )
}

export default Slider
