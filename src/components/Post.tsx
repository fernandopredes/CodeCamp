import { SubmitHandler, useForm } from "react-hook-form";
import { PostStyle } from "./Post.style"
import api from "../actions/api";
import { useSelector } from 'react-redux'
import { RootStore } from "../redux/store";

type PostProps = {
  username: string
  title: string
  content: string
}

const Post = (props: PostProps) => {
  const user = useSelector((store: RootStore)=> store.userReduce)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<PostProps>();

  const onSubmit: SubmitHandler<PostProps> = (data) => {
    const submitInfos = () => {
       api.post(`/`, {
        username: user.name,
        title: data.title,
        content: data.content
        }
      )
     }
     submitInfos()

    }

  return (
    <PostStyle>
        <div className="container">
        <h2>What’s on your mind?</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p>Title</p>
            <input {...register('title', { required: true })} placeholder="Hello World" />
          </label>
          <label>
            <p>Content</p>
            <textarea {...register('content', { required: true })} placeholder="Content here" />
          </label>
          <div className="btn">
            <button>create</button>
          </div>
        </form>
      </div>
    </PostStyle>
  )
}

export default Post
