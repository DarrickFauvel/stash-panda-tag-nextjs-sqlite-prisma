import InputComponent from "./input";

export default function GenerateNewLabelCardComponent() {
  return (
    <div className="card bg-primary text-primary-content w-full max-w-sm">
      <div className="card-body">
        <h2 className="card-title">Generate New Label</h2>
        <p>Create a unique ID for your stash item, then print or edit before applying.</p>

        <InputComponent />

        <div className="card-actions justify-between">
          <button className="btn btn-primary">Print Label</button>
          <button className="btn btn-outline">Edit Label</button>
        </div>
      </div>
    </div>
  );
}
