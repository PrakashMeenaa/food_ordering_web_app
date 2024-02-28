import React from 'react'

const Cart = () => {
  return (
    <div>
      <div class="container mx-auto">
  
  <div class="my-8">
    <div class="flex items-center border-b border-gray-200 py-2">
      <div class="flex-1">
        <h3 class="text-lg font-semibold">Item Name</h3>
      </div>
      <div class="w-24 text-center">
        <h3 class="text-lg font-semibold">Price</h3>
      </div>
      <div class="w-24 text-center">
        <h3 class="text-lg font-semibold">Quantity</h3>
      </div>
      <div class="w-24 text-center">
        <h3 class="text-lg font-semibold">Total</h3>
      </div>
    </div>

    
    <div class="flex items-center border-b border-gray-200 py-2">
      <div class="flex-1">
        <p class="text-gray-800">Item 1</p>
      </div>
      <div class="w-24 text-center">
        <p class="text-gray-800">$10.00</p>
      </div>
      <div class="w-24 text-center">
        <input type="number" class="w-full p-1 border border-gray-300" value="1"/>
      </div>
      <div class="w-24 text-center">
        <p class="text-gray-800">$10.00</p>
      </div>
    </div>
    

  </div>

  
  <div class="flex justify-end">
    <div class="w-1/3">
      <div class="border-t border-gray-200 py-4">
        <p class="text-lg font-semibold">Total Items: <span>2</span></p>
        <p class="text-lg font-semibold">Total Price: <span>$20.00</span></p>
      </div>
    </div>
  </div>

  
  <div class="flex justify-between mt-8">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Checkout</button>
    <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Continue Shopping</button>
  </div>
</div>

    </div>
  )
}

export default Cart
