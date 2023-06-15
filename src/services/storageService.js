/* eslint-disable */

class StorageService {
  putLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      throw Error(e)
    }
  }

  getLocalStorage = (key) => {
    try {
      return localStorage.getItem(key)
    } catch (e) {
      throw Error(e)
    }
  }

  removeLocalStorage = (key) => {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      throw Error(e)
    }
  }
}

const storageService = new StorageService()

export default storageService
