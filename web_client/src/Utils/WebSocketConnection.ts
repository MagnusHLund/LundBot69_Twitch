import { useEffect, useState, useRef } from 'react'

const useWebSocket = (url) => {
  const [message, setMessage] = useState(null)
  const ws = useRef(null)

  useEffect(() => {
    ws.current = new WebSocket(url)

    ws.current.onopen = () => console.log('ws opened')
    ws.current.onclose = () => console.log('ws closed')

    return () => {
      ws.current.close()
    }
  }, [])

  useEffect(() => {
    if (!ws.current) return

    ws.current.onmessage = (e) => {
      setMessage(e.data)
    }

    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.onopen()
    }
  }, [])

  const sendMessage = (msg) => {
    if (!ws.current) return

    ws.current.send(JSON.stringify(msg))
  }

  return { message, sendMessage }
}

export default useWebSocket
