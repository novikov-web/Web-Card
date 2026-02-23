import Wave from "react-wavify";

export default function BgWaveMirrored() {
  return (
    <Wave
      fill="oklch(68.5% 0.169 237.323)"
      paused={false}
      className="absolute z-1 top-[49%] rotate-180"
      options={{
        height: 1,
        amplitude: 10,
        speed: 0.15,
        points: 5,
      }}
    />
  );
}
