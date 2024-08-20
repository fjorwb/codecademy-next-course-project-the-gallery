// import React from "react";
import Image from "next/image";
import { fetchObject } from "../../lib/fetch-data";
import styles from "./Post.module.css";

type PostProps = {
  id: number;
};

// Create `Post` component
export default async function Post({ id }: PostProps) {
  // console.log('ID:', id);
  const { data, error } = await fetchObject(id)
  // console.log('Data:', data);

  return (

    error ? null : (
      data.primaryImage === '' ? null :
        <div className={styles.searchResult}>
          <Image
            className={styles.searchedImage}
            src={data.primaryImage === '' ? '/blank.png' : data.primaryImage}
            width={200}
            height={200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={data.title}
          />
          <p className={styles.title}>{data.title}</p>
          <p className={styles.author}>{data.artistDisplayName}</p>
          <p className={styles.nationality}>{data.artistNationality}</p>

          <p className={styles.date}>{data.objectDate}</p>
        </div>
    )

  )
}
