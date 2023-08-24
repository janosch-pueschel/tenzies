export default function Die(props) {
  return (
    <div
      className={
        props.isHeld
          ? "bg-emerald-400 flex justify-center items-center aspect-square rounded-xl shadow-md cursor-pointer"
          : "bg-white flex justify-center items-center aspect-square rounded-xl shadow-md cursor-pointer"
      }
      onClick={() => props.hold(props.id)}
    >
      <p className="text-4xl font-bold">{props.value}</p>
    </div>
  );
}
