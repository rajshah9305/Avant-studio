export default function Loading() {
  return (
    <div className="min-h-[70vh] grid place-items-center bg-black text-white">
      <div className="w-full max-w-2xl px-6">
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-white/10 rounded-md" />
          <div className="h-6 bg-white/10 rounded-md" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-40 bg-white/10 rounded-xl" />
            <div className="h-40 bg-white/10 rounded-xl" />
            <div className="h-40 bg-white/10 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
