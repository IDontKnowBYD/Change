import React from 'react'

export default ({ name, content }) => {
  return (
    <li>
      <h3>
        评论人：
        {name}
      </h3>
      <p>
        评论内容：
        {content}
      </p>
    </li>
  )
}
