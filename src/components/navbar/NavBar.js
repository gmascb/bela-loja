import DropDownList from "./DropDownList";

const NavBar = () => {


  const properties = {
    dropDownTitleName: 'Categories',
    dropDownOptions: [
      {
        Name: 'Season',
        Options: [
          { Name: 'Autumn', link: '/autumn' }, 
          { Name: 'Summer', link: '/summer' }, 
          { Name: 'Spring', link: '/spring' }, 
          { Name: 'Winter', link: '/winter' }, 
        ]
      },
      {
        Name: 'Lingerie',
        Options: [
          { Name: 'LingerieTop', link: '/lingerie-top' }, 
          { Name: 'LingerieBottom', link: '/lingerie-bottom' }
        ]
      },
      {
        Name: 'Top-Clothes',
        Options: [
          { Name: 'Bodies', link: '/bodies' }, 
          { Name: 'Croppeds', link: '/croppeds' }, 
          { Name: 'TShirts', link: '/t-shirts' }, 
        ]
      },
      {
        Name: 'Bottom-Clothes',
        Options: [
          { Name: 'Pants', link: '/pants' },
          { Name: 'Shorts', link: '/shorts' },
        ]
      }
    ]
  }

  return (
    <>
      <nav className="bg-white border-gray-500 dark:bg-pink-500">
        
        { /* start nav bar */ }
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          { /* Image Logo & Name */ }
          <a href="https://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://images.vexels.com/media/users/3/142651/isolated/preview/9238a586686438c6d95c990e2cdf4a45-roupas-de-vestido-preto.png"
                className="h-8" alt="RoupasLogo"              
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bela Loja</span>
          </a>
          
          { /* Button to open the navbar */ }
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>


          { /* NavBar Options */ }
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">

            { /* Categories UL */ }
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              

              <li>
                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              
              <DropDownList params={properties} />

              <li>
                <a href="/About" 
                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About</a>
              </li>
              <li>
                <a href="/Contact" 
                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact</a>
              </li>

              <li>
                <a href="/logout" 
                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;