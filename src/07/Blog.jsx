const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learnig React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
  { id: 3, title: 'ReactStudy', content: 'Hello.' },
]

function Blog(props) {
  const sidebar = (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
  const content = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ))

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

export default Blog
