function Badge({ texto, color = "#61DAFB" }) {
  return (
    <span
      style={{
        background: color,
        color: "#1a1a2e",
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "0.75rem",
        fontWeight: "bold",
      }}
    >
      {texto}
    </span>
  );
}
export default Badge;
