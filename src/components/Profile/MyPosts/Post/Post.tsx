import post from './Post.module.css'


export type PostType1 = {
    message: string
    src: string
    likeCount: string
    
}

export function Post(props: PostType1) {
    return (

        <div className={post.item}>
            <img src={props.src} alt="" />
            {props.message}
            <button>Like({props.likeCount})</button>
            <button>DisLike</button>
        </div>


    )
}