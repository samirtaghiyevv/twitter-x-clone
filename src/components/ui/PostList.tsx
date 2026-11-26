import Icon from "../icon";

const PostList = ({ data }: any) => {
  return (
    <div>
      {data.map((post: any) => (
        <div
          key={post.id}
          className="border-b border-[#2f3336] px-4 pt-3 flex leading-5"
        >
          <div className="mr-2">
            <img
              src={post.user.avatar}
              className="w-10 h-10 rounded-full object-cover"
              alt="avatar"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1">
                <span className="text-[15px] font-bold">{post.user.name}</span>
                <span className="text-[#71767b]">@{post.user.username}</span>
                <div className="w-0.5 h-0.5 bg-[#71767b] rounded-full" />
                <span className=" text-[#71767b]">@{post.date}</span>
              </div>
              <div className="flex items-center text-[#71767b]">
                <button className="trasition-all duration-300 cursor-pointer hover:text-[#1d9bf0] hover:bg-[#1d9bf0]/20 rounded-full p-1.5">
                  <Icon name="grok" size={18} />
                </button>
                <button className="trasition-all duration-300 cursor-pointer hover:text-[#1d9bf0] hover:bg-[#1d9bf0]/20 rounded-full p-1.5">
                  <Icon name="dot" size={18} />
                </button>
              </div>
            </div>
            <p className="text-[15px] font-medium">{post.description}</p>
            {post?.image && (
              <img
                src={post.image}
                className="rounded-xl object-cover mt-3"
                alt="post"
              />
            )}
            <div className="flex items-center justify-between my-3">
              <div className="flex text-[#71767b] items-center gap-1 font-medium">
                <Icon name="comment" size={18} />
                <span>{post.views.comment}</span>
              </div>
              <div className="flex text-[#71767b] items-center gap-1 font-medium">
                <Icon name="repost" size={18} />
                <span>{post.views.repost}</span>
              </div>
              <div className="flex text-[#71767b] items-center gap-1 font-medium">
                <Icon name="heart" size={18} />
                <span>{post.views.like}</span>
              </div>
              <div className="flex text-[#71767b] items-center gap-1 font-medium">
                <Icon name="analiz" size={18} />
                <span>{post.views.view}</span>
              </div>
              <div className="flex text-[#71767b] items-center gap-1 font-medium">
                <Icon name="save" size={18} />
                <Icon name="upload" size={18} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
