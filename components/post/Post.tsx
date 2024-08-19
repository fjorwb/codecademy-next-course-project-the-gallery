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
      <div className={styles.searchResult}>
        <Image
          className={styles.searchedImage}
          src={data.primaryImage == '' ? '/blank.jpg' : data.primaryImage}
          alt={data.title}
          width={500}
          height={500}
        />
        <p className={styles.title}>{data.title}</p>
      </div>
    )

  )
}
