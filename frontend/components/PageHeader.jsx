export default function PageHeader({ title }) {
   return (
      <div className="bg-foreground">
         <div className="wrapper pt-20 pb-10">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
               {title}
            </h1>
         </div>
      </div>
   );
}
