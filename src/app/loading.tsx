export default function Loading() {
  return (
    <div className="bootloader" role="status" aria-live="polite" aria-label="Loading">
      <div className="bootloader__stack">
        <div className="bootloader__spinner" />
        <div>Loading</div>
      </div>
    </div>
  );
}
