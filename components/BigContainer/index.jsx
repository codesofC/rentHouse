import Navbar from "../Navbar"
import { createContext, useState, useEffect } from "react"

export const dataFetch = createContext()

const BigContainer = ({children}) => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    import("../../pages/api/rent.json")
    .then(response => {
      setData(response.houses)
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  return (
    <div>
        <Navbar />
        {
            data && <dataFetch.Provider value={{data}}>
              {
                children
              }
            </dataFetch.Provider>
        }
    </div>
  )
}

export default BigContainer
