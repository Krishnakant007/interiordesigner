const VideoSection = () => (
  <section id="home" className="relative">
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/1214.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-4xl font-bold" style={{ color: '#cfaa5b' }}>
        Welcome to Future Interiors
      </h2>
      <p className="mt-4 text-xl" style={{ color: '#cfaa5b' }}>
        Crafting unique spaces for modern living
      </p>
    </div>
  
  </section>
);

export default VideoSection;
