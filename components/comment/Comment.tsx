'use client'

import React, { useState } from 'react'

import type { Comment } from '../../utils/utils'
import NewCommentForm from './NewCommentForm'
import styles from './Comment.module.css'


export default function Comment() {
  const [newComments, setNewComments] = useState<Comment[]>([]);

  const addComment = (newCommentBody: string) => {
    const newComment: Comment = {
      id: newComments.length + 1,
      body: newCommentBody,
      timestamp: Date.now(),
    };
    setNewComments([...newComments, newComment]);

  };

  return (
    <div className={styles.comments_section}>
      {/* <div> */}
      {newComments.map((comment) => (
        <div className={styles.comments} key={comment.id}>
          <p className={styles.newcommenttext}>{comment.body}</p>
          <p className={styles.comments_date}>
            {new Date(comment.timestamp).toLocaleDateString('en-US', { timeZone: 'UTC' })}
          </p>
        </div>
      ))}
      {/* </div> */}
      <NewCommentForm addComment={addComment} />

    </div>
  );
}
