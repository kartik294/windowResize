import useWindowSize from "./useWindowSize"; // Adjust the path as needed

function WindowSizeComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
}

export default WindowSizeComponent;
