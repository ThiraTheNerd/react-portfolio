import React, { useState } from 'react'
import styles from "./Write.module.css";
import { CgMathPlus, CgImage,CgYoutube, CgCode,   } from "react-icons/cg";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
const Write = () => {
    const [open , setOpen] = useState(false)
    const [value, setValue] = useState("")
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        // onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <CgMathPlus className={styles.button} onClick={() => setOpen(!open)}/>
        {open && (
            <div className={styles.add}>
                 <input
                    type="file"
                    id="image"
                    // onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                />
                <CgImage className={styles.addButton} />
                <CgYoutube className={styles.addButton} />
                <CgCode className={styles.addButton} />
            </div>
        )}
        <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story ...'/>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default Write
