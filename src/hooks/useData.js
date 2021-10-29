import { useEffect, useState } from "react"

const useData = () => {
    const [offers, setOffers] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        setDataLoading(true)
        fetch('http://localhost:5000/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
        setDataLoading(false)
    }, [])
    return {
        offers,
        dataLoading
    };
}
export default useData;