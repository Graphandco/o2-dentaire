export default function HomeBanner({ data }) {
   return (
      <section
         style={{
            backgroundImage: `url(${data.acf.banner_image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
         className="relative after:absolute after:inset-0 after:bg-primary/70 after:z-0"
      >
         <div className="wrapper relative z-10 text-white text-center py-36">
            <h2 className="text-5xl font-black">{data.acf.banner_text}</h2>
         </div>
      </section>
   );
}
