import { showCard } from './coffeeCards';
import url from './database/products.json'

export async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('ошибка при загрузке')
    }

    const data = await response.json()

    showCard(data)

  } catch (error) {
    console.error('failed 404', error.message)
    throw error
  }
}