declare global {
  interface Window {
    dataLayer: any
  }
}

export const gtag = (payload: object) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(payload)
  }
}
