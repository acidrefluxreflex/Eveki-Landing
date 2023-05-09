import { useEffect } from "react";

interface TriangleProps {
  triangleBase: number;
  containerClass: string;
}

const TriangleGrid: React.FC<TriangleProps> = ({
  triangleBase,
  containerClass,
}) => {
  useEffect(() => {
    const container = document.querySelector(
      `.${containerClass}`
    ) as HTMLDivElement;
    const instantiateGrid = () => {
      container.innerHTML = "";
      const width = document.body.clientWidth;
      const heigth = document.body.clientHeight * 0.4;

      let columns = Math.ceil(width / (triangleBase * 2)) + 1;
      let rows = Math.ceil((heigth / triangleBase) * 1.733);
      container.style.setProperty("--columns", columns.toString());

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          createTriangleSet(x + y * columns, x, y, container);
        }
      }
    };

    const createTriangleSet = (
      index: number,
      column: number,
      row: number,
      container: HTMLDivElement
    ) => {
      let el = document.createElement("div");
      el.classList.add("triangle-set");
      if (row % 2 == 0) el.classList.add("triangle-set--offset");

      container.appendChild(el);
    };

    window.addEventListener("resize", instantiateGrid);
    instantiateGrid();

    return () => {
      window.removeEventListener("resize", instantiateGrid);
    };
  }, [containerClass, triangleBase]);

  return <div className={containerClass}></div>;
};

interface GlowProps {
  glowId: string;
}

const Glow: React.FC<GlowProps> = ({ glowId }) => {
  const handleMouseMove = (event: MouseEvent) => {
    const glow = document.body.querySelector(`#${glowId}`) as HTMLDivElement;
    glow.style.top = event.pageY + "px";
    glow.style.left = event.pageX + "px";
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [glowId]);

  return <div id={glowId}></div>;
};

const App: React.FC = () => {
  return (
    <div className="hero">
      <Glow glowId="glow" />
      <TriangleGrid triangleBase={48} containerClass="triangle-container" />
      <h1>Move your cursor around!</h1>
    </div>
  );
};

export default App;
