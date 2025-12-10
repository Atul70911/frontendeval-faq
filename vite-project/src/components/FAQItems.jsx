import React, { useEffect, useState } from 'react'
import { ArrowRight, MoveDownRight } from 'lucide-react'

const FAQItems = ({faq, index}) => {
    const [isShow, setIsShow] = useState(false);
   
    const handleClick = () => {
        setIsShow(!isShow);
    }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-4 p-4 cursor-pointer" onClick={handleClick}>
        <button className="text-blue-600 hover:text-blue-800 transition-colors">
          {isShow ? <MoveDownRight size={20} /> : <ArrowRight size={20} />}
        </button>
        <div className="text-lg font-semibold text-gray-800 flex-1">
          {faq.question}
        </div>
      </div>
      {isShow && (
        <div className="px-4 pb-4 pl-12 text-gray-600 bg-gray-50 border-t border-gray-200 py-3">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

export default FAQItems
