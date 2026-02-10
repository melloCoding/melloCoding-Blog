
const BackgroundBlob = () => {
  const blobs = [
    "/static/darkbg/blob1.svg",
    "/static/darkbg/blob2.svg",
    "/static/darkbg/blob3.svg",
    "/static/darkbg/blob4.svg",
    "/static/darkbg/blob5.svg",
  ];

  const randomBlob = blobs[Math.floor(Math.random() * blobs.length)];

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    filter: "blur(75px)",
  };

  return (
    <img
      id="background"
      src={randomBlob}
      alt=""
      fetchPriority="high"
      style={style}
    />
  );
};

export default BackgroundBlob;
