const GHOST_IDS = ["g1", "g2", "g3", "g4", "g5", "g6", "g7"];

function ProjectCardGhost() {
  return (
    <div
      className="cards-ghost w-[380px] h-[210px] sm:w-[550px] sm:h-[300px] shadow-md border-2 border-black flex gap-4 rounded-md bg-comic-background bg-cover bg-[color:var(--tertiary-color)]/40 overflow-hidden animate-pulse"
      aria-hidden
    >
      <div className="w-[40%] py-4 pl-4 flex flex-col gap-3 min-w-0">
        <div className="h-4 sm:h-5 rounded-md bg-black/20 w-[85%]" />
        <div className="space-y-2 flex-1">
          <div className="h-2.5 sm:h-3 rounded bg-black/15 w-full" />
          <div className="h-2.5 sm:h-3 rounded bg-black/15 w-[92%]" />
          <div className="h-2.5 sm:h-3 rounded bg-black/15 w-[70%] hidden sm:block" />
        </div>
        <div className="h-8 sm:h-9 w-24 sm:w-32 rounded-xl border-2 border-black/15 bg-black/15 mt-1" />
      </div>
      <div className="w-[60%] flex justify-center py-4 pr-4 min-w-0">
        <div className="w-full h-full min-h-[120px] sm:min-h-[180px] rounded-md border-2 border-black/15 bg-black/15" />
      </div>
    </div>
  );
}

const SuspenseLoader = () => {
  return (
    <div
      className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-12 p-2"
      role="status"
      aria-live="polite"
      aria-label="Loading projects"
    >
      {GHOST_IDS.map((id) => (
        <ProjectCardGhost key={id} />
      ))}
    </div>
  );
};

export default SuspenseLoader;
