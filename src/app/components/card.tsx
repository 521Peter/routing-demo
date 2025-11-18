export default function Card({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <p>{text}</p>
    </div>
  );
}
