import { useState, useEffect } from 'react'

export default function useGithub(username) {
  const [data,    setData]    = useState(null)
  const [repos,   setRepos]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    if (!username) return
    const fetchData = async () => {
      try {
        setLoading(true)
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`),
        ])
        if (!userRes.ok) throw new Error('GitHub user not found')
        const userData  = await userRes.json()
        const reposData = await reposRes.json()
        setData(userData)
        setRepos(reposData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [username])

  return { data, repos, loading, error }
}
