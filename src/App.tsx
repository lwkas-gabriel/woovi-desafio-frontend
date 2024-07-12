import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './global.css'
import './App.css'
import { PixPaymentComponent } from "./components/PixPaymentComponent"

function App() {
  return (
    <>
      <main className='container'>
        <header className='imageContainer'>
          <svg width="124" height="37" viewBox="0 0 124 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M122.385 1.16047C123.124 1.93411 123.511 2.81325 123.511 3.86822C123.511 4.92319 123.124 5.8375 122.385 6.54082C121.645 7.24413 120.695 7.59579 119.603 7.59579C118.477 7.59579 117.526 7.24413 116.787 6.54082C116.047 5.8375 115.695 4.92319 115.695 3.86822C115.695 2.81325 116.083 1.93411 116.822 1.16047C117.561 0.386822 118.512 0 119.603 0C120.695 0 121.645 0.386822 122.385 1.16047ZM116.364 32.2118V14.3124C116.364 12.5541 117.808 11.1124 119.568 11.1124C121.328 11.1124 122.772 12.5541 122.772 14.3124V32.1766C122.772 33.9349 121.328 35.3767 119.568 35.3767C117.808 35.4118 116.364 33.97 116.364 32.2118Z" fill="#03D69D"/>
            <path d="M100.873 35.4108C98.7957 35.4108 96.9297 34.18 96.1552 32.2459L89.149 15.4719C88.2688 13.3619 89.8179 11.0762 92.0712 11.0762C93.3738 11.0762 94.5357 11.8498 95.0286 13.0806L100.873 27.604L106.717 13.0806C107.21 11.885 108.372 11.0762 109.675 11.0762C111.963 11.0762 113.477 13.3971 112.597 15.4719L105.591 32.281C104.816 34.18 102.95 35.4108 100.873 35.4108Z" fill="#03D69D"/>
            <path d="M53.5194 25.5295C55.2446 27.2527 56.8289 28.8351 58.4132 30.4176C54.8221 34.8133 50.3508 37.521 44.4009 36.3957C38.8734 35.3408 35.2471 31.9297 33.8036 26.4439C32.2898 20.6415 34.9655 14.6282 40.1409 11.6743C45.3163 8.72035 51.7943 9.494 56.0543 13.6787C60.8072 18.3206 65.4545 23.068 70.1723 27.745C72.6015 30.1363 76.1926 30.4176 78.7979 28.4835C81.7201 26.3032 82.2482 22.0833 79.9949 19.2349C77.7065 16.3865 73.4817 15.9293 70.7356 18.3206C69.785 19.1294 69.0104 20.1492 68.2007 21.0635C66.4403 19.3052 64.856 17.7228 63.2717 16.1403C66.7572 11.8501 71.158 8.93135 77.7065 10.2325C83.1636 11.2874 87.2123 15.7535 88.1277 21.3448C89.0079 26.8307 86.1209 32.4924 81.0864 35.1298C75.9462 37.8024 69.7146 36.8881 65.525 32.7737C60.8425 28.1318 56.1952 23.4548 51.5127 18.8129C49.5059 16.8085 46.6893 16.2106 44.2249 17.3359C41.7252 18.4612 40.3521 20.4305 40.3169 23.2086C40.2817 25.9515 41.5491 28.0263 44.0488 29.1868C46.5837 30.3472 48.9778 29.9956 51.0902 28.167C52.0056 27.323 52.7449 26.3735 53.5194 25.5295Z" fill="#03D69D"/>
            <path d="M23.7357 35.4127C21.7993 35.4127 20.1446 34.1468 19.6517 32.3181L16.4479 20.4322L13.2088 32.3181C12.7159 34.1468 11.0612 35.4127 9.16004 35.4127C7.29408 35.4127 5.63936 34.1819 5.11126 32.3533L0.111887 14.9112C-0.416215 13.0474 0.992058 11.1836 2.92843 11.1836C4.23109 11.1836 5.39291 12.0627 5.74498 13.3287L9.37128 26.4455L12.7863 13.9265C13.244 12.3089 14.6875 11.1836 16.3774 11.1836C18.0674 11.1836 19.5461 12.3089 19.9685 13.9265L23.3836 26.4455L27.0099 13.3287C27.362 12.0627 28.5238 11.1836 29.8264 11.1836H29.9321C31.8684 11.1836 33.2767 13.0474 32.7486 14.9112L27.7845 32.3885C27.2916 34.1819 25.6368 35.4127 23.7357 35.4127Z" fill="#03D69D"/>
          </svg>
        </header>

        <section className='paymentSection'>
          <h2>
            João, como você quer pagar?
          </h2>

          
          <PixPaymentComponent />
          {/* <div className='paymentOptionsContainerPixCard'>
            <fieldset className='paymentOptionsPixCard'>
              <legend>Pix Parcelado</legend>
              <ul className='containerList'>
                <li className='optionPaymentPixCard'>
                  <label htmlFor="pix"><strong>2x</strong> R$ 15.300,00</label>
                  <input type="radio" id="pixCard" name="drone" value="pixCard" />
                </li>
                <li className='optionPaymentPixCard'>
                  <label htmlFor="pix"><strong>3x</strong> R$ 10.196,66</label>
                  <input type="radio" id="pixCard" name="drone" value="pixCard" />
                </li>
                <li className='optionPaymentPixCard'>
                  <label htmlFor="pix"><strong>4x</strong> R$ 7.725,00</label>
                  <input type="radio" id="pixCard" name="drone" value="pixCard" />
                </li>
                <li className='optionPaymentPixCard'>
                  <label htmlFor="pix"><strong>5x</strong> R$ 6.300,00</label>
                  <input type="radio" id="pixCard" name="drone" value="pixCard" />
                </li>
                <li className='optionPaymentPixCard'>
                  <label htmlFor="pix"><strong>6x</strong> R$ 5.283,00</label>
                  <input type="radio" id="pixCard" name="drone" value="pixCard" />
                </li>
                <li className='optionPaymentPixCard'>
                  <label htmlFor="pix"><strong>7x</strong> R$ 4.542,85</label>
                  <input type="radio" id="pixCard" name="drone" value="pixCard" />
                </li>
              </ul>
            </fieldset>
          </div> */}
          </section>
      </main>
    </>
  )
}

export default App
