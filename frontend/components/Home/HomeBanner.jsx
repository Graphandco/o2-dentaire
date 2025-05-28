export default function HomeBanner({ banner }) {
   const { title, image } = banner;
   const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.url}`;
   return (
      <section
         style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
         className="relative after:absolute after:inset-0 after:bg-primary/70 after:z-0"
      >
         <div className="wrapper relative z-10 text-white py-36">
            <h2 className="text-5xl font-black">{title}</h2>
         </div>
      </section>
   );
}
