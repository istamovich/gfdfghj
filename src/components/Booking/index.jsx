import React from 'react'

function Booking() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-[-100px]">
      <div className="max-w-md w-full text-center space-y-6">
        <h3 className="text-yellow-500 font-medium text-lg">Biz bilan o'z joyingizni band qiling!</h3>

        <h1 className="text-gray-800 text-3xl font-bold">Ta'tilingizni biz bilan o'tkazing</h1>

        <p className="text-gray-700">
          Direktor: <span className="text-yellow-600">Nilufar Sadikova</span>
        </p>

        <p className="text-yellow-500 text-xl font-semibold">+998951270090</p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 rounded transition duration-300">
          Joy Band Qilish
        </button>
      </div>
    </div>
  )
}

export default Booking

