
const DropDownList = (params) => {

  return (
    <>
      <div>
        <button id={"dropdownNavbarLink" + params.params.dropDownTitleName} 
                data-dropdown-toggle={"dropdownNavbar" + params.params.dropDownTitleName} 
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
        >
          
          { /* DropDownTitleName */ }
          { params.params.dropDownTitleName }

          { /* Arrow pointing down */ }
          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg> 

        </button>
      </div>


      <div id={"dropdownNavbar" + params.params.dropDownTitleName} 
           className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">

        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" 
            aria-labelledby="dropdownLargeButton" key={params.params.dropDownTitleName}>
          
          <li aria-labelledby={"dropdownNavbarLink" + params.params.dropDownTitleName} key={'dropDownNavBar'} >

            {
               params.params.dropDownOptions.map(item => { 

                // console.log("ITEM: ", item);
                return <>
                  <button id={"doubleDropdownButton" + item.Name} key={item.Name}
                          data-dropdown-toggle={"doubleDropdown"+ item.Name}
                          data-dropdown-placement="right-start" type="button" 
                          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          {item.Name}

                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>


                  <div id={"doubleDropdown"+ item.Name} 
                       className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" key={item.Name}
                        aria-labelledby={"doubleDropdownButton" + item.Name}>
                    
                      {
                        item.Options.map(opt => {
                          // console.log("opt: ", opt);

                          return <li key={opt.Name}>
                            <a href={opt.link} 
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                {opt.Name}
                            </a>
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </>
              })
            }
          </li>
        </ul>
      </div>
    </>
  )
}

export default DropDownList;