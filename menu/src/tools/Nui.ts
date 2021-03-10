export default {
  async send(event: string, data = {}) {
    return await fetch(`https://select/${event}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    })
  }
}