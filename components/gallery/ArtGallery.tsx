import React from 'react'
import styles from './ArtGallery.module.css'
import fetchArtData from '../../utils/utils'
import Featured from '../featured/Featured'

export default async function ArtGallery() {
  const artData = await fetchArtData
  console.log('artData...', artData)

  return (
    <div className={styles.gallery}>
      <ul>
        {artData === undefined ? null : artData.map((data) => (
          <li key={data.objectID}>
            <Featured />
          </li>
        ))}

      </ul>
    </div>
  )

}  