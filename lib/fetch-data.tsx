import 'server-only'
// Imports
import { cache } from 'react'

const baseUrl = "https://collectionapi.metmuseum.org/public/collection/v1";

// Using Met Museum of Art API: https://metmuseum.github.io/
// Create `fetchObjectIDs()`
export const fetchObjectIDs = cache(async (term: string) => {
  // console.log('TERM', term);
  const response = await fetch(`${baseUrl}/search?hasImages=true&q=${term}`,
    {
      next: {
        revalidate: 20
      }
    }
  )

  if (response.status !== 200) {
    throw new Error('Failed to fetch / fetchObjectIDs')
  }

  return response.json()
})

// Create `fetchObject()`
export const fetchObject = cache(async (objectID: number) => {

  const url = `${baseUrl}/objects/${objectID}`
  // console.log('URL', url);
  const response = await fetch(url,
    {
      next: {
        revalidate: 10
      }
    }
  )

  if (response.status !== 200) {
    return ({
      data: null,
      error: 'Failed fetch data / fetchObject'
    })
  }

  const data = await response.json()

  return {
    data: data,
    error: null
  }

})
