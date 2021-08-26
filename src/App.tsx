import './App.css'
import { AppProvider } from 'context'
import Slider from './Slider'
import { FileUploader } from 'components/FileUploader'

function App() {
  return (
    <div className="App">
      <AppProvider>
        <h1>Indeed Image Convertor</h1>
        <figure>
          <blockquote cite="https://indeed.design/brand/color">
            <p>
              Our colors reflect the many ways we showcase our brand. A rich
              range of tones and contrast lets us build for accessibility and
              tell a distinctive brand story.
            </p>
          </blockquote>
          <figcaption>
            —
            <cite>
              <a href="https://indeed.design/brand/color"> Indeed Design</a>
            </cite>
          </figcaption>
        </figure>
        <FileUploader />
        <div className="pictureBox">
          <Slider />
        </div>
        <footer>
          <p>
            Processing is done by your browser. Uploaded images never leave your
            device.
          </p>
          <p>
            Created for Indeed Summer Hackathon 2021 by aogilvie, chung, cyang,
            mstemm.
          </p>
        </footer>
      </AppProvider>
    </div>
  )
}

export default App
