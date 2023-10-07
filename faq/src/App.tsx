import { useState } from 'react'
import { Icon } from '@iconify/react';

function App() {

  const [accordionIndex, setAccordionIndex] = useState<number>(0);

  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center bg-gray-900'>
        <div className='border-2 w-1/2 flex flex-col h-[700px]'>
          {/* first quest */}
            <div className='text-white border-2 border-red-500 w-full flex justify-between items-center p-2' onClick={() => {setAccordionIndex(0)}}>
              <span className=' font-bold text-xl'>Quest 1</span>
              <Icon icon="ep:arrow-down" width={32} height={32} className={`transition-all duration-300 ${accordionIndex === 0 ? "rotate-180" : 'rotate-0'}`}/>
            </div>
            <div className={`w-full bg-gray-600 ${accordionIndex === 0 ? 'flex-1' : ''} transition-all duration-300 text-white`}>
              <div className={`${accordionIndex === 0 ? 'block' : 'hidden' } p-4 transition-all duration-1000`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugit voluptatibus totam quisquam tenetur quas nam magnam inventore dignissimos velit.</p>
              </div>
            </div>
          {/* end first quest */}
          {/* second quest */}
          <div className='text-white border-2 border-green-500 w-full flex justify-between items-center p-2' onClick={() => {setAccordionIndex(1)}}>
              <span className=' font-bold text-xl'>Quest 2</span>
              <Icon icon="ep:arrow-down" width={32} height={32} className={`transition-all duration-300 ${accordionIndex === 1 ? "rotate-180" : 'rotate-0'}`}/>
            </div>
            <div className={`w-full bg-gray-600 ${accordionIndex === 1 ? 'flex-1' : ''} transition-all duration-300 text-white`}>
              <div className={`${accordionIndex === 1 ? 'block' : 'hidden' } p-4 transition-all duration-1000`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugit voluptatibus totam quisquam tenetur quas nam magnam inventore dignissimos velit.</p>
              </div>
            </div>
          {/* end second quest */}
          {/* third quest */}
          <div className='text-white border-2 border-green-500 w-full flex justify-between items-center p-2' onClick={() => {setAccordionIndex(2)}}>
              <span className=' font-bold text-xl'>Quest 2</span>
              <Icon icon="ep:arrow-down" width={32} height={32} className={`transition-all duration-300 ${accordionIndex === 2 ? "rotate-180" : 'rotate-0'}`}/>
            </div>
            <div className={`w-full bg-gray-600 ${accordionIndex === 2 ? 'flex-1' : ''} transition-all duration-300 text-white`}>
              <div className={`${accordionIndex === 2 ? 'block' : 'hidden' } p-4 transition-all duration-1000`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugit voluptatibus totam quisquam tenetur quas nam magnam inventore dignissimos velit.</p>
              </div>
            </div>
          {/* end third quest */}
        </div>
      </div>
    </>
  )
}

export default App
