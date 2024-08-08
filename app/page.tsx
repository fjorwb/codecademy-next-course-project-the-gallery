import React, { Suspense } from 'react'
import ArtGallery from '../components/gallery/ArtGallery'
import Nav from '../components/navigation/Nav';
import LoadingGallery from '../components/featured/LoadingGallery';

import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <header className={styles.header}> */}
      {/* <h1>Art Gallery Venue</h1> */}
      {/* <Nav /> */}
      {/* </header> */}
      <main className={styles.main}>
        <Suspense fallback={<LoadingGallery />}>
          <ArtGallery />
        </Suspense>
      </main>
      <footer className={styles.footer}>
        <p>© Art Gallery copyright</p>
      </footer >
    </div>
  );
}  
