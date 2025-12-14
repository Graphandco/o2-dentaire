export default function PageHeader({ title }) {
   return (
      <div className="bg-white">
         <div className="wrapper py-20">
            <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-4/5 after:h-1 after:bg-gradient-to-r after:from-primary after:to-transparent">
               {title}
            </h1>
         </div>
      </div>
   );
}
