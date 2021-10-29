import { useEffect, useState } from "react"

const useData = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return offers;
}
export default useData;