import Link from "next/link";

export default function PostCard(props) {
    const { post } = props;
    return(
        <Link className="unstyled" href={`/blog/${post.slug}`}>
<div class="card mb-3" style={{'max-width':'540px;'}}>
<div class="row g-0">
  <div class="col-md-4">
    <img src="..." class="img-fluid rounded-start" alt="..." />
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">{post.title}</h5>
      <p class="card-text">{post.description}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
</Link>
    )
}