import React from 'react'

export default function TopNavigationBar() {
  return (
    <>
    <nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
         
        </div>
        <div className="hidden sm:ml-6 sm:block">
      
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    

        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">Sign out
         
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>


  
</nav>

    </>
  )
}
