import {useState, useEffect} from 'react'

export function useFetch(url) {
    const [error, setError] = useState(false)
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!url) return
        setLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url, { mode: 'no-cors'})
                const data = await response
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            }
            setLoading(false)
        }

        fetchData()

    }, [])

    console.log(data, error)

    return {isLoading, data, error}
}