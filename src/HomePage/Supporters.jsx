import React from "react";
    
function Supporters() {
    const supporters = [
        {Name : "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation"},
        {Name : "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation"},
        {Name : "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation"},
        {Name : "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation"},
        {Name : "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation"},
        {Name : "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation"},
        {Name : "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation"},
        {Name : "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation"},
    ];
  return (
    <div className="bg-white items-center justify-center space-y-8 flex flex-col text-black p-8">
        <div>
            <p className="text-4xl font-bold"> Supporters </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {supporters.map((supporter, index) => (
            <div key={index} className="flex flex-col items-center text-center">
                <img
                src={supporter.image}
                alt={supporter.Name}
                className="object-cover mb-2"
                />
            </div>
            ))}
      </div>
        <div>
            <button className="rounded-full bg-[#000F46] px-10 py-4 text-white"> Support Us </button>
        </div>
    </div>
  );
}

export default Supporters;