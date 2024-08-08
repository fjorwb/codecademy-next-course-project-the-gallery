import React from 'react'
import styles from './ArtGallery.module.css'
import { fetchArtData } from '../../utils/utils'
import Featured from '../featured/Featured'

export default async function ArtGallery() {
  const artData = await fetchArtData()

  return (
    <div className={styles.gallery}>
      {artData === undefined ? null : artData.map((data) => (
        <Featured key={data.objectID} {...data} />
      ))}

    </div>
  )

}  