import ThreeModel from "@/components/threeModel";

export default function Home() {
  return (
    <div className="h-screen">
      <ThreeModel modelPath="/Example_Projector.glb.json" />
    </div>
  );
}
