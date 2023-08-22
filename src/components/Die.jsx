export default function Die(props) {
  return (
    <div className="flex justify-center items-center bg-white aspect-square rounded-xl shadow-md cursor-pointer">
      <p className="text-4xl font-bold">{props.value}</p>
    </div>
  );
}
