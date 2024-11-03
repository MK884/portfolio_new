import style from "./image.module.scss";

function ImageBox({ src, alt }: { src: string; alt?: string }) {
  const openImage = () => {
    const anchor = document.createElement("a");
    anchor.href = src;
    anchor.target = "_blank";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className={style.box} onClick={openImage}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ImageBox;
