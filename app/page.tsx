{/* En la sección de masajistas, reemplaza la etiqueta Image por video */}
<div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-inner pointer-events-none select-none">
  <video
    src={masajista.videoUrl} // Asegúrate de que tu interfaz tenga videoUrl
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover pointer-events-none select-none"
  />
</div>