import React from 'react'
import Comment from './05/Comment'

const comments = [
  {
    name: '김빨강',
    comment: '안녕하세요, 빨강입니다.',
    backgroundColor: 'red',
  },
  {
    name: '이주황',
    comment: '안녕하세요, 주황입니다.',
    backgroundColor: 'orange',
  },
  {
    name: '박노랑',
    comment: '안녕하세요, 노랑입니다.',
    backgroundColor: 'yellow',
  },
  {
    name: '최연두',
    comment: '안녕하세요, 연두입니다.',
    backgroundColor: 'green',
  },
  {
    name: '강파랑',
    comment: '안녕하세요, 파랑입니다.',
    backgroundColor: 'blue',
  },
  {
    name: '김남색',
    comment: '안녕하세요, 남색입니다.',
    backgroundColor: 'navy',
  },
  {
    name: '김보라',
    comment: '안녕하세요, 보라입니다.',
    backgroundColor: 'purple',
  },
]

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            name={comment.name}
            comment={comment.comment}
            backgroundColor={comment.backgroundColor}
          />
        )
      })}
    </div>
  )
}

export default CommentList
