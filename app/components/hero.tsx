export default function HeroComponent() {
  return (
    <div className="hero bg-base-200 py-12">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/images/stash-panda-tag-logo-lg.png"
          className="max-w-full rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Stash Panda Tag</h1>
          <p className="py-6">
            Generate and print unique labels for all your stashed items. Keep
            your storage organized with custom IDs you can track at a glance.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
