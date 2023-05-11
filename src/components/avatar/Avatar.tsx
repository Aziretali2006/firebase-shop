import React from 'react';
import cls from "./Avatar.module.scss";
import useRedirect from '../../hooks/useRedirect';

interface IAvatar {
  avatar: string,
  w: string,
  h: string
}

const Avatar: React.FunctionComponent<IAvatar> = ({avatar , w , h}) => {
  const [ava , setAvatar] = React.useState<string>("");
  const { actions } = useRedirect();
  
  const noneAvatar = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049__340.png"

  React.useEffect(() => {
    if(avatar) {
      setAvatar(avatar)
    } else {
      setAvatar(noneAvatar)
    }
  } , [avatar])

  return (
    <React.Fragment>
      <img 
        className={cls.avatar}
        onClick={actions.goToProfile} 
        src={ava} 
        alt=""
        width={w}
        height={h}
      />
    </React.Fragment>
  )
}

export default Avatar;
