import Wave from "react-wavify";

export default function BgWave() {
  return (
    <Wave
      fill="oklch(68.5% 0.169 237.323)"
      paused={false}
      className="flex fixed z-1 bottom-[50%]"
      options={{
        height: 5,
        amplitude: 10,
        speed: 0.15,
        points: 5,
      }}
    />
  );
}
