import Wave from "react-wavify";

export default function BgWave() {
  return (
    <Wave
      fill="oklch(68.5% 0.169 237.323)"
      paused={false}
      className="absolute z-1 bottom-[49%]"
      options={{
        height: 5,
        amplitude: 10,
        speed: 0.15,
        points: 5,
      }}
    />
  );
}
