import InputComponent from "./input";

export default function GenerateNewLabelCardComponent() {
  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">Generate New Label</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>

        <InputComponent />

        <div className="card-actions justify-between">
          <button className="btn">Print Label</button>
          <button className="btn btn-ghost">Edit Label</button>
        </div>
      </div>
    </div>
  );
}
