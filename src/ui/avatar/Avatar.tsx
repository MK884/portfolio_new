import style from "./avatar.module.scss";

export const AvatarGroup = ({
  avatars,
  size = "md",
  styles = {},
}: AvatarGrpProps) => {
  let length = avatars.length - 4;
  return (
    <>
      <div className={`${style["avatar-grp"]}`}>
        {avatars.slice(0, 4).map((avatar, idx) => (
          <Avatar key={idx} {...avatar} size={size} styles={styles} />
        ))}
        {length > 0 && (
          <div
            className={`${style["avatar-number"]} ${
              style[`avatar-number-${size}`]
            }`}
            style={styles}
          >
            {`+${length}`}
          </div>
        )}
      </div>
    </>
  );
};

const Avatar = ({
  src,
  alt = "Image",
  size = "md",
  styles = {},
  onClick,
  text = "text",
}: AvatarProps) => {
  return (
    <div
      onClick={onClick}
      className={`${style["avatar"]} ${style[`avatar-${size}`]}`}
      style={styles}
    >
      {src ? <img src={src} alt={alt} /> : text?.toUpperCase().charAt(0)}
    </div>
  );
};

export default Avatar;
