const API = "http://localhost:3000"

export function getSushi() {
  return fetch(`${API}/sushis`).then(res => res.json())
}
