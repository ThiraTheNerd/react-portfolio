import React from 'react'
import styles from './singlePage.module.css'
import Menu from '../../components/Blog/Menu/Menu'
import { getImageUrl } from '../../utils'
import Comments from '../../components/Blog/pages/Comments/Comments'
const SinglePagePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Single Page Post</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <img
              src={getImageUrl("history/netflix.png")}
              alt=""
              width={32}
              height={32}
              className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.ImageContainer}>
          <img
            src={getImageUrl("blog/blogpostimage.jpg")}
            alt=""
            fill
            className={styles.image}
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
        <div
            className={styles.description}
            // dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <p>Node.js has become a popular choice for backend development, thanks to its efficiency and scalability. One common task in backend development is sending emails, whether for user verification, notifications, or newsletters. In this article, we’ll explore how to send emails using Node.js, focusing on a straightforward approach that can be integrated into various applications.</p>
          <h2>Setting Up Your Node.js Environment</h2>
          <p>
            Before we dive into the code, let’s ensure that you have the necessary tools installed on your system. You’ll need Node.js and NPM 
            (Node Package Manager) to run the code examples in this article. You can download and install Node.js from the official website
            (https://nodejs.org/en/). Once you have Node.js installed, you can verify the installation by opening a terminal or command prompt and
            typing “node –v” and “npm –v”. If the versions are displayed, you’re ready to proceed.
          </p>
          <h2>Creating a Node.js Project</h2>
          <p>
            To create a Node.js project, open a terminal or command prompt and navigate to the directory where you want to create the project. Then, run
            the following command to initialize a new Node.js project:
          </p>
          <pre>
            <code>
              npm init
            </code>
          </pre>
          <p>
            This command will prompt you to provide information about your project, such as the project name, version, description, and license. You can
            accept the default values by pressing Enter. Once the initialization is complete, you’ll have a new directory with a package.json file that
            contains information about your project.
          </p>

          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePagePost
