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
      <h2></h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title
          <input {...register('title', { required: true })} placeholder="Hello World" />
        </label>
        <label>
          Content
          <input {...register('content', { required: true })} placeholder="Content here" />
        </label>
        <button>create</button>
      </form>
    </PostStyle>
  )
}

export default Post
