import React from 'react';
import cls from "./Avatar.module.scss";

const Avatar: React.FunctionComponent = () => {
  const [avatar , setAvatar] = React.useState<string>("");

  const user = {
    avatar: "",
  }

  const noneAvatar = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049__340.png"

  React.useEffect(() => {
    if(user.avatar) {
      setAvatar(user.avatar)
    } else {
      setAvatar(noneAvatar)
    }
  })

  return (
    <React.Fragment>
      <img className={cls.avatar} src={avatar} alt=""/>
    </React.Fragment>
  )
}

export default Avatar;
