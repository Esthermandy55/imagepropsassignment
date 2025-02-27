interface ImageProps {
  src: string;
  width: string;
  height: string;
}

const Image = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      
    />
  );
};

export default Image;
