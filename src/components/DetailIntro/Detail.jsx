import { useState } from "react";
import { GoHeartFill } from "react-icons/go";

const Detail = () => {

  const [color, setColor] = useState(localStorage.getItem('color'))
  const [fav, setFav] = useState(localStorage.getItem('fav') || 12)
  const handleColor = () => {
    setColor(color === '#92cbdf' ? 'red' : '#92cbdf')
    setFav(color === '#92cbdf' ? 13 : 12)
    localStorage.setItem('color', color === '#92cbdf' ? 'red' : '#92cbdf')
    localStorage.setItem('fav', fav == 12 ? 13 : 12)
  }

  return (
    <div id="detail" className="w-5/6 sm-padding my-24 mx-auto p-14 shadow-md">
        <div className='mb-10 mt-20 sm flex flex-row items-center justify-between sm:flex-col'>
          <div className="diff aspect-[16/9] min-[1023px]:w-2/5 w-full mb-10">
            <div className="diff-item-1">
              <div className="bg-sky-700 text-primary-content text-xl font-black grid place-content-center">
                <ul>
                  <li>Height: 180cm</li>
                  <li>Weight: 62kg</li>
                  <li>Eyes: 10/10</li>
                </ul>
              </div>
            </div>
            <div className="diff-item-2">
              <div className="bg-base-200 text-xl font-black grid place-content-center">
                <ul className='flex flex-col ml-7 pr-6'>
                  <li>Address: Thanh Binh - Chuong My - Ha Noi</li>
                  <li>University: Ha Noi University of Mining and Geology - HUMG</li>
                  <li>Academic level: 12/12</li>
                </ul>
              </div>
            </div>
            <div className="diff-resizer"></div>
          </div>

          <div className="stats shadow min-[1023px]:w-3/6 w-full mb-10">
            <div className="stat place-items-center">
              <div className="stat-title">Project - Mini & Large</div>
              <div className="stat-value">9</div>
              <div className="stat-desc text-base">From January 2023 to now</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title">Favourites</div>
              <div className="stat-value text-secondary cursor-pointer" onClick={handleColor}><GoHeartFill color={color}/></div>
              <div className="stat-desc text-secondary text-base">↗︎ {fav} </div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
              
          </div>
        </div>

        <ul className="timeline max-[768px]:timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">Primary School</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <hr className="bg-primary"/>
          </li>
          <li>
          <hr className="bg-primary"/>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box">Secondary School</div>
            <hr className="bg-primary"/>
          </li>
          <li>
          <hr className="bg-primary"/>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box">High School</div>
            <hr className="bg-primary"/>
          </li>

          <li>
            <hr className="bg-primary"/>
            <div className="timeline-start timeline-box">University</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <hr className="bg-primary"/>
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">...</div>
            <div className="timeline-middle">
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Detail