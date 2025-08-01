import '../../css/home/post.css';

export default function UpdatesPosts({ postsData }) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="top">New Updates</div>
        <div className="post-box">
          {postsData.map((post, index) => {
            return (
              <div key={index} className="post">
                <div className="post-image">
                  <img src={post.imageUr} />
                </div>
                <div className="post-text">
                  <div className="date">{post.date}</div>
                  <p className="topic">{post.topic}</p>
                  <p className="text">{post.text.length > 300 ? post.text.slice(0, 320) + '...' : post.text}</p>
                  <p className="button">
                    Continue Reading...
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
