export default function Stars() {
  const size = `${Math.random() * 3}px`;
  return (
    <div
      className="star"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    ></div>
  );
}
