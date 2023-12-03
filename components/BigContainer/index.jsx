import Navbar from "../Navbar"
import Footer from "../Footer"
import { createContext, useState, useEffect } from "react"
import Modal from "../Modal"

export const dataFetch = createContext()

const BigContainer = ({children}) => {

  const [data, setData] = useState([])
  const [showLogin, setShowLogin] = useState(false)

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
        <Navbar setShowLogin={setShowLogin} />
        {showLogin && <Modal setShowLogin={setShowLogin} />}
        {
            data && <dataFetch.Provider value={{data}}>
              {
                children
              }
            </dataFetch.Provider>
        }
        <Footer />
    </div>
  )
}

export default BigContainer
